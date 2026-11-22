#!/usr/bin/env python3
"""Render the Specimen Sheet plates described in design/CANVAS.md.

Run manually: python design/plates/make_plates.py
Pillow is a local tool, not an application dependency.
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
FONT_DIR = ROOT / ".agents" / "skills" / "canvas-design" / "canvas-fonts"
IMAGE_DIR = ROOT / "public" / "images"
OG_PATH = ROOT / "public" / "og.png"

S = 2  # supersample factor

PAPER = (247, 244, 239)
INK = (20, 18, 15)
MUTED = (107, 100, 92)
RULE = (228, 223, 214)
SIGNAL = (180, 71, 31)

SERIF = "InstrumentSerif-Regular.ttf"
SERIF_I = "InstrumentSerif-Italic.ttf"
SANS = "InstrumentSans-Regular.ttf"
MONO = "JetBrainsMono-Regular.ttf"
MONO_B = "JetBrainsMono-Bold.ttf"


class Sheet:
    def __init__(self, width, height):
        self.w = width
        self.h = height
        self.img = Image.new("RGB", (width * S, height * S), PAPER)
        self.d = ImageDraw.Draw(self.img)
        self._fonts = {}

    def font(self, name, size):
        key = (name, size)
        if key not in self._fonts:
            self._fonts[key] = ImageFont.truetype(
                str(FONT_DIR / name), int(round(size * S))
            )
        return self._fonts[key]

    # geometry -------------------------------------------------------------
    def hline(self, x1, x2, y, color=RULE, width=1):
        self.d.rectangle(
            [x1 * S, y * S, x2 * S, y * S + width * S - 1], fill=color
        )

    def vline(self, x, y1, y2, color=RULE, width=1):
        self.d.rectangle(
            [x * S, y1 * S, x * S + width * S - 1, y2 * S], fill=color
        )

    def box(self, x, y, w, h, color=RULE, width=1):
        self.d.rectangle(
            [x * S, y * S, (x + w) * S, (y + h) * S],
            outline=color,
            width=max(1, int(width * S)),
        )

    def fill(self, x, y, w, h, color):
        self.d.rectangle([x * S, y * S, (x + w) * S, (y + h) * S], fill=color)

    def arrow(self, x1, y1, x2, y2, color=INK, width=1, head=10):
        self.d.line([x1 * S, y1 * S, x2 * S, y2 * S], fill=color, width=width * S)
        import math

        angle = math.atan2(y2 - y1, x2 - x1)
        for offset in (2.6, -2.6):
            hx = x2 + head * math.cos(angle + offset)
            hy = y2 + head * math.sin(angle + offset)
            self.d.line([x2 * S, y2 * S, hx * S, hy * S], fill=color, width=width * S)

    # type -----------------------------------------------------------------
    def serif(self, text, x, y, size, color=INK, italic=False):
        f = self.font(SERIF_I if italic else SERIF, size)
        self.d.text((x * S, y * S), text, font=f, fill=color, anchor="lt")

    def sans(self, text, x, y, size, color=INK):
        f = self.font(SANS, size)
        self.d.text((x * S, y * S), text, font=f, fill=color, anchor="lt")

    def measure(self, text, size, tracking=0.0, bold=False):
        f = self.font(MONO_B if bold else MONO, size)
        if not text:
            return 0.0
        return sum(f.getlength(ch) / S for ch in text) + tracking * (len(text) - 1)

    def mono(self, text, x, y, size=13, color=MUTED, tracking=1.6, bold=False, upper=True):
        text = text.upper() if upper else text
        f = self.font(MONO_B if bold else MONO, size)
        ascent = f.getmetrics()[0] / S
        cursor = x
        for ch in text:
            self.d.text(
                (cursor * S, (y + ascent) * S), ch, font=f, fill=color, anchor="ls"
            )
            cursor += f.getlength(ch) / S + tracking
        return cursor

    def mono_right(self, text, right, y, size=13, color=MUTED, tracking=1.6, bold=False):
        width = self.measure(text.upper(), size, tracking, bold)
        self.mono(text, right - width, y, size, color, tracking, bold)

    def fit(self, name, text, max_width, start, floor=8):
        size = start
        while size > floor:
            f = self.font(name, size)
            if f.getlength(text) / S <= max_width:
                return size
            size -= 1
        return floor

    def save(self, path):
        path.parent.mkdir(parents=True, exist_ok=True)
        self.img.resize((self.w, self.h), Image.LANCZOS).save(path, optimize=True)
        print(f"wrote {path.relative_to(ROOT)}")


# ---------------------------------------------------------------------------
# Fig. 00 — portrait, 4:5
# ---------------------------------------------------------------------------
def portrait():
    s = Sheet(1200, 1500)
    m = 80

    s.mono("FIG. 00 / PORTRAIT", m, m, 12, MUTED, 2)
    s.mono_right("1200 X 1500 / 4:5", 1200 - m, m, 12, MUTED, 2)
    s.hline(m, 1200 - m, m + 40)

    for i in range(1, 4):
        s.vline(m + (1040 * i) / 4, m + 40, 1360)

    s.mono("SOFTWARE DEVELOPER", m, 168, 12, INK, 2)
    s.mono("FREELANCE EVENT & WEDDING COORDINATOR", m, 194, 12, MUTED, 2)

    size = s.fit(SERIF, "Firdiansyah", 1040, 196)
    step = size * 0.9
    s.serif("Muhammad", m, 660, size)
    s.serif("Rizky", m, 660 + step, size)
    s.serif("Firdiansyah", m, 660 + step * 2, size)

    s.hline(m, m + 240, 1236, SIGNAL, 2)
    s.mono("MALANG / INDONESIA", m, 1276, 12, MUTED, 2)
    s.mono_right("2026", 1200 - m, 1276, 12, MUTED, 2)
    s.mono_right("PORTFOLIO / ONE OF ONE", 1200 - m, 1390, 12, MUTED, 2)
    s.mono("INSTRUMENT SERIF / JETBRAINS MONO", m, 1390, 12, MUTED, 2)
    return s, IMAGE_DIR / "portrait.png"


# ---------------------------------------------------------------------------
# Fig. 01 — work index band, 3:2
# ---------------------------------------------------------------------------
def home_band():
    s = Sheet(2400, 1600)
    m = 120
    inner = 2400 - 2 * m

    for i in range(1, 12):
        s.vline(m + (inner * i) / 12, 176, 1420, RULE, 1)

    s.mono("FIELD NOTE / 01", m, m, 18, MUTED, 2.4)
    s.mono_right("MALANG / INDONESIA", 2400 - m, m, 18, MUTED, 2.4)
    s.hline(m, 2400 - m, m + 56)

    size = s.fit(SERIF, "Malang", 1800, 560)
    s.serif("Malang", m - 8, 500, size)

    s.hline(m, m + 320, 1180, SIGNAL, 3)
    s.mono("07.97 S / 112.63 E", m, 1220, 20, INK, 2.4)
    s.mono("EAST JAVA / 2026", m, 1264, 15, MUTED, 2.2)

    s.mono_right("FIG. 01 / 3:2", 2400 - m, 1264, 15, MUTED, 2.2)
    return s, IMAGE_DIR / "home-band.png"


# ---------------------------------------------------------------------------
# Fig. 02 — IVSS relational schema, 3:2
# ---------------------------------------------------------------------------
def ivss_schema():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 02 / SCHEMA / POSTGRESQL", m, m, 14, MUTED, 2.4)
    s.serif("One database, three roles", m, 176, 76)
    s.mono(
        "PUBLIC PROFILE AND INTERNAL CMS READ THE SAME RECORDS",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    def table(x, y, w, name, columns, note=None):
        height = 62 + 44 + len(columns) * 36 + (30 if note else 0)
        s.box(x, y, w, height, INK, 1)
        s.hline(x + 1, x + w - 1, y + 62, RULE)
        s.mono(name, x + 26, y + 22, 19, INK, 0.6, bold=True, upper=False)
        cy = y + 88
        for col in columns:
            s.mono(col, x + 26, cy, 17, MUTED, 0.4, upper=False)
            cy += 36
        if note:
            s.mono(note, x + 26, y + height - 32, 12, MUTED, 2)
        return y + height

    table(m, 420, 470, "users", ["id  pk", "name", "role_id  fk"], "3 ACCESS LEVELS")
    table(770, 420, 420, "roles", ["id  pk", "name", "level"])
    table(m, 900, 470, "profile_pages", ["slug  pk", "body", "updated_by  fk"])
    table(770, 900, 440, "facilities", ["id  pk", "name", "room"], "CMS MODULE")
    table(1330, 900, 440, "gallery", ["id  pk", "image", "activity"], "CMS MODULE")

    s.arrow(590, 505, 770, 505, SIGNAL, 2, 14)
    s.mono("role_id", 612, 470, 14, SIGNAL, 1.8, upper=False)
    s.arrow(295, 900, 295, 664, SIGNAL, 2, 14)
    s.mono("updated_by", 318, 770, 14, SIGNAL, 1.8, upper=False)

    s.mono("FOUR MODULES", 1860, 900, 15, MUTED, 2.2)
    for i, item in enumerate(["USERS", "FACILITIES", "GALLERY", "PROFILE"]):
        s.mono(f"0{i + 1}  {item}", 1860, 940 + i * 40, 17, INK, 2)

    s.hline(m, 2400 - m, 1420)
    s.mono("FIG. 02 / LABORATORIUM INTELLIGENT VISION AND SMART SYSTEM", m, 1450, 14, MUTED, 2.2)
    s.mono_right("PHP 8 / PDO / BOOTSTRAP 5", 2400 - m, 1450, 14, MUTED, 2.2)
    return s, IMAGE_DIR / "ivss-01.png"


# ---------------------------------------------------------------------------
# Fig. 03 — IVSS modules and roles, 3:2
# ---------------------------------------------------------------------------
def ivss_modules():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 03 / SCOPE / THREE ACCESS LEVELS", m, m, 14, MUTED, 2.4)
    s.serif("Four modules, one panel", m, 176, 76)
    s.mono(
        "WHAT THE LABORATORY EDITS WITHOUT A DEVELOPER",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    modules = [
        ("01", "User management", "Head of lab, lecturer, and student, each with its own menu."),
        ("02", "Facility inventory", "Rooms and equipment the laboratory actually operates."),
        ("03", "Activity gallery", "Photos and records from laboratory activities."),
        ("04", "Dynamic profile", "Public pages written in the CMS, not in templates."),
    ]

    col_w = 780
    row_h = 420
    origin_x, origin_y = m, 400
    for index, (number, title, body) in enumerate(modules):
        col = index % 2
        row = index // 2
        x = origin_x + col * (col_w + 80)
        y = origin_y + row * row_h

        s.hline(x, x + col_w, y, INK)
        s.mono(f"{number} / MODULE", x, y + 24, 14, MUTED, 2.4)
        size = s.fit(SERIF, title, col_w, 58)
        s.serif(title, x, y + 66, size)
        words = body.split(" ")
        line = ""
        cy = y + 148
        for word in words:
            candidate = f"{line} {word}".strip()
            if s.font(SANS, 26).getlength(candidate) / S > col_w:
                s.sans(line, x, cy, 26, MUTED)
                cy += 38
                line = word
            else:
                line = candidate
        if line:
            s.sans(line, x, cy, 26, MUTED)

    s.vline(1860, 400, 1200, RULE)
    s.mono("ROLES", 1900, 400, 15, MUTED, 2.4)
    for i, role in enumerate(["KEPALA LAB", "DOSEN", "MAHASISWA"]):
        y = 456 + i * 110
        s.mono(f"0{i + 1}", 1900, y, 14, MUTED, 2)
        s.serif(role.title(), 1900, y + 26, 40)

    s.hline(m, 2400 - m, 1420)
    s.mono("MODELED ONCE, APPLIED ACROSS EVERY MODULE", m, 1450, 14, MUTED, 2.2)
    s.mono_right("FIG. 03", 2400 - m, 1450, 14, MUTED, 2.2)
    return s, IMAGE_DIR / "ivss-02.png"


# ---------------------------------------------------------------------------
# Fig. 04 — competition platform entity flow, 3:2
# ---------------------------------------------------------------------------
def lomba_flow():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 04 / ENTITY FLOW / LARAVEL 12", m, m, 14, MUTED, 2.4)
    s.serif("Where the data moves", m, 176, 76)
    s.mono(
        "STUDENT INTERFACE / REST API / ADMIN PANEL",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    def node(x, y, label, note, w=320, h=150):
        s.box(x, y, w, h, INK, 1)
        s.mono(label, x + 22, y + 26, 20, INK, 2.2, bold=True)
        s.mono(note, x + 22, y + 92, 13, MUTED, 1.8)
        return (x, y, w, h)

    lane1_y = 470
    lane2_y = 950
    gap = 70
    widths = 320

    row = [
        ("USERS", "SANCTUM TOKEN"),
        ("BOOKMARKS", "PER USER"),
        ("COMPETITIONS", "CORE RECORD"),
        ("PARTICIPANTS", "REGISTRATION"),
        ("SCORES", "JUDGING"),
    ]
    for i, (label, note) in enumerate(row):
        x = m + i * (widths + gap)
        node(x, lane1_y, label, note)
        if i < len(row) - 1:
            s.arrow(x + widths, lane1_y + 75, x + widths + gap, lane1_y + 75, INK, 2, 10)

    row2 = [
        ("ARTICLES", "EDITORIAL"),
        ("APPROVALS", "BEFORE PUBLISHING"),
        ("PUBLIC SITE", "STUDENT VIEW"),
    ]
    for i, (label, note) in enumerate(row2):
        x = m + i * (widths + gap)
        node(x, lane2_y, label, note)
        if i < len(row2) - 1:
            s.arrow(x + widths, lane2_y + 75, x + widths + gap, lane2_y + 75, SIGNAL if i == 1 else INK, 2, 10)

    s.mono("APPROVAL RUNS WHERE CONTENT IS WRITTEN", m, 1240, 16, MUTED, 2.2)
    s.mono("NOT WHERE IT IS DISPLAYED", m, 1276, 16, MUTED, 2.2)

    s.hline(m, 2400 - m, 1420)
    s.mono("FIG. 04 / WEB INFORMASI LOMBA JURUSAN", m, 1450, 14, MUTED, 2.2)
    s.mono_right("2025", 2400 - m, 1450, 14, MUTED, 2.2)
    return s, IMAGE_DIR / "lomba-01.png"


# ---------------------------------------------------------------------------
# Fig. 05 — approval workflow, 3:2
# ---------------------------------------------------------------------------
def lomba_approval():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 05 / APPROVAL / ADMIN PANEL", m, m, 14, MUTED, 2.4)
    s.serif("Nothing publishes itself", m, 176, 76)
    s.mono(
        "DRAFT, REVIEW, AND ONE DELIBERATE PAUSE",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    def stage(x, y, label, note, w=520, h=260, accent=False):
        s.box(x, y, w, h, SIGNAL if accent else INK, 2 if accent else 1)
        s.mono(label, x + 30, y + 40, 24, INK if not accent else SIGNAL, 2.4, bold=True)
        s.mono(note, x + 30, y + 110, 15, MUTED, 1.8)

    stage(m, 480, "DRAFT", "CONTENT WRITTEN")
    stage(780, 480, "REVIEW", "ROLE CHECK")
    stage(1440, 480, "PUBLISHED", "VISIBLE TO STUDENTS", accent=True)

    s.arrow(m + 520, 610, 780, 610, INK, 2, 14)
    s.mono("SUBMIT", 604, 580, 14, MUTED, 2)
    s.arrow(1300, 610, 1440, 610, SIGNAL, 3, 16)
    s.mono("APPROVE", 1320, 580, 14, SIGNAL, 2)

    stage(780, 1080, "REJECTED", "BACK TO AUTHOR", 520, 220)
    s.arrow(1040, 740, 1040, 1080, INK, 2, 14)
    s.mono("RETURN", 1060, 900, 14, MUTED, 2)
    s.arrow(780, 1190, m + 260, 1190, INK, 2, 14)
    s.arrow(m + 260, 1190, m + 260, 740, INK, 2, 14)
    s.mono("REVISE", 420, 1160, 14, MUTED, 2)

    s.hline(m, 2400 - m, 1420)
    s.mono("A DEADLINE ANNOUNCED TWICE IS WORSE THAN ONE ANNOUNCED LATE", m, 1450, 14, MUTED, 2)
    s.mono_right("FIG. 05", 2400 - m, 1450, 14, MUTED, 2)
    return s, IMAGE_DIR / "lomba-02.png"


# ---------------------------------------------------------------------------
# Fig. 06 — event runsheet, 3:2
# ---------------------------------------------------------------------------
def event_runsheet():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 06 / RUNSHEET / TEMPLATE", m, m, 14, MUTED, 2.4)
    s.serif("One schedule, every vendor", m, 176, 76)
    s.mono(
        "THE DEADLINE IS THE CEREMONY, NOT THE DEPLOY",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    headers = [("TIME", m), ("CUE", m + 360), ("OWNER", m + 1560)]
    for label, x in headers:
        s.mono(label, x, 400, 15, MUTED, 2.4)
    s.hline(m, 2400 - m, 434, INK)

    rows = [
        ("06:00", "Venue access and floor plan check", "Crew"),
        ("08:00", "Vendor arrival and equipment count", "Liaison"),
        ("10:00", "Ceremony", "Coordinator"),
        ("12:30", "Reception and catering service", "Crew"),
        ("16:00", "Teardown and handover", "Crew"),
    ]

    y = 460
    for index, (time, cue, owner) in enumerate(rows):
        highlighted = index == 2
        if highlighted:
            s.fill(m, y, 2160, 150, (243, 238, 230))
            s.vline(m, y, y + 150, SIGNAL, 4)
        s.mono(time, m + 24, y + 48, 26, INK if highlighted else MUTED, 2)
        s.serif(cue, m + 360, y + 30, 40)
        s.mono(owner, m + 1560, y + 56, 16, MUTED, 2.2)
        s.hline(m, 2400 - m, y + 150)
        y += 150

    s.mono("06:00 TO 16:00 / TEN HOURS / ONE COORDINATOR", m, 1330, 15, MUTED, 2.2)
    s.mono_right("FIG. 06", 2400 - m, 1450, 14, MUTED, 2.2)
    s.hline(m, 2400 - m, 1420)
    return s, IMAGE_DIR / "event-01.png"


# ---------------------------------------------------------------------------
# Fig. 08 — SkinMatch extraction and classification pipeline, 3:2
# ---------------------------------------------------------------------------
def skinmatch_pipeline():
    s = Sheet(2400, 1600)
    m = 120

    s.mono("FIG. 08 / PIPELINE / SKINMATCH", m, m, 14, MUTED, 2.4)
    s.serif("Reading the label", m, 176, 76)
    s.mono(
        "FROM A PACKAGING PHOTO TO FOUR SKIN TYPES",
        m,
        282,
        16,
        MUTED,
        2.2,
    )

    stages = [
        ("01", "PHOTO", "PACKAGING COMPOSITION"),
        ("02", "OCR", "OPENCV / PADDLEOCR"),
        ("03", "CLASSIFIER", "TF-IDF / LINEARSVC"),
        ("04", "MATCH", "FOUR SKIN TYPES"),
    ]
    gap = 60
    box_w = (2400 - 2 * m - gap * 3) / 4
    box_y = 430
    box_h = 220

    for index, (number, label, note) in enumerate(stages):
        x = m + index * (box_w + gap)
        s.box(x, box_y, box_w, box_h, INK, 1)
        s.mono(f"{number} / STAGE", x + 28, box_y + 26, 13, MUTED, 2.2)
        s.mono(label, x + 28, box_y + 78, 24, INK, 2.4, bold=True)
        s.mono(note, x + 28, box_y + 140, 13, MUTED, 1.6)
        if index < len(stages) - 1:
            s.arrow(
                x + box_w,
                box_y + box_h / 2,
                x + box_w + gap,
                box_y + box_h / 2,
                SIGNAL,
                2,
                12,
            )

    s.mono("RAPIDFUZZ REPAIRS NEAR-MATCHES AT STAGE 02", m, 700, 14, MUTED, 2)

    s.hline(m, 2400 - m, 770, INK)
    s.mono("MATCH LEVEL / FOUR CATEGORIES", m, 802, 14, MUTED, 2.4)
    s.mono_right("MULTI-LABEL", 2400 - m, 802, 14, MUTED, 2.4)

    categories = [
        ("01", "Oily & acne-prone"),
        ("02", "Dry"),
        ("03", "Sensitive"),
        ("04", "Normal"),
    ]
    row_y = 870
    row_h = 110
    for index, (number, label) in enumerate(categories):
        y = row_y + index * row_h
        s.hline(m, 2400 - m, y)
        s.mono(number, m, y + 34, 15, MUTED, 2)
        s.serif(label, m + 120, y + 18, 44)
    s.hline(m, 2400 - m, row_y + len(categories) * row_h)

    s.hline(m, 2400 - m, 1420)
    s.mono("ONE PRODUCT CAN MATCH MORE THAN ONE TYPE", m, 1450, 14, MUTED, 2.2)
    s.mono_right("FIG. 08 / SKINMATCH", 2400 - m, 1450, 14, MUTED, 2.2)
    return s, IMAGE_DIR / "skinmatch-pipeline.png"


# ---------------------------------------------------------------------------
# Fig. 07 — Open Graph card, 1200x630
# ---------------------------------------------------------------------------
def og_card():
    s = Sheet(1200, 630)
    m = 64

    s.mono("PORTFOLIO / 2026", m, m, 12, MUTED, 2)
    s.mono_right("MALANG, INDONESIA", 1200 - m, m, 12, MUTED, 2)
    s.hline(m, 1200 - m, m + 28)

    size = s.fit(SERIF, "Muhammad Rizky", 1000, 96)
    s.serif("Muhammad Rizky", m, 130, size)
    s.serif("Firdiansyah", m, 130 + size * 0.92, size)

    s.hline(m, m + 120, 372, SIGNAL, 3)
    s.mono("SOFTWARE DEVELOPER", m, 400, 14, INK, 2.2)
    s.mono("FREELANCE EVENT & WEDDING COORDINATOR", m, 426, 12, MUTED, 2)

    s.hline(m, 1200 - m, 512)
    s.mono("BACKEND / DATA / EVENTS", m, 540, 12, MUTED, 2)
    s.mono_right("FIG. 07", 1200 - m, 540, 12, MUTED, 2)
    return s, OG_PATH


def main():
    plates = [
        portrait,
        home_band,
        ivss_schema,
        ivss_modules,
        lomba_flow,
        lomba_approval,
        event_runsheet,
        skinmatch_pipeline,
        og_card,
    ]
    for build in plates:
        sheet, path = build()
        sheet.save(path)


if __name__ == "__main__":
    main()
