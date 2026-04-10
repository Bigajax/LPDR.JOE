"use client";
import { useEffect, useRef } from "react";

interface Cloud {
  x: number;
  y: number;
  speed: number;
  scale: number;
  opacity: number;
  puffs: { dx: number; dy: number; r: number }[];
}

function buildPuffs(count: number) {
  const puffs = [];
  for (let i = 0; i < count; i++) {
    puffs.push({
      dx: (Math.random() - 0.3) * 80,
      dy: (Math.random() - 0.5) * 28,
      r:  Math.random() * 38 + 22,
    });
  }
  return puffs;
}

function initClouds(W: number, H: number): Cloud[] {
  const count = Math.min(Math.max(Math.floor(W / 220), 4), 10);
  return Array.from({ length: count }, (_, i) => ({
    x:       (i / count) * W + Math.random() * (W / count),
    y:       Math.random() * H * 0.75,
    speed:   0.12 + Math.random() * 0.18,
    scale:   0.55 + Math.random() * 0.85,
    opacity: 0.25 + Math.random() * 0.30,
    puffs:   buildPuffs(Math.floor(Math.random() * 4) + 4),
  }));
}

function drawCloud(
  ctx: CanvasRenderingContext2D,
  cloud: Cloud,
) {
  ctx.save();
  ctx.globalAlpha = cloud.opacity;
  ctx.translate(cloud.x, cloud.y);
  ctx.scale(cloud.scale, cloud.scale);

  for (const p of cloud.puffs) {
    const grad = ctx.createRadialGradient(p.dx, p.dy, 0, p.dx, p.dy, p.r);
    grad.addColorStop(0,   "rgba(255,255,255,0.90)");
    grad.addColorStop(0.5, "rgba(248,245,255,0.55)");
    grad.addColorStop(1,   "rgba(240,236,252,0)");
    ctx.beginPath();
    ctx.arc(p.dx, p.dy, p.r, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }

  ctx.restore();
}

export default function CloudCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let clouds: Cloud[] = [];
    let running = true;

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      clouds = initClouds(canvas.offsetWidth, canvas.offsetHeight);
    };

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, W(), H());

      for (const cloud of clouds) {
        cloud.x += cloud.speed;
        if (cloud.x - cloud.scale * 160 > W()) {
          cloud.x = -cloud.scale * 160;
          cloud.y = Math.random() * H() * 0.75;
        }
        drawCloud(ctx, cloud);
      }

      animId = requestAnimationFrame(draw);
    };

    const onResize = () => { resize(); };
    resize();
    window.addEventListener("resize", onResize);
    animId = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
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
        zIndex: 1,
      }}
    />
  );
}
