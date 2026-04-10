"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        background: scrolled ? "rgba(242,235,224,0.96)" : "rgba(242,235,224,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(28,20,40,0.10)",
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
          <Image
            src="/images/logo-ecotopia.webp"
            alt="Ecotopia"
            width={46}
            height={46}
            sizes="46px"
            preload
            style={{ objectFit: "contain", display: "block", cursor: "pointer" }}
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
                  color: isActive ? "rgba(28,20,40,0.88)" : "rgba(28,20,40,0.55)",
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
                  background: "linear-gradient(90deg, transparent, rgba(124,111,192,0.75), transparent)",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                  transformOrigin: "center",
                }} />
              </a>
            );
          })}
        </div>

        <a
          href="/app/guest"
          className="btn-cta"
          style={{ padding: "0.55rem 1.2rem", fontSize: "0.8125rem", minHeight: 38, width: "auto", whiteSpace: "nowrap" }}
        >
          Começar
        </a>
      </div>

      <style>{`
        @media (min-width: 768px) { .nav-links { display: flex !important; } }
        .nav-link:hover { color: rgba(28,20,40,0.88) !important; }
      `}</style>
    </nav>
  );
}
