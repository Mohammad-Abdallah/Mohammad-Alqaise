"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowIcon, DownloadIcon, SocialIcon } from "@/components/icons";
import { SmartImage } from "@/components/smart-image";
import {
  contact,
  portfolioImages,
  socialLinks,
} from "@/data/portfolio";

function TrackingVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="tracking-visual" aria-hidden="true">
      <div className="visual-chrome">
        <div>
          <i />
          <i />
          <i />
        </div>
        <span>MA_VISION.LAB</span>
        <span>LIVE</span>
      </div>
      <div className="visual-label visual-label-top">
        <span />
        VISION SYSTEM / SUBJECT LOCK
      </div>
      <div className="visual-label visual-label-bottom">
        <span>SUBJECT 01</span>
        <span>94.6% CONF.</span>
      </div>
      <div className="visual-grid" />
      <div className="target-rings">
        <i />
        <i />
        <i />
      </div>
      <motion.div
        className="spotlight"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-25, 24, -8, -25],
                y: [-8, 18, -18, -8],
                opacity: [0.65, 0.9, 0.7, 0.65],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="tracking-box"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [-18, 20, -4, -18],
                y: [8, -10, 18, 8],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <i className="corner c1" />
        <i className="corner c2" />
        <i className="corner c3" />
        <i className="corner c4" />
        <div className="tracked-person">
          <SmartImage
            src={portfolioImages.profile.src}
            alt={portfolioImages.profile.alt}
            fit={portfolioImages.profile.fit}
            className="tracked-person-image"
            sizes="(max-width: 820px) 46vw, 260px"
            priority
            fallbackLabel="MA"
          />
        </div>
        <span className="track-point" />
      </motion.div>
      <motion.div
        className="scan-line"
        animate={reduceMotion ? undefined : { top: ["18%", "82%", "18%"] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="coordinate x">X 032.68</div>
      <div className="coordinate y">Y 018.42</div>
      <div className="vision-readout">
        <span>
          <i />
          TRACKING
        </span>
        <strong>31 FPS</strong>
        <span>CV / STAGE_01</span>
      </div>
    </div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const visualY = useTransform(scrollY, [0, 700], [0, 80]);
  const contentY = useTransform(scrollY, [0, 700], [0, 35]);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />
      <div className="signal-field" aria-hidden="true">
        {Array.from({ length: 10 }, (_, index) => (
          <i key={index} />
        ))}
      </div>
      <div className="hero-watermark" aria-hidden="true">
        MA / 26
      </div>

      <div className="shell hero-layout">
        <motion.div
          className="hero-content"
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-meta">
            <span>Mohammad Abdalla</span>
            <div className="availability">
              <span className="availability-dot" />
              Oslo · Available for opportunities
            </div>
          </div>
          <h1 id="hero-title">
            <motion.span
              className="title-line"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              AI <b>&amp;</b> Creative
            </motion.span>
            <motion.span
              className="title-line title-line-shift"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              Technology
            </motion.span>
            <motion.span
              className="title-line"
              initial={reduceMotion ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <em>Developer.</em>
            </motion.span>
          </h1>
          <p className="hero-intro">
            Computer Engineer and Master&apos;s student in Artificial
            Intelligence, building digital tools and intelligent systems for
            arts, culture, and social impact.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="#contact">
              Contact me
            </a>
            <a
              className="text-link"
              href={contact.cv === "[ADD_CV_LINK_HERE]" ? "#contact" : contact.cv}
              title={
                contact.cv === "[ADD_CV_LINK_HERE]"
                  ? "Add a CV link in data/portfolio.ts"
                  : undefined
              }
            >
              <DownloadIcon />
              Download CV
            </a>
          </div>
          <div className="hero-disciplines" aria-label="Areas of expertise">
            <span>AI systems</span>
            <span>Computer vision</span>
            <span>Full-stack</span>
            <span>Creative technology</span>
          </div>
          <div className="hero-socials">
            <span>Connect</span>
            <div>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit Mohammad Abdalla on ${link.label}`}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual-wrap"
          style={{ y: visualY }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
          <div className="visual-frame">
            <TrackingVisual />
          </div>
          <div className="visual-status-card">
            <span>System</span>
            <strong>Human-centered technology</strong>
            <i />
          </div>
          <div className="visual-caption">
            <span>01</span>
            <p>
              Engineering systems
              <br />
              for human stories.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="shell hero-foot">
        <span>Scroll to explore</span>
        <div className="scroll-rule">
          <motion.i
            animate={reduceMotion ? undefined : { x: ["-100%", "420%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span>Oslo, Norway · 59.9139° N</span>
      </div>
    </section>
  );
}
