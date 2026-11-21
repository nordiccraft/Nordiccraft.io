import React, { useRef } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: 'cyan' | 'emerald' | 'indigo' | 'amber' | 'rose' | 'violet';
  tilt?: boolean;
  beam?: boolean;
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
}

const ACCENT_RGBA: Record<NonNullable<SpotlightCardProps['accent']>, string> = {
  cyan: '85, 199, 219',
  emerald: '45, 212, 191',
  indigo: '129, 140, 248',
  amber: '216, 155, 108',
  rose: '251, 113, 133',
  violet: '167, 139, 250',
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  accent = 'cyan',
  tilt = true,
  beam = false,
  onClick,
  role,
  tabIndex,
  onKeyDown,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);

    if (tilt) {
      const px = (x / rect.width - 0.5) * 2; // -1 to 1
      const py = (y / rect.height - 0.5) * 2;
      const rx = (-py * 4.5).toFixed(2);
      const ry = (px * 4.5).toFixed(2);
      el.style.setProperty('--tilt-x', `${rx}deg`);
      el.style.setProperty('--tilt-y', `${ry}deg`);
    }
  };

  const handleMouseLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--tilt-x', '0deg');
    el.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      role={role}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      className={`spotlight-card ${beam ? 'has-beam' : ''} ${className}`}
      style={{ '--accent-rgb': ACCENT_RGBA[accent] } as React.CSSProperties}
    >
      {beam && <div className="border-beam" aria-hidden="true" />}
      <div className="spotlight-border" aria-hidden="true" />
      <div className="spotlight-glow" aria-hidden="true" />
      <div className="spotlight-content">{children}</div>
    </div>
  );
};
