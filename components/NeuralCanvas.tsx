"use client";
import { useEffect, useRef } from "react";

interface StarNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  colorR: number;
  colorG: number;
  colorB: number;
  pulse: number;
  pulseSpeed: number;
  isBright: boolean;
}

interface NeuralPulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
}

const MAX_DIST = 160;
const PULSE_INTERVAL = 220;

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: StarNode[] = [];
    let pulses: NeuralPulse[] = [];
    let lastPulseTime = 0;
    let running = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const logicalW = () => canvas.offsetWidth;
    const logicalH = () => canvas.offsetHeight;

    // Star color variants: mostly white/cool blue, some lavender, rare gold
    const starPalettes = [
      { r: 255, g: 255, b: 255 },   // pure white
      { r: 220, g: 215, b: 245 },   // cool lavender-white
      { r: 192, g: 180, b: 224 },   // lavender
      { r: 148, g: 136, b: 196 },   // purple
      { r: 196, g: 152, b: 60  },   // gold (rare)
    ];

    const initNodes = () => {
      const w = logicalW();
      const h = logicalH();
      const density = Math.floor((w * h) / 9000);
      const count = Math.min(Math.max(density, 40), 120);

      nodes = Array.from({ length: count }, () => {
        const isBright = Math.random() < 0.12;
        const isGold   = Math.random() < 0.06;
        const palette  = isGold
          ? starPalettes[4]
          : starPalettes[Math.floor(Math.random() * 4)];

        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: isBright
            ? Math.random() * 1.8 + 1.2
            : Math.random() * 0.8 + 0.2,
          opacity: isBright
            ? Math.random() * 0.45 + 0.45
            : Math.random() * 0.35 + 0.15,
          colorR: palette.r,
          colorG: palette.g,
          colorB: palette.b,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.018 + 0.004,
          isBright,
        };
      });
    };

    const spawnPulse = () => {
      const a = Math.floor(Math.random() * nodes.length);
      let best = -1, bestDist = Infinity;
      for (let i = 0; i < nodes.length; i++) {
        if (i === a) continue;
        const d = Math.hypot(nodes[i].x - nodes[a].x, nodes[i].y - nodes[a].y);
        if (d < bestDist && d < MAX_DIST) { bestDist = d; best = i; }
      }
      if (best !== -1) {
        pulses.push({ fromIdx: a, toIdx: best, progress: 0, speed: 0.006 + Math.random() * 0.007 });
      }
    };

    const draw = (time: number) => {
      if (!running) return;
      const W = logicalW();
      const H = logicalH();

      ctx.clearRect(0, 0, W, H);

      // Subtle deep-space vignette on top
      const vignette = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.9);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(2,1,12,0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      // Update + bounce nodes
      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10) n.x = W + 10;
        if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10;
        if (n.y > H + 10) n.y = -10;
      }

      // Spawn pulses
      if (time - lastPulseTime > PULSE_INTERVAL) {
        lastPulseTime = time;
        if (Math.random() < 0.7) spawnPulse();
      }

      // Draw neural connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const t = 1 - dist / MAX_DIST;
            const alpha = t * t * 0.18; // quadratic falloff, max ~0.18
            const r = Math.round((nodes[i].colorR + nodes[j].colorR) / 2);
            const g = Math.round((nodes[i].colorG + nodes[j].colorG) / 2);
            const b = Math.round((nodes[i].colorB + nodes[j].colorB) / 2);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw + advance pulses
      pulses = pulses.filter(p => p.progress <= 1.05);
      for (const p of pulses) {
        p.progress += p.speed;
        const from = nodes[p.fromIdx];
        const to   = nodes[p.toIdx];
        const px   = from.x + (to.x - from.x) * Math.min(p.progress, 1);
        const py   = from.y + (to.y - from.y) * Math.min(p.progress, 1);
        const fade = p.progress > 0.8 ? (1 - (p.progress - 0.8) / 0.2) : 1;

        const glowR = ctx.createRadialGradient(px, py, 0, px, py, 5);
        glowR.addColorStop(0, `rgba(210, 200, 255, ${0.9 * fade})`);
        glowR.addColorStop(0.4, `rgba(192, 180, 224, ${0.4 * fade})`);
        glowR.addColorStop(1,   "rgba(192,180,224,0)");
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = glowR;
        ctx.fill();

        // bright core dot
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.95 * fade})`;
        ctx.fill();
      }

      // Draw star nodes
      for (const n of nodes) {
        const twinkle = 0.6 + 0.4 * Math.sin(n.pulse);
        const op = n.opacity * twinkle;
        const { colorR: r, colorG: g, colorB: b } = n;

        if (n.isBright) {
          // outer glow halo
          const haloRadius = n.radius * 8;
          const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, haloRadius);
          halo.addColorStop(0,   `rgba(${r},${g},${b},${op * 0.35})`);
          halo.addColorStop(0.5, `rgba(${r},${g},${b},${op * 0.08})`);
          halo.addColorStop(1,   `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, haloRadius, 0, Math.PI * 2);
          ctx.fillStyle = halo;
          ctx.fill();

          // inner glow
          const innerGlow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 3);
          innerGlow.addColorStop(0, `rgba(${r},${g},${b},${op * 0.9})`);
          innerGlow.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = innerGlow;
          ctx.fill();

          // cross diffraction spike
          ctx.strokeStyle = `rgba(${r},${g},${b},${op * 0.25})`;
          ctx.lineWidth = 0.4;
          const spike = n.radius * 6;
          ctx.beginPath(); ctx.moveTo(n.x - spike, n.y); ctx.lineTo(n.x + spike, n.y); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(n.x, n.y - spike); ctx.lineTo(n.x, n.y + spike); ctx.stroke();
        }

        // core pixel
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(op + 0.1, 1)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();

    const handleResize = () => {
      resize();
      initNodes();
    };
    window.addEventListener("resize", handleResize);
    animId = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
