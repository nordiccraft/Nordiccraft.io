import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Cpu,
  Github,
  Layers,
  Mail,
  Monitor,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { Lang, SITE_CONFIG } from './data/siteConfig';
import { PROJECTS, ProjectCategory, ProjectItem } from './data/projects';
import { SpotlightCard } from './components/SpotlightCard';
import { ProjectPreview } from './components/ProjectPreview';
import { ProjectModal } from './components/ProjectModal';
import { CircuitCanvas } from './components/CircuitCanvas';
import { TechMarquee } from './components/TechMarquee';

type FilterType = 'all' | ProjectCategory;

const CAPABILITY_ICONS = {
  layers: Layers,
  cpu: Cpu,
  monitor: Monitor,
  sparkles: Sparkles,
};

export const App: React.FC = () => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('nordiccraft-locale');
      if (saved === 'en' || saved === 'no') return saved;
    } catch {
      // ignore storage errors
    }
    return 'en';
  });
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setScrollProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'NordicCraft — Nordic Software & Product Studio'
        : 'NordicCraft — Nordisk programvare- og produktstudio';
    try {
      localStorage.setItem('nordiccraft-locale', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // Subtle scroll-reveal observer
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filter]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // ignore
    }
  };

  return (
    <div className="page-shell">
      {/* Top Scroll-Progress Aurora Beam */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Ambient Nordic Aurora, Interactive Circuit Canvas & Cursor-Lit Grid */}
      <div className="aurora-bg" aria-hidden="true">
        <div className="aurora-orb orb-1" />
        <div className="aurora-orb orb-2" />
        <div className="aurora-orb orb-3" />
        <div className="grid-overlay" />
        <div className="cursor-grid-glow" />
      </div>
      <CircuitCanvas />

      {/* Floating Glass Navbar */}
      <header className="navbar-wrap">
        <nav className="navbar" aria-label="Primary navigation">
          <a href="#top" className="brand-link">
            <img
              src="/nc-mark.png"
              alt="NordicCraft"
              className="brand-mark-img"
              width={36}
              height={36}
            />
            <span className="brand-name">
              <strong>NORDIC</strong> <span>CRAFT</span>
            </span>
          </a>

          <div className="nav-links">
            <a href="#projects">{SITE_CONFIG.nav.projects[lang]}</a>
            <a href="#capabilities">{SITE_CONFIG.nav.capabilities[lang]}</a>
            <a href="#craft">{SITE_CONFIG.nav.philosophy[lang]}</a>
            <a href="#contact">{SITE_CONFIG.nav.contact[lang]}</a>
          </div>

          <div className="nav-actions">
            <div className="lang-switch" role="group" aria-label="Language switch">
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                type="button"
              >
                EN
              </button>
              <button
                className={lang === 'no' ? 'active' : ''}
                onClick={() => setLang('no')}
                type="button"
              >
                NO
              </button>
            </div>
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="nav-icon-btn"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero container">
          <div className="hero-logo-wrap">
            <img
              src="/nc-logo.png"
              alt="NordicCraft logo"
              className="hero-logo-img"
            />
          </div>

          <div className="hero-badge">
            <span className="pulse-dot" />
            <span>{SITE_CONFIG.hero.badge[lang]}</span>
          </div>

          <h1 className="hero-title">
            {SITE_CONFIG.hero.titleLine1[lang]}
            <br />
            <span className="gradient-text">{SITE_CONFIG.hero.titleHighlight[lang]}</span>
          </h1>

          <p className="hero-subtitle">{SITE_CONFIG.hero.subtitle[lang]}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>{SITE_CONFIG.hero.ctaPrimary[lang]}</span>
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>{SITE_CONFIG.hero.ctaSecondary[lang]}</span>
            </a>
          </div>

          {/* Interactive Terminal Ribbon */}
          <div className="hero-terminal">
            <Terminal size={15} className="term-icon" />
            <span className="term-prompt">$</span>
            <code>brew install --cask nordiccraft/flowfile/flowfile</code>
            <button
              type="button"
              className="term-tag"
              onClick={() => setSelectedProject(PROJECTS[0])}
            >
              FlowFile v2 <ArrowUpRight size={13} />
            </button>
          </div>

          {/* Stats Strip */}
          <div className="stats-grid">
            {SITE_CONFIG.stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label[lang]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* KINETIC TECH MARQUEE */}
        <TechMarquee />

        {/* PROJECTS BENTO GRID */}
        <section id="projects" className="section container">
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">{SITE_CONFIG.projectsSection.eyebrow[lang]}</span>
              <h2>{SITE_CONFIG.projectsSection.title[lang]}</h2>
              <p className="section-subtitle">{SITE_CONFIG.projectsSection.subtitle[lang]}</p>
            </div>

            <div className="filter-pills" role="tablist">
              {(['all', 'product', 'platform', 'hardware'] as FilterType[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={filter === key}
                  className={`filter-pill ${filter === key ? 'active' : ''}`}
                  onClick={() => setFilter(key)}
                >
                  {SITE_CONFIG.projectsSection.filters[key][lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="bento-grid">
            {filteredProjects.map((project, index) => {
              const isHeroCard = filter === 'all' && index === 0;
              const isWideCard = filter === 'all' && (index === 1 || index === 2);
              const spanClass = isHeroCard
                ? 'bento-span-2 bento-hero-card'
                : isWideCard
                  ? 'bento-span-1'
                  : 'bento-span-1';

              return (
                <SpotlightCard
                  key={project.id}
                  accent={project.accent}
                  beam={isHeroCard}
                  className={`project-card reveal ${spanClass}`}
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                >
                  <div className="project-card-top">
                    <span className={`accent-badge accent-${project.accent}`}>
                      {project.badge[lang]}
                    </span>
                    <span className="card-arrow" aria-hidden="true">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="project-card-heading">
                    <h3>{project.title}</h3>
                    <p>{project.tagline[lang]}</p>
                  </div>

                  <div className="project-preview-slot">
                    <ProjectPreview type={project.preview} lang={lang} />
                  </div>

                  <div className="project-card-footer">
                    <div className="tech-list">
                      {project.tech.slice(0, isHeroCard ? 5 : 3).map((t) => (
                        <span key={t} className="tech-chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="details-hint">
                      {SITE_CONFIG.projectsSection.viewDetails[lang]}
                    </span>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section id="capabilities" className="section container">
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">{SITE_CONFIG.capabilitiesSection.eyebrow[lang]}</span>
              <h2>{SITE_CONFIG.capabilitiesSection.title[lang]}</h2>
              <p className="section-subtitle">
                {SITE_CONFIG.capabilitiesSection.subtitle[lang]}
              </p>
            </div>
          </div>

          <div className="capabilities-grid">
            {SITE_CONFIG.capabilitiesSection.items.map((item, idx) => {
              const Icon = CAPABILITY_ICONS[item.icon];
              const accents: Array<'cyan' | 'indigo' | 'emerald' | 'amber'> = [
                'cyan',
                'indigo',
                'emerald',
                'amber',
              ];
              return (
                <SpotlightCard
                  key={idx}
                  accent={accents[idx % accents.length]}
                  className="capability-card reveal"
                >
                  <div className="cap-icon-box">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.description[lang]}</p>
                  <div className="tech-list">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tech-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* CRAFT / PHILOSOPHY SECTION */}
        <section id="craft" className="section container">
          <div className="section-header reveal">
            <div>
              <span className="eyebrow">{SITE_CONFIG.philosophySection.eyebrow[lang]}</span>
              <h2>{SITE_CONFIG.philosophySection.title[lang]}</h2>
            </div>
          </div>

          <div className="pillars-grid">
            {SITE_CONFIG.philosophySection.pillars.map((pillar) => (
              <div key={pillar.number} className="pillar-card reveal">
                <span className="pillar-num">{pillar.number}</span>
                <h3>{pillar.title[lang]}</h3>
                <p>{pillar.description[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section container">
          <SpotlightCard accent="cyan" beam tilt={false} className="contact-card reveal">
            <div className="contact-inner">
              <span className="eyebrow">{SITE_CONFIG.contactSection.eyebrow[lang]}</span>
              <h2>{SITE_CONFIG.contactSection.title[lang]}</h2>
              <p className="contact-subtitle">{SITE_CONFIG.contactSection.subtitle[lang]}</p>

              <div className="contact-actions">
                <a href={`mailto:${SITE_CONFIG.email}`} className="btn btn-primary">
                  <Mail size={16} />
                  <span>{SITE_CONFIG.contactSection.sendEmail[lang]}</span>
                </a>
                <button type="button" onClick={handleCopyEmail} className="btn btn-secondary">
                  {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  <span>
                    {copiedEmail
                      ? SITE_CONFIG.contactSection.copied[lang]
                      : SITE_CONFIG.email}
                  </span>
                </button>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Github size={16} />
                  <span>{SITE_CONFIG.contactSection.githubLabel[lang]}</span>
                </a>
              </div>
            </div>
          </SpotlightCard>
        </section>
      </main>

      <footer className="footer container">
        <div className="footer-left">
          <img
            src="/nc-mark.png"
            alt="NordicCraft"
            className="footer-mark-img"
            width={24}
            height={24}
          />
          <span className="brand-name">
            <strong>NORDIC</strong> <span>CRAFT</span>
          </span>
          <span className="footer-sep">·</span>
          <span className="footer-tagline">{SITE_CONFIG.footer.tagline[lang]}</span>
        </div>
        <div className="footer-right">
          <span>
            © {new Date().getFullYear()} {SITE_CONFIG.brand}. {SITE_CONFIG.footer.rights[lang]}
          </span>
        </div>
      </footer>

      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
