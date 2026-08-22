import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="shell">
        <SectionHeading
          eyebrow="02 / Capabilities"
          title="Across code, intelligence, and live experience."
          description="A multidisciplinary toolkit for building useful technology in digital and physical spaces."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.07}>
              <article className="skill-card">
                <div className="card-icon">
                  <Icon name={group.icon} />
                </div>
                <div className="card-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
