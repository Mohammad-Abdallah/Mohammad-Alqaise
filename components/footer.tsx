import { SocialIcon } from "@/components/icons";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a href="#main" className="brand" aria-label="Back to top">
          <span>MA</span>
          <span className="brand-dot" />
        </a>
        <div className="footer-socials" aria-label="Social media">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit Mohammad Alqaise on ${link.label}`}
            >
              <SocialIcon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <p>© {new Date().getFullYear()} Mohammad Alqaise</p>
      </div>
    </footer>
  );
}
