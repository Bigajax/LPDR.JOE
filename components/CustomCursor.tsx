"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let animId: number;
    let isHover = false;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, mx, 0.10);
      ry = lerp(ry, my, 0.10);
      const size = isHover ? 40 : 28;
      ring.style.transform = `translate(${rx - size / 2}px, ${ry - size / 2}px)`;
      ring.style.width  = `${size}px`;
      ring.style.height = `${size}px`;
      animId = requestAnimationFrame(animate);
    };

    const onEnter = () => { isHover = true;  ring.style.opacity = "0.55"; };
    const onLeave = () => { isHover = false; ring.style.opacity = "1"; };

    const attachHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    document.addEventListener("mousemove", onMove);
    attachHover();
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 6, height: 6,
          borderRadius: "50%",
          background: "rgba(192,180,224,0.90)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
          willChange: "transform",
          boxShadow: "0 0 6px rgba(192,180,224,0.60)",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 28, height: 28,
          borderRadius: "50%",
          border: "1px solid rgba(148,136,196,0.45)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, width 0.2s ease, height 0.2s ease",
          willChange: "transform",
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
