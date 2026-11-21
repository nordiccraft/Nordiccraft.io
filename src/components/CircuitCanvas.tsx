import React, { useEffect, useRef } from 'react';

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  isSquare: boolean;
  isCopper: boolean;
  pulseOffset: number;
}

/**
 * Interactive Nordic Circuit Constellation canvas.
 * Echoes the cyan/copper circuit nodes & pixel motifs from NC_Logo.png.
 */
export const CircuitCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const nodeCount = Math.min(62, Math.max(28, Math.floor((width * height) / 26000)));
    const nodes: NodePoint[] = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      size: i % 5 === 0 ? 3.2 : 1.8 + Math.random() * 1.4,
      isSquare: i % 4 === 0,
      isCopper: i % 6 === 0,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const onMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    const LINK_DIST = 148;
    const MOUSE_DIST = 210;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (const n of nodes) {
        if (!prefersReduced) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < -20) n.x = width + 20;
          if (n.x > width + 20) n.x = -20;
          if (n.y < -20) n.y = height + 20;
          if (n.y > height + 20) n.y = -20;

          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_DIST && dist > 1) {
              const pull = (1 - dist / MOUSE_DIST) * 0.012;
              n.x += dx * pull;
              n.y += dy * pull;
            }
          }
        }
      }

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.16;
            const isCopperLink = a.isCopper || b.isCopper;
            ctx.strokeStyle = isCopperLink
              ? `rgba(216, 155, 108, ${alpha * 0.9})`
              : `rgba(85, 199, 219, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Draw luminous connections to cursor
        if (mouse.active) {
          const mdist = Math.hypot(a.x - mouse.x, a.y - mouse.y);
          if (mdist < MOUSE_DIST) {
            const mAlpha = (1 - mdist / MOUSE_DIST) * 0.42;
            ctx.strokeStyle = a.isCopper
              ? `rgba(216, 155, 108, ${mAlpha})`
              : `rgba(125, 211, 252, ${mAlpha})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes (circles & digital pixel squares)
      for (const n of nodes) {
        const pulse = 0.65 + 0.35 * Math.sin(time * 0.002 + n.pulseOffset);
        const mdist = mouse.active ? Math.hypot(n.x - mouse.x, n.y - mouse.y) : 9999;
        const boost = mdist < MOUSE_DIST ? (1 - mdist / MOUSE_DIST) * 0.55 : 0;
        const alpha = Math.min(1, 0.35 * pulse + boost);

        ctx.fillStyle = n.isCopper
          ? `rgba(216, 155, 108, ${alpha})`
          : `rgba(85, 199, 219, ${alpha})`;

        if (n.isSquare) {
          const s = n.size * 1.9;
          ctx.fillRect(n.x - s / 2, n.y - s / 2, s, s);
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="circuit-canvas" aria-hidden="true" />;
};
