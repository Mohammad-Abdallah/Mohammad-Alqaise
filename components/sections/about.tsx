import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartImage } from "@/components/smart-image";
import { portfolioImages } from "@/data/portfolio";

const facts = [
  ["Location", "Oslo, Norway"],
  ["Focus", "AI × Culture"],
  ["Background", "Computer Engineering"],
  ["Perspective", "Palestinian"],
];

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="shell about-layout">
        <div className="about-aside">
          <SectionHeading
            eyebrow="01 / About"
            title="Technology with a human point of view."
          />
          <Reveal>
            <div className="about-portrait-frame">
              <SmartImage
                src={portfolioImages.profile.src}
                alt={portfolioImages.profile.alt}
                fit={portfolioImages.profile.fit}
                className="about-portrait"
                sizes="(max-width: 820px) 70vw, 340px"
                fallbackLabel="Mohammad Abdalla"
              />
              <span>Oslo · Norway</span>
            </div>
          </Reveal>
        </div>

        <div className="about-content">
          <Reveal>
            <p className="about-lead">
              Mohammad Abdalla is a Palestinian Computer Engineer based in Oslo,
              currently studying a Master&apos;s in Artificial Intelligence. His
              work combines <span>software development</span>,{" "}
              <span>AI</span>, <span>creative technology</span>, and performing
              arts.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="about-copy">
              <p>
                He has experience building digital platforms, working with
                computer vision, and supporting theatre technology and live
                performance environments. His projects explore how technology
                can support artists, cultural organizations, and communities.
              </p>
              <p>
                He is especially interested in practical AI tools, creative
                software, interactive systems, and technology for social and
                cultural impact.
              </p>
            </div>
          </Reveal>
          <Reveal className="facts-grid" delay={0.12}>
            {facts.map(([label, value]) => (
              <div key={label} className="fact">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
