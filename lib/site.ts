/**
 * Site identity. Single source of truth for the name, contact details,
 * and the CV file. Everything else reads from here.
 *
 * The phone number is stored in international format so the tel: link
 * works outside Indonesia. It is never rendered as visible text.
 */
export const site = {
  name: "Muhammad Rizky Firdiansyah",
  position: "Software Developer",
  secondary: "Freelance Event & Wedding Coordinator",
  location: {
    en: "Malang, East Java",
    id: "Malang, Jawa Timur",
  },
  email: "mr.frdsyh@gmail.com",
  phone: "+62895403239310",
  linkedin: "https://www.linkedin.com/in/rizkyfirdiansyah",
  /** Fill in to show the GitHub icon. Empty string hides it. */
  github: "https://github.com/RizkyFirdiansyah",
  cv: "/CV_MuhammadRizkyFirdiansyah_2026.pdf",
  startYear: 2026,
};
