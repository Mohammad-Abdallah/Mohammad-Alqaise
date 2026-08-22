import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { education, experience } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="experience" className="section journey-section">
      <div className="shell">
        <SectionHeading
          eyebrow="04 / Journey"
          title="Experience shaped by different rooms."
          description="From software teams to stages and community spaces."
        />
        <div className="journey-grid">
          <div>
            <Reveal>
              <h3 className="column-title">Experience</h3>
            </Reveal>
            <div className="timeline">
              {experience.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="timeline-item">
                    <span className="timeline-dot" />
                    <div className="timeline-meta">
                      <span>{item.location}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <h4>{item.title}</h4>
                    <p className="organization">{item.organization}</p>
                    <p>{item.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="column-title">Education</h3>
            </Reveal>
            <div className="education-list">
              {education.map((item, index) => (
                <Reveal key={item.degree} delay={index * 0.08}>
                  <article className="education-card">
                    <div className="education-number">0{index + 1}</div>
                    <span>{item.location}</span>
                    <h4>{item.degree}</h4>
                    <p className="organization">{item.school}</p>
                    <p>{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
