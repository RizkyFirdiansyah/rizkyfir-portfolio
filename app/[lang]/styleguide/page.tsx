import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  AwardIcon,
  BadgeCheckIcon,
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CodeIcon,
  DatabaseIcon,
  DownloadIcon,
  FileTextIcon,
  GithubIcon,
  GraduationCapIcon,
  LayersIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import {
  Badge,
  Callout,
  Numeral,
  Panel,
  PanelFooter,
  PanelHeader,
  Spec,
  SpecGrid,
} from "@/components/ui/panel";
import { getLocale } from "@/lib/i18n/get-locale";

export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const palette = [
  { token: "paper", hex: "#F5F1EB", note: "Latar utama", className: "bg-paper" },
  { token: "surface", hex: "#EBE6DC", note: "Panel · non-teks", className: "bg-surface" },
  { token: "ink", hex: "#2C2825", note: "Teks utama · 13:1", className: "bg-ink" },
  { token: "muted", hex: "#736D65", note: "Teks sekunder · 4.5:1", className: "bg-muted" },
  { token: "rule", hex: "#DDD7CC", note: "Hairline · non-teks", className: "bg-rule" },
  { token: "signal", hex: "#8B5E3C", note: "Aksen · 5.1:1", className: "bg-signal" },
];

const spacing = [
  { name: "1", px: 4, width: "w-1" },
  { name: "2", px: 8, width: "w-2" },
  { name: "3", px: 12, width: "w-3" },
  { name: "4", px: 16, width: "w-4" },
  { name: "6", px: 24, width: "w-6" },
  { name: "8", px: 32, width: "w-8" },
  { name: "12", px: 48, width: "w-12" },
  { name: "16", px: 64, width: "w-16" },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="font-mono text-meta text-muted uppercase">{children}</h2>
  );
}

export default async function StyleguidePage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-page px-4 py-16 md:px-6 md:py-24">
      <header className="flex items-baseline justify-between gap-6 border-b border-rule pb-6">
        <div>
          <p className="font-mono text-meta text-muted uppercase">
            Internal · noindex
          </p>
          <h1 className="mt-2 font-serif text-h2">Style guide</h1>
        </div>
        <Link
          href={`/${locale}`}
          className="font-mono text-meta uppercase underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
        >
          Back
        </Link>
      </header>

      <div className="divide-y divide-rule">
        <section className="py-12">
          <SectionHeading>Palette</SectionHeading>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-6">
            {palette.map((color) => (
              <div key={color.token}>
                <div className={`h-16 w-full border border-rule ${color.className}`} />
                <p className="mt-3 font-mono text-meta">{color.token}</p>
                <p className="font-mono text-meta text-muted">{color.hex}</p>
                <p className="mt-1 text-sm text-muted">{color.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <SectionHeading>Typography</SectionHeading>
          <div className="mt-6 space-y-10">
            <div>
              <p className="font-mono text-meta text-muted uppercase">
                display · Instrument Serif
              </p>
              <p className="mt-2 font-serif text-display text-balance">
                Tenang, cerdas, <em>personal</em>
              </p>
            </div>
            <div>
              <p className="font-mono text-meta text-muted uppercase">
                h2 · Instrument Serif
              </p>
              <p className="mt-2 font-serif text-h2">
                Satu elemen dominan per halaman
              </p>
            </div>
            <div>
              <p className="font-mono text-meta text-muted uppercase">
                body · Instrument Sans · 17px/1.65
              </p>
              <p className="mt-2 max-w-measure text-body">
                Teks isi dibatasi pada 60–68 karakter per baris agar mata tidak
                kehilangan tempat saat berpindah baris. Panjang kalimat dijaga
                pendek, dan setiap paragraf membawa satu gagasan.
              </p>
            </div>
            <div>
              <p className="font-mono text-meta text-muted uppercase">
                meta · JetBrains Mono · 12px · 0.12em
              </p>
              <p className="mt-2 font-mono text-meta">
                2026 — CASE STUDY — FRONTEND
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <SectionHeading>Spacing · skala 4px</SectionHeading>
          <ul className="mt-6 space-y-3">
            {spacing.map((step) => (
              <li key={step.name} className="flex items-center gap-4">
                <span className="w-16 font-mono text-meta text-muted">
                  {step.name} · {step.px}px
                </span>
                <span className={`h-3 bg-rule ${step.width}`} />
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12">
          <SectionHeading>Interactive states</SectionHeading>
          <div className="mt-6 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="text-sm text-muted">
                Tautan memakai underline, bukan warna saja. Focus ring 2px
                `signal` dengan offset 2px — tekan Tab untuk memeriksa.
              </p>
              <p className="mt-4">
                <Link
                  href={`/${locale}`}
                  className="underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:text-signal hover:decoration-signal"
                >
                  Contoh tautan dalam paragraf
                </Link>
              </p>
            </div>

            <div className="flex flex-wrap items-start gap-4 md:col-span-5">
              <Link
                href={`/${locale}`}
                className="inline-flex min-h-12 items-center border border-ink px-4 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:bg-ink hover:text-paper"
              >
                Primary
              </Link>
              <Link
                href={`/${locale}`}
                className="inline-flex min-h-12 items-center border border-rule px-4 font-mono text-meta uppercase transition-colors duration-(--duration-quick) hover:border-ink"
              >
                Secondary
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <SectionHeading>Components</SectionHeading>
          <div className="mt-6 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <Panel>
                <PanelHeader
                  icon={<CodeIcon width={16} height={16} />}
                  label="Panel · header"
                />
                <SpecGrid>
                  <Spec
                    label="Tahun"
                    value="2026"
                    icon={<CalendarIcon width={16} height={16} />}
                  />
                  <Spec
                    label="Peran"
                    value="Backend"
                    icon={<BriefcaseIcon width={16} height={16} />}
                  />
                  <Spec
                    label="Stack"
                    value="Laravel · PostgreSQL"
                    icon={<LayersIcon width={16} height={16} />}
                  />
                </SpecGrid>
                <PanelFooter>
                  <span className="font-mono text-meta text-muted uppercase">
                    Panel footer
                  </span>
                </PanelFooter>
              </Panel>
            </div>

            <div className="space-y-6 md:col-span-5">
              <Callout>Satu pernyataan serif, dibatasi garis kiri 2px.</Callout>
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Laravel</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge icon={<CheckIcon width={12} height={12} />}>Verified</Badge>
                <Numeral>01</Numeral>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <SectionHeading>Icons · stroke 1.5</SectionHeading>
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              { name: "mail", icon: <MailIcon /> },
              { name: "phone", icon: <PhoneIcon /> },
              { name: "github", icon: <GithubIcon /> },
              { name: "linkedin", icon: <LinkedinIcon /> },
              { name: "code", icon: <CodeIcon /> },
              { name: "database", icon: <DatabaseIcon /> },
              { name: "server", icon: <ServerIcon /> },
              { name: "layers", icon: <LayersIcon /> },
              { name: "calendar", icon: <CalendarIcon /> },
              { name: "pin", icon: <MapPinIcon /> },
              { name: "cap", icon: <GraduationCapIcon /> },
              { name: "briefcase", icon: <BriefcaseIcon /> },
              { name: "award", icon: <AwardIcon /> },
              { name: "shield", icon: <ShieldCheckIcon /> },
              { name: "file", icon: <FileTextIcon /> },
              { name: "badge", icon: <BadgeCheckIcon /> },
              { name: "download", icon: <DownloadIcon /> },
              { name: "arrow", icon: <ArrowRightIcon /> },
            ].map((entry) => (
              <li
                key={entry.name}
                className="flex flex-col items-center gap-2 border border-rule bg-surface px-4 py-3"
              >
                <span className="text-ink">{entry.icon}</span>
                <span className="font-mono text-meta text-muted">
                  {entry.name}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-12">
          <SectionHeading>Motion · 4 pola</SectionHeading>
          <ol className="mt-6 space-y-6">
            <li className="grid gap-2 md:grid-cols-12">
              <span className="font-mono text-meta text-muted md:col-span-3">
                01 · Hover
              </span>
              <div className="md:col-span-9">
                <Link
                  href={`/${locale}`}
                  className="underline decoration-rule decoration-1 underline-offset-4 transition-colors duration-(--duration-quick) hover:decoration-signal"
                >
                  Underline slide, 150ms
                </Link>
              </div>
            </li>
            <li className="grid gap-2 md:grid-cols-12">
              <span className="font-mono text-meta text-muted md:col-span-3">
                02 · Icon swap
              </span>
              <div className="md:col-span-9">
                <Link
                  href={`/${locale}`}
                  className="group inline-flex items-center gap-2 font-mono text-meta uppercase"
                >
                  Baca case study
                  <span
                    aria-hidden
                    className="transition-transform duration-(--duration-fast) ease-smooth-out group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </li>
            <li className="grid gap-2 md:grid-cols-12">
              <span className="font-mono text-meta text-muted md:col-span-3">
                03 · Row hover
              </span>
              <div className="md:col-span-9">
                <span className="font-mono text-meta">
                  Baris index proyek bergeser 4px saat hover, 250ms
                </span>
              </div>
            </li>
            <li className="grid gap-2 md:grid-cols-12">
              <span className="font-mono text-meta text-muted md:col-span-3">
                04 · Page
              </span>
              <div className="md:col-span-9">
                <span className="font-mono text-meta">
                  Work → case study memakai ViewTransition, 250ms
                </span>
              </div>
            </li>
          </ol>
          <p className="mt-8 max-w-measure text-sm text-muted">
            Semua durasi merujuk token `--duration-*`. Guard
            `prefers-reduced-motion` mematikan animasi tanpa menghilangkan
            informasi.
          </p>
        </section>
      </div>
    </div>
  );
}
