import React, { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, Terminal, X } from 'lucide-react';
import { Lang } from '../data/siteConfig';
import { ProjectItem } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Lang;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, lang, onClose }) => {
  const [copiedBrew, setCopiedBrew] = useState(false);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const copyBrew = async () => {
    if (!project.brewCommand) return;
    try {
      await navigator.clipboard.writeText(project.brewCommand);
      setCopiedBrew(true);
      setTimeout(() => setCopiedBrew(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={lang === 'no' ? 'Lukk vindu' : 'Close dialog'}
        >
          <X size={18} />
        </button>

        <div className="modal-top">
          <div className="modal-badges">
            <span className={`accent-badge accent-${project.accent}`}>
              {project.badge[lang]}
            </span>
            <span className="status-pill">{project.status[lang]}</span>
            <span className="year-pill">{project.year}</span>
          </div>
          <h2>{project.title}</h2>
          <p className="modal-tagline">{project.tagline[lang]}</p>
        </div>

        <div className="modal-preview-wrap">
          <ProjectPreview type={project.preview} lang={lang} />
        </div>

        <div className="modal-body">
          <p className="modal-summary">{project.summary[lang]}</p>

          <h3>{lang === 'no' ? 'Nøkkelfunksjoner & arkitektur' : 'Key highlights & architecture'}</h3>
          <ul className="modal-highlights">
            {project.highlights[lang].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {project.brewCommand && (
            <div className="brew-box">
              <div className="brew-label">
                <Terminal size={14} />
                <span>Homebrew</span>
              </div>
              <div className="brew-row">
                <code>{project.brewCommand}</code>
                <button className="icon-copy-btn" onClick={copyBrew}>
                  {copiedBrew ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedBrew ? (lang === 'no' ? 'Kopiert' : 'Copied') : 'Copy'}</span>
                </button>
              </div>
            </div>
          )}

          <div className="modal-footer">
            <div className="tech-list">
              {project.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm"
              >
                <span>GitHub</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
