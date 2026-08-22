import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/data/portfolio";

export function Services() {
  return (
    <section className="section services-section" aria-labelledby="services-title">
      <div className="shell">
        <SectionHeading
          eyebrow="05 / Collaboration"
          title="What I can help build."
          description="Available for focused roles and collaborations across software, AI, culture, and live technology."
          align="center"
        />
        <div className="services-grid" id="services-title">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="service-card">
                <Icon name={service.icon} />
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
