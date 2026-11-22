import type { ReactNode } from "react";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";
import { IconTile } from "@/components/ui/panel";
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
  value?: string;
  icon: ReactNode;
};

/**
 * Contact rows. No address is rendered as selectable text; each link carries
 * an accessible name for screen readers and a title for pointer users.
 * Items with an empty value in lib/site.ts are skipped.
 */
export function ContactLinks({ labels }: { labels: ContactLabels }) {
  const items: ContactItem[] = [];

  if (site.email) {
    items.push({
      key: "email",
      href: `mailto:${site.email}`,
      label: labels.email,
      value: site.email,
      icon: <MailIcon width={18} height={18} />,
    });
  }

  if (site.phone) {
    items.push({
      key: "phone",
      href: `tel:${site.phone}`,
      label: labels.phone,
      value: site.phone,
      icon: <PhoneIcon width={18} height={18} />,
    });
  }

  if (site.linkedin) {
    items.push({
      key: "linkedin",
      href: site.linkedin,
      label: labels.linkedin,
      value: "linkedin.com/in/rizkyfirdiansyah",
      icon: <LinkedinIcon width={18} height={18} />,
    });
  }

  if (site.github) {
    items.push({
      key: "github",
      href: site.github,
      label: labels.github,
      value: "github.com",
      icon: <GithubIcon width={18} height={18} />,
    });
  }

  return (
    <ul className="border-t border-rule">
      {items.map((item) => (
        <li key={item.key}>
          <a
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={item.key === "linkedin" || item.key === "github" ? "_blank" : undefined}
            rel={
              item.key === "linkedin" || item.key === "github" ? "noreferrer noopener me" : undefined
            }
            className="group flex min-h-16 items-center gap-4 border-b border-rule py-3 transition-colors duration-(--duration-quick) hover:bg-surface"
          >
            <IconTile>{item.icon}</IconTile>
            <div className="flex flex-col">
              <span className="font-mono text-meta uppercase text-ink">{item.label}</span>
              {item.value ? (
                <span className="font-mono text-meta text-muted">{item.value}</span>
              ) : null}
            </div>
            <span
              aria-hidden
              className="ml-auto text-muted transition-colors duration-(--duration-quick) group-hover:text-signal"
            >
              <ArrowUpRightIcon width={16} height={16} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
