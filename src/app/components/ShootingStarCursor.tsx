import { useEffect, useRef } from "react";
import logo3D from "../../assets/technohaven_logo.jpg";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
}

interface Star {
  angle: number;
  dist: number;
  size: number;
  speed: number;
  phase: number;
  hue: number;
}

export function ShootingStarCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const particles: Particle[] = [];
    let mouse = { x: -100, y: -100 };
    let prevMouse = { x: -100, y: -100 };
    let raf = 0;

    // Load logo
    const logoImg = new Image();
    logoImg.src = logo3D;
    let logoReady = false;
    logoImg.onload = () => { logoReady = true; };

    // Ambient orbiting stars
    const stars: Star[] = [];
    for (let i = 0; i < 60; i++) {
      stars.push({
        angle: Math.random() * Math.PI * 2,
        dist: 0.22 + Math.random() * 0.38,
        size: 0.8 + Math.random() * 2,
        speed: 0.0003 + Math.random() * 0.001,
        phase: Math.random() * Math.PI * 2,
        hue: 200 + Math.random() * 40,
      });
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      prevMouse = { ...mouse };
      mouse = { x: e.clientX, y: e.clientY };

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      const count = Math.min(Math.floor(speed * 0.4), 8);

      for (let i = 0; i < count; i++) {
        const t = i / Math.max(count, 1);
        const px = prevMouse.x + dx * t;
        const py = prevMouse.y + dy * t;
        particles.push({
          x: px + (Math.random() - 0.5) * 4,
          y: py + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 1.2 + dx * 0.02,
          vy: (Math.random() - 0.5) * 1.2 + dy * 0.02 + 0.3,
          life: 1,
          maxLife: 0.6 + Math.random() * 0.5,
          size: 1.5 + Math.random() * 2.5,
          hue: 200 + Math.random() * 40,
        });
      }
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const logoSize = Math.min(canvas.width, canvas.height) * 0.45;
      const now = performance.now() * 0.001;

      // Draw logo centered, ghostly
      // Commented out - logo removed from background

      // Ambient orbiting stars
      for (const s of stars) {
        const a = s.angle + now * s.speed;
        const flicker = 0.4 + 0.6 * Math.sin(now * 3 + s.phase);
        const rd = s.dist * Math.min(canvas.width, canvas.height);
        const sx = cx + Math.cos(a) * rd;
        const sy = cy + Math.sin(a) * rd;

        const glowR = Math.max(0, s.size * 5);
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, glowR);
        grad.addColorStop(0, `hsla(${s.hue}, 80%, 88%, ${flicker * 0.25})`);
        grad.addColorStop(1, `hsla(${s.hue}, 80%, 88%, 0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        const coreR = Math.max(0, s.size * flicker);
        ctx.beginPath();
        ctx.arc(sx, sy, coreR, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 60%, 96%, ${flicker * 0.7})`;
        ctx.fill();
      }

      // Cursor trail particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= 0.025 / p.maxLife;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = p.life * p.life;
        const r = Math.max(0, p.size * p.life);

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        grad.addColorStop(0, `hsla(${p.hue}, 80%, 85%, ${alpha * 0.35})`);
        grad.addColorStop(1, `hsla(${p.hue}, 80%, 85%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 60%, 95%, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
