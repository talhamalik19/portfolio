import { ArrowDown, ArrowDownToLine, ArrowUpRight, Braces, Check, Code2, GraduationCap, Layers3, MapPin, MoveUpRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectGrid } from "@/components/portfolio/project-grid";
import { ContactForm } from "@/components/portfolio/contact-form";
import { certifications, skillGroups, workHighlights } from "@/lib/data/portfolio";
import { siteConfig } from "@/lib/data/site";

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <section className="hero-section shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> FULL STACK DEVELOPER</p>
            <h1 id="hero-heading">Building better<br />web <em>experiences.</em></h1>
            <p className="hero-intro">I’m <strong>Talha Malik</strong>, a Full Stack Developer.<br className="desktop-break" /> I build responsive interfaces and scalable applications<br className="desktop-break" /> with React, Next.js, and Node.js.</p>
            <div className="hero-actions">
              <a href="#projects" className="button button-dark">Explore my work <ArrowUpRight size={18} aria-hidden="true" /></a>
              <a href={siteConfig.cvUrl} className="button button-outline" download="Talha_Malik_Resume.pdf">Download resume <ArrowDownToLine size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-location"><MapPin size={15} aria-hidden="true" /><span>{siteConfig.location}</span><span className="hero-location-divider" /><span>3 years of experience</span></div>
          </div>
          <div className="hero-composition" aria-label="Full stack development with React, Next.js, and Node.js">
            <div className="composition-topline"><span>THE DEVELOPER’S TOOLKIT</span><MoveUpRight size={19} aria-hidden="true" /></div>
            <div className="composition-title">Full stack development.<br /><span>From interface to API.</span></div>
            <div className="composition-art" aria-hidden="true">
              <div className="composition-orbit orbit-outer" /><div className="composition-orbit orbit-inner" />
              <div className="code-tile"><Braces strokeWidth={1.2} size={62} /></div>
              <span className="floating-symbol symbol-one">&lt;/&gt;</span><span className="floating-symbol symbol-two">{"{ }"}</span><span className="composition-spark">✳</span>
            </div>
            <div className="stack-list">
              <div><span className="stack-mark react-mark">R</span><span>React.js<small>Interfaces & components</small></span><span className="stack-index">01</span></div>
              <div><span className="stack-mark next-mark">N<span>↗</span></span><span>Next.js<small>Web applications</small></span><span className="stack-index">02</span></div>
              <div><span className="stack-mark node-mark">JS</span><span>Node.js<small>APIs & backend</small></span><span className="stack-index">03</span></div>
            </div>
            <div className="composition-footer"><span className="tiny-dot" /> BUILT WITH PURPOSE</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} aria-hidden="true" /> A little about me</a>
        </section>

        <div className="expertise-strip"><div className="shell"><span>Full stack development</span><span className="strip-asterisk">✳</span><span>E-commerce</span><span className="strip-asterisk">✳</span><span>POS systems</span><span className="strip-asterisk">✳</span><span>API integration</span><span className="strip-asterisk">✳</span><span>Performance</span></div></div>

        <section className="section shell about-section" id="about" aria-labelledby="about-heading">
          <div className="section-label"><span>01 / ABOUT</span><span>A little context</span></div>
          <div className="about-layout">
            <h2 id="about-heading">Good interfaces.<br /><em>Solid foundations.</em></h2>
            <div className="about-copy">
              <p>I’m a Full Stack Developer with three years of experience building scalable, high-performance web applications. My work brings together React, Next.js, Node.js, API integration, and a focus on the user experience.</p>
              <p>At Unitedsol, I work with React and Next.js across e-commerce, POS, and CMS-driven applications. I collaborate with backend teams, optimize Core Web Vitals, review code, and mentor junior developers.</p>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">More about me on LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
          </div>
          <div className="about-facts">
            <div><strong>03<span>years</span></strong><p>Building web applications</p></div>
            <div><strong>04<span>projects</span></strong><p>Featured in this portfolio</p></div>
            <div><strong>~15<span>POS systems</span></strong><p>Receiving ongoing support</p></div>
            <div className="about-note"><Layers3 size={24} strokeWidth={1.4} aria-hidden="true" /><p>From the first component<br />to the complete experience.</p></div>
          </div>
        </section>

        <section className="projects-section section" id="projects" aria-labelledby="projects-heading">
          <div className="shell">
            <div className="section-label"><span>02 / SELECTED WORK</span><span>Ideas into interfaces</span></div>
            <div className="section-heading-row"><h2 id="projects-heading">A closer look at<br /><em>what I’ve built.</em></h2><p>E-commerce storefronts, a corporate website,<br className="desktop-break" /> and a desktop point-of-sale system.</p></div>
            <ProjectGrid />
          </div>
        </section>

        <section className="section shell experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-label"><span>03 / EXPERIENCE</span><span>Learning through building</span></div>
          <div className="experience-layout">
            <div className="experience-intro"><h2 id="experience-heading">Real work.<br /><em>Every day.</em></h2><p>Building interfaces, solving technical challenges,<br className="desktop-break" /> and growing alongside a development team.</p><a href={siteConfig.cvUrl} download="Talha_Malik_Resume.pdf" className="text-link">View my resume <ArrowDownToLine size={16} aria-hidden="true" /></a></div>
            <article className="experience-card">
              <div className="experience-card-top"><span className="company-mark">u<span>.</span></span><span className="date-tag">AUG 2023 — PRESENT</span></div>
              <h3>Front-End Developer</h3>
              <div className="company-meta"><strong>Unitedsol (PVT) Ltd.</strong><span>Islamabad, Pakistan</span></div>
              <ul>{workHighlights.map((highlight) => <li key={highlight}><span className="experience-bullet" /><span>{highlight}</span></li>)}</ul>
            </article>
          </div>
        </section>

        <section className="skills-section section" id="skills" aria-labelledby="skills-heading">
          <div className="shell">
            <div className="section-label"><span>04 / THE TOOLKIT</span><span>The tools behind the work</span></div>
            <div className="section-heading-row"><h2 id="skills-heading">A focused stack.<br /><em>A wider perspective.</em></h2><p>The technologies, tools, and practices<br className="desktop-break" /> I bring to development.</p></div>
            <div className="skills-grid">{skillGroups.map((group) => <article className="skill-group" key={group.title}><div className="skill-group-title"><h3>{group.title}</h3><span>{group.number}</span></div><div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section className="section shell education-section" id="education" aria-labelledby="education-heading">
          <div className="section-label"><span>05 / EDUCATION & LEARNING</span><span>Building on the fundamentals</span></div>
          <div className="education-layout">
            <div>
              <h2 id="education-heading">Always <em>learning.</em></h2>
              <article className="education-card">
                <GraduationCap size={28} strokeWidth={1.4} aria-hidden="true" />
                <p className="eyebrow">FEB 2019 — JAN 2023</p>
                <h3>Bachelor’s in<br />Software Engineering</h3>
                <p className="university">National University of Modern Languages</p>
                <p className="education-location">Islamabad, Pakistan <span>CGPA 3.59 / 4.0</span></p>
                <div className="education-detail"><strong>Final year project</strong><p>A full-stack MERN application with a React Native mobile app, RESTful APIs, and real-time functionality.</p></div>
                <div className="education-coursework"><strong>Coursework</strong><p>Software Engineering · Database Systems · Web Development · Mobile App Development</p></div>
              </article>
            </div>
            <div className="certifications">
              <div className="certification-heading"><Code2 size={20} strokeWidth={1.5} aria-hidden="true" /><h3>Certifications</h3><span>Udemy</span></div>
              {certifications.map((cert) => <article className="certification" key={cert.title}><span className="certification-check"><Check size={16} aria-hidden="true" /></span><div><h4>{cert.title}</h4><p>{cert.detail}</p></div><span className="certification-year">{cert.year}</span></article>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="shell">
            <div className="section-label"><span>06 / GET IN TOUCH</span><span>Let’s start a conversation</span></div>
            <div className="contact-layout">
              <div className="contact-intro"><h2 id="contact-heading">Have something<br /><em>in mind?</em></h2><p>Let’s talk about your next web application.</p>
              <div className="contact-details">
                <a className="contact-email" href={`mailto:${siteConfig.email}`}><span>DROP ME A LINE</span><strong>{siteConfig.email}</strong><ArrowUpRight size={22} aria-hidden="true" /></a>
                <a className="contact-phone" href="tel:+923365459350">{siteConfig.phone}<ArrowUpRight size={17} aria-hidden="true" /></a>
                <p className="contact-location"><MapPin size={16} aria-hidden="true" />{siteConfig.location}</p>
                <div className="contact-socials"><a href={siteConfig.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a><a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a><a href={siteConfig.cvUrl} download="Talha_Malik_Resume.pdf">Resume <ArrowDownToLine size={16} aria-hidden="true" /></a></div>
              </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
