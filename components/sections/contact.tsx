import {
  ArrowIcon,
  DownloadIcon,
  SocialIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import {
  contact,
  socialLinks,
  type SocialIconName,
} from "@/data/portfolio";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon?: SocialIconName;
  external?: boolean;
  download?: boolean;
};

const links: ContactLink[] = [
  {
    label: "Email",
    value: contact.email,
    href:
      contact.email === "[ADD_EMAIL_HERE]"
        ? "#contact"
        : `mailto:${contact.email}`,
  },
  ...socialLinks.map((link) => ({
    ...link,
    value: link.href,
    external: true,
  })),
  {
    label: "Download CV",
    value: contact.cv,
    href: contact.cv === "[ADD_CV_LINK_HERE]" ? "#contact" : contact.cv,
    download: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-glow" aria-hidden="true" />
      <div className="shell contact-inner">
        <Reveal>
          <span className="eyebrow">06 / Start a conversation</span>
          <h2>
            Let&apos;s make something
            <br />
            <em>useful</em> together.
          </h2>
          <p>
            I am open to opportunities, collaborations, internships, freelance
            projects, and creative technology work.
          </p>
          <a
            className="contact-primary button button-primary"
            href={
              contact.email === "[ADD_EMAIL_HERE]"
                ? "#contact"
                : `mailto:${contact.email}`
            }
          >
            Start a conversation
            <ArrowIcon />
          </a>
        </Reveal>
        <Reveal className="contact-links" delay={0.1}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              aria-label={
                link.external
                  ? `Visit Mohammad Abdalla on ${link.label}`
                  : link.label
              }
              title={
                link.value.startsWith("[ADD_")
                  ? `Replace ${link.value} in data/portfolio.ts`
                  : undefined
              }
            >
              <span>
                {link.icon ? <SocialIcon name={link.icon} /> : null}
                {link.download ? <DownloadIcon /> : null}
                {link.label}
              </span>
              <ArrowIcon />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
