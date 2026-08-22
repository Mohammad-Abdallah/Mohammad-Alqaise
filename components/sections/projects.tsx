"use client";

import { motion } from "motion/react";
import { ArrowIcon, Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SmartImage } from "@/components/smart-image";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="shell">
        <SectionHeading
          eyebrow="03 / Selected work"
          title="Projects where disciplines meet."
          description="Digital products, intelligent systems, and technical work shaped by cultural context."
        />
        <div className="projects-list">
          {projects.map((project, index) => (
            <Reveal key={project.title}>
              <motion.article
                className={`project-card project-card-${index + 1} ${
                  index === 1 ? "project-card-reverse" : ""
                }`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="project-visual">
                  <div className={`project-art project-art-${index + 1}`}>
                    <div className="project-window-bar">
                      <div>
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>PROJECT_{project.number} / LIVE SYSTEM</span>
                    </div>
                    {project.image ? (
                      <SmartImage
                        src={project.image.src}
                        alt={project.image.alt}
                        fit={project.image.fit}
                        className="project-media"
                        sizes="(max-width: 820px) 90vw, 45vw"
                        fallbackLabel={project.title}
                      />
                    ) : null}
                    <span className="project-index">{project.number}</span>
                    <Icon name={project.icon} className="project-icon" />
                    {index === 0 ? (
                      <div className="network-art" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    ) : null}
                    {index === 1 ? (
                      <div className="vision-art" aria-hidden="true">
                        <span />
                      </div>
                    ) : null}
                    {index === 2 ? (
                      <div className="stage-art" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </div>
                    ) : null}
                    <div className="project-art-meta">
                      <span>{project.category.split(" / ")[0]}</span>
                      <span>Selected work</span>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-topline">
                    <p className="project-category">{project.category}</p>
                    <span>Featured / {project.number}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-foot">
                    <span>Code × research × cultural context</span>
                    <i>
                      <ArrowIcon />
                    </i>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
