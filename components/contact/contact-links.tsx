import type { ReactNode } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { site } from "@/lib/site";

type ContactLabels = {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

type ContactItem = {
  key: string;
  href: string;
  label: string;
  icon: ReactNode;
};

/**
 * Icon-only contact links. No address is rendered as selectable text;
 * each link carries an accessible name for screen readers and a title
 * for pointer users. Items with an empty value in lib/site.ts are skipped.
 */
export function ContactLinks({ labels }: { labels: ContactLabels }) {
  const items: ContactItem[] = [];

  if (site.email) {
    items.push({
      key: "email",
      href: `mailto:${site.email}`,
      label: labels.email,
      icon: <MailIcon />,
    });
  }

  if (site.phone) {
    items.push({
      key: "phone",
      href: `tel:${site.phone}`,
      label: labels.phone,
      icon: <PhoneIcon />,
    });
  }

  if (site.linkedin) {
    items.push({
      key: "linkedin",
      href: site.linkedin,
      label: labels.linkedin,
      icon: <LinkedinIcon />,
    });
  }

  if (site.github) {
    items.push({
      key: "github",
      href: site.github,
      label: labels.github,
      icon: <GithubIcon />,
    });
  }

  return (
    <ul className="flex flex-wrap items-center gap-1">
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            aria-label={item.label}
            title={item.label}
            rel={item.key === "linkedin" || item.key === "github" ? "me" : undefined}
            className="flex size-11 items-center justify-center border border-transparent text-muted transition-colors duration-(--duration-quick) hover:border-rule hover:text-signal"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
