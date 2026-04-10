"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Protocolo", href: "#meditations", id: "meditations" },
  { label: "Ciência",   href: "#ciencia",     id: "ciencia"     },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [activeId,  setActiveId]  = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(5,3,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(148,136,196,0.10)" : "1px solid transparent",
        transition: "background 0.45s ease, border-color 0.45s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          aria-label="Voltar para o início"
          style={{ display: "block", lineHeight: 0 }}
        >
          <img
            src="/images/logo-ecotopia.webp"
            alt="Ecotopia"
            style={{ width: 46, height: 46, objectFit: "contain", display: "block", filter: "brightness(0) invert(1)", cursor: "pointer" }}
          />
        </a>

        <div className="nav-links" style={{ gap: 36, display: "none", alignItems: "center" }}>
          {links.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="font-mono nav-link"
                style={{
                  fontSize: 11.5,
                  color: isActive ? "rgba(192,180,224,0.90)" : "rgba(235,229,218,0.40)",
                  textDecoration: "none",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  transition: "color 0.25s",
                  position: "relative",
                  paddingBottom: 4,
                }}
              >
                {link.label}
                {/* Active underline */}
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.70), transparent)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                  transformOrigin: "center",
                }} />
              </a>
            );
          })}
        </div>

        <a href="/app/guest" className="btn-cta" style={{ padding: "0.55rem 1.4rem", fontSize: "0.8125rem", minHeight: 38 }}>
          Começar
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-links { display: flex !important; } }
        .nav-link:hover { color: rgba(192,180,224,0.80) !important; }
      `}</style>
    </nav>
  );
}
