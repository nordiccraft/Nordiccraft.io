import React, { useState } from 'react';
import { ProjectPreviewType } from '../data/projects';
import { Lang } from '../data/siteConfig';

interface ProjectPreviewProps {
  type: ProjectPreviewType;
  lang: Lang;
}

const PAIRING_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

function makePairingCode(): string {
  const pick = () => PAIRING_ALPHABET[Math.floor(Math.random() * PAIRING_ALPHABET.length)];
  return `${pick()}${pick()}${pick()} · ${pick()}${pick()}${pick()}`;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type, lang }) => {
  const [dualPane, setDualPane] = useState(true);
  const [selectedRow, setSelectedRow] = useState(0);
  const [pairingCode, setPairingCode] = useState('K7M · 4PX');

  switch (type) {
    case 'flowfile': {
      const files = [
        { icon: 'folder', name: 'AppKitBridge', meta: '14 items' },
        { icon: 'folder', name: 'LiquidGlassUI', meta: '9 items' },
        { icon: 'swift', name: 'WorkspaceSync.swift', meta: '18 KB' },
        { icon: 'swift', name: 'DeepSearchEngine.swift', meta: '24 KB' },
      ];
      return (
        <div
          className="preview-window preview-flowfile"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mac-titlebar">
            <span className="mac-dot red" />
            <span className="mac-dot yellow" />
            <span className="mac-dot green" />
            <span className="mac-tab active">Sources/FlowFile</span>
            <span className="mac-tab">Releases</span>
            <button
              type="button"
              className={`mac-pill interactive-pill ${dualPane ? 'active' : ''}`}
              onClick={() => setDualPane((v) => !v)}
              title={lang === 'en' ? 'Toggle Dual Pane' : 'Bytt mellom enkelt-/topanel'}
            >
              ⌘D {dualPane ? 'Dual' : 'Single'}
            </button>
          </div>
          <div className={`flowfile-panes ${dualPane ? '' : 'single-pane'}`}>
            <div className="ff-pane">
              {files.map((f, idx) => (
                <button
                  key={f.name}
                  type="button"
                  className={`ff-row ff-btn-row ${selectedRow === idx ? 'selected' : ''}`}
                  onClick={() => setSelectedRow(idx)}
                >
                  <span className={`ff-icon ${f.icon}`} />
                  <span>{f.name}</span>
                  <span className="ff-meta">{f.meta}</span>
                </button>
              ))}
            </div>
            {dualPane && (
              <div className="ff-pane secondary">
                <div className="ff-row">
                  <span className="ff-icon tag-cyan" />
                  <span>FlowFile-v2.dmg</span>
                  <span className="ff-meta">SHA-256 ✓</span>
                </div>
                <div className="ff-row">
                  <span className="ff-icon tag-emerald" />
                  <span>Casks/flowfile.rb</span>
                  <span className="ff-meta">Homebrew</span>
                </div>
                <div className="ff-row">
                  <span className="ff-icon file" />
                  <span>Package.swift</span>
                  <span className="ff-meta">0 deps</span>
                </div>
                <div className="ff-row muted">
                  <span>Sync: Mirror · 0 conflicts</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    case 'flyt':
      return (
        <div className="preview-window preview-flyt" aria-hidden="true">
          <div className="mini-header">
            <span className="live-dot indigo" />
            <span>Ops Hub · Modules</span>
            <span className="mini-chip">AI + Teams</span>
          </div>
          <div className="flyt-grid">
            <div className="flyt-tile">
              <span className="tile-label">{lang === 'en' ? 'Service Desk' : 'Sakssystem'}</span>
              <span className="tile-val">{lang === 'en' ? '12 active' : '12 aktive'}</span>
              <div className="mini-bars">
                <span style={{ height: '45%' }} />
                <span style={{ height: '75%' }} />
                <span style={{ height: '60%' }} />
                <span style={{ height: '95%' }} />
                <span style={{ height: '80%' }} />
              </div>
            </div>
            <div className="flyt-tile">
              <span className="tile-label">{lang === 'en' ? 'Shift & Ops' : 'Vakt & Drift'}</span>
              <span className="tile-val emerald">99.9%</span>
              <span className="tile-sub">SSO · ACS · PDF</span>
            </div>
          </div>
        </div>
      );

    case 'zcreenly':
      return (
        <div
          className="preview-window preview-zcreenly"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mini-header">
            <span className="live-dot emerald" />
            <span>WS /ws · Connected</span>
            <span className="mini-chip">MDM</span>
          </div>
          <div className="zcreenly-body">
            <button
              type="button"
              className="pairing-box interactive-pairing"
              onClick={() => setPairingCode(makePairingCode())}
              title={lang === 'en' ? 'Click to rotate pairing code' : 'Klikk for ny paringskode'}
            >
              <span className="pairing-label">PAIRING CODE</span>
              <span className="pairing-code">{pairingCode}</span>
            </button>
            <div className="screen-list">
              <div className="screen-item">
                <span className="live-dot emerald" />
                <span>OM55B-Entrance</span>
                <span className="screen-mode">SIGNAGE</span>
              </div>
              <div className="screen-item">
                <span className="live-dot cyan" />
                <span>EM-P15R-Kids-02</span>
                <span className="screen-mode">ARCADE</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'signly':
      return (
        <div className="preview-window preview-signly" aria-hidden="true">
          <div className="mini-header">
            <span className="live-dot violet" />
            <span>M365 · Delta Sync</span>
            <span className="mini-chip">Graph API</span>
          </div>
          <div className="signly-flow">
            <div className="signly-step done">✓ Template</div>
            <div className="signly-line" />
            <div className="signly-step done">✓ Rules</div>
            <div className="signly-line" />
            <div className="signly-step active">● M365</div>
          </div>
        </div>
      );

    case 'games':
      return (
        <div className="preview-window preview-games" aria-hidden="true">
          <div className="mini-header">
            <span className="live-dot amber" />
            <span>Touch Kiosk · Arcade</span>
            <span className="mini-chip">60 FPS</span>
          </div>
          <div className="games-stage">
            <div className="arcade-badge">🎮 KIOSK ARCADE</div>
            <div className="arcade-pills">
              <span>Arcade</span>
              <span>Learning</span>
              <span>Ad-free</span>
            </div>
          </div>
        </div>
      );

    case 'booking':
      return (
        <div className="preview-window preview-booking" aria-hidden="true">
          <div className="mini-header">
            <span className="live-dot rose" />
            <span>Smart-QR Kiosk</span>
            <span className="mini-chip">SMS Live</span>
          </div>
          <div className="booking-row">
            <div className="qr-mini">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="booking-meta">
              <span className="booking-table">
                {lang === 'en' ? 'Table #14 ready' : 'Bord #14 klart'}
              </span>
              <span className="booking-sub">
                {lang === 'en' ? 'Hold 09:42 · Checked in' : 'Holdetid 09:42 · Innsjekket'}
              </span>
            </div>
          </div>
        </div>
      );

    case 'audio':
      return (
        <div className="preview-window preview-audio" aria-hidden="true">
          <div className="mini-header">
            <span className="live-dot cyan" />
            <span>OverlayFS · Read-Only</span>
            <span className="mini-chip">WD 15s</span>
          </div>
          <div className="audio-wave">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} className="wave-bar" style={{ animationDelay: `${i * 90}ms` }} />
            ))}
          </div>
        </div>
      );
  }
};
