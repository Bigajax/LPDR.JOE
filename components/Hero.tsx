"use client";
import MacbookMockup from "./MacbookMockup";
import NeuralCanvas from "./NeuralCanvas";
import CountUp from "./CountUp";


export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 88,
        paddingBottom: 72,
        paddingLeft:  "clamp(1.5rem, 5vw, 5rem)",
        paddingRight: "clamp(1.5rem, 5vw, 5rem)",
        position: "relative",
        overflow: "hidden",
        background: "#05030f",
      }}
    >
      {/* ── Neural universe canvas ── */}
      <NeuralCanvas />

      {/* ── Deep atmospheric glows ── */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(ellipse 60% 55% at 65% 48%, rgba(100,80,180,0.13) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(ellipse 35% 50% at 8% 85%, rgba(196,152,60,0.06) 0%, transparent 60%)",
      }} />
      {/* Hard vignette for depth */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1,
        background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(3,1,10,0.70) 100%)",
      }} />

      {/* ── Two-column layout ── */}
      <div
        className="hero-grid"
        style={{
          maxWidth: 1260,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "4.5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >

        {/* ════ LEFT ════ */}
        <div>

          {/* Eyebrow: badge único */}
          <div style={{ marginBottom: "1.75rem" }}>
            <span className="font-mono" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 10.5,
              letterSpacing: "0.10em",
              color: "rgba(192,180,224,0.70)",
              background: "rgba(148,136,196,0.08)",
              border: "1px solid rgba(148,136,196,0.18)",
              borderRadius: 999,
              padding: "6px 16px",
            }}>
              <span style={{ color: "rgba(196,152,60,0.80)" }}>✦</span>
              <CountUp to={2400} prefix="+" separator="." style={{ color: "rgba(210,200,255,0.95)", fontWeight: 600 }} />
              <span>pessoas</span>
              <span style={{ width: 1, height: 10, background: "rgba(148,136,196,0.30)", display: "inline-block" }} />
              <span style={{ color: "rgba(196,152,60,0.70)", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 9 }}>Método Dispenza</span>
            </span>
          </div>

          {/* ── HEADLINE ── */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2.8rem, 5.8vw, 5.1rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "#f5f0ff",
              marginBottom: "1.625rem",
            }}
          >
            7 minutos por dia
            <br />para começar a{" "}
            <span style={{
              background: "linear-gradient(120deg, #a89de0 0%, #d4caff 38%, #ffffff 52%, #d4caff 68%, #a89de0 100%)",
              backgroundSize: "220% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "hero-shine 6s linear infinite",
            }}>
              criar
            </span>
            <br />a realidade que você projeta.
          </h1>

          {/* ── SUBHEADLINE ── */}
          <p
            style={{
              fontSize: "clamp(0.9375rem, 1.35vw, 1.0625rem)",
              color: "rgba(210,205,230,0.72)",
              lineHeight: 1.82,
              maxWidth: 450,
              marginBottom: "2.25rem",
              fontFamily: "var(--font-body)",
              fontWeight: 400,
            }}
          >
            5 sessões guiadas baseadas nos estudos do Dr. Joe Dispenza
            — para alinhar sua frequência interna com a realidade
            que você quer manifestar.
          </p>

          {/* ── Benefit pills — premium style ── */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.75rem" }}>
            {[
              { label: "5 sessões guiadas",    icon: "◈" },
              { label: "7 min por dia",         icon: "◷" },
              { label: "Acesso imediato",       icon: "⟡" },
            ].map(({ label, icon }) => (
              <span
                key={label}
                className="font-mono"
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(192,180,224,0.80)",
                  background: "rgba(148,136,196,0.07)",
                  border: "1px solid rgba(148,136,196,0.22)",
                  borderRadius: 6,
                  padding: "6px 14px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "var(--lavender)", opacity: 0.85 }}>{icon}</span>
                {label}
              </span>
            ))}
          </div>

          {/* ── PRIMARY CTA ── */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }} className="cta-group">
            <a
              href="/app/guest"
              className="hero-cta"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "1.125rem 2.875rem",
                borderRadius: 8,
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "1.0rem",
                letterSpacing: "0.03em",
                color: "#ffffff",
                background: "linear-gradient(135deg, #7c6fc0 0%, #9488C4 50%, #b0a6d8 100%)",
                border: "1px solid rgba(255,255,255,0.14)",
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
                boxShadow: "0 0 0 1px rgba(148,136,196,0.30), 0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50)",
              }}
            >
              <span style={{ position: "relative", zIndex: 1 }}>Começar agora — é grátis</span>
              {/* Shine overlay */}
              <span className="cta-shine" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
                backgroundSize: "200% 100%",
                backgroundPosition: "200% 0",
              }} />
            </a>

            <p className="font-mono" style={{
              fontSize: "0.6875rem",
              color: "rgba(192,180,224,0.38)",
              letterSpacing: "0.12em",
            }}>
              Sem cartão · Sem cadastro · Acesso vitalício
            </p>
          </div>

          {/* ── Trust line ── */}
          <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 1, background: "rgba(148,136,196,0.28)" }} />
            <p className="font-mono" style={{
              fontSize: "0.6563rem",
              color: "rgba(192,180,224,0.32)",
              letterSpacing: "0.10em",
            }}>
              Baseado em "Como se Tornar Sobrenatural" — Dr. Joe Dispenza
            </p>
          </div>
        </div>

        {/* ════ RIGHT — Mockup ════ */}
        <div
          className="hero-visual"
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Orbital ring */}
          <div style={{
            position: "absolute",
            width: "clamp(280px, 38vw, 500px)",
            height: "clamp(280px, 38vw, 500px)",
            borderRadius: "50%",
            border: "1px solid rgba(148,136,196,0.08)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            animation: "spin-slow 40s linear infinite",
            pointerEvents: "none",
          }}>
            {/* Orbital dot */}
            <div style={{
              position: "absolute", top: 0, left: "50%",
              transform: "translate(-50%,-50%)",
              width: 5, height: 5, borderRadius: "50%",
              background: "rgba(192,180,224,0.50)",
              boxShadow: "0 0 8px rgba(192,180,224,0.60)",
            }} />
          </div>
          <div style={{
            position: "absolute",
            width: "clamp(200px, 28vw, 380px)",
            height: "clamp(200px, 28vw, 380px)",
            borderRadius: "50%",
            border: "1px solid rgba(196,152,60,0.06)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            animation: "spin-slow 28s linear infinite reverse",
            pointerEvents: "none",
          }}>
            {/* Orbital dot gold */}
            <div style={{
              position: "absolute", bottom: 0, left: "50%",
              transform: "translate(-50%,50%)",
              width: 4, height: 4, borderRadius: "50%",
              background: "rgba(196,152,60,0.65)",
              boxShadow: "0 0 8px rgba(196,152,60,0.50)",
            }} />
          </div>

          {/* Central glow behind mockup */}
          <div style={{
            position: "absolute",
            width: "clamp(240px, 32vw, 420px)",
            height: "clamp(240px, 32vw, 420px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(120,100,200,0.18) 0%, rgba(100,80,180,0.08) 45%, transparent 70%)",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            pointerEvents: "none",
            filter: "blur(2px)",
          }} />

          {/* Mockup */}
          <div className="float-slow" style={{ position: "relative", zIndex: 2, width: "100%" }}>
            <MacbookMockup />
          </div>

          {/* ── Floating testimonial card ── */}
          <div
            className="testimonial-card"
            style={{
              position: "absolute",
              bottom: "5%",
              left: "-8%",
              background: "rgba(8,5,20,0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(148,136,196,0.22)",
              borderRadius: 12,
              padding: "1rem 1.25rem",
              width: 210,
              boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(148,136,196,0.08)",
              zIndex: 3,
            }}
          >
            <div style={{ display: "flex", gap: 2.5, marginBottom: 8 }}>
              {[1,2,3,4,5].map((i) => (
                <span key={i} style={{ color: "#C4983C", fontSize: 11 }}>★</span>
              ))}
            </div>
            <p className="font-display" style={{
              fontSize: 12, color: "rgba(235,229,218,0.90)",
              lineHeight: 1.6, fontStyle: "italic",
            }}>
              "Na terceira sessão já sentia que estava criando outra versão de mim."
            </p>
            <p className="font-mono" style={{
              fontSize: 9.5, color: "rgba(192,180,224,0.40)",
              marginTop: 8, letterSpacing: "0.06em",
            }}>
              — Ana M., 34 anos
            </p>
          </div>

          {/* ── Floating stat card ── */}
          <div
            className="stat-card"
            style={{
              position: "absolute",
              top: "4%",
              right: "-5%",
              background: "rgba(8,5,20,0.88)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(196,152,60,0.20)",
              borderRadius: 12,
              padding: "0.9rem 1.125rem",
              zIndex: 3,
              textAlign: "center",
              boxShadow: "0 12px 40px rgba(0,0,0,0.50), 0 0 0 1px rgba(196,152,60,0.06)",
            }}
          >
            <CountUp to={91} suffix="%" duration={1600} className="font-display gold-text" style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1, display: "block" }} />
            <p className="font-mono" style={{
              fontSize: 9, color: "rgba(192,180,224,0.45)",
              letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 5,
            }}>
              percebem mudanças<br />concretas na 1ª semana
            </p>
          </div>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        zIndex: 2,
      }}>
        <span className="font-mono" style={{ fontSize: 8.5, color: "rgba(148,136,196,0.30)", letterSpacing: "0.24em", textTransform: "uppercase" }}>
          scroll
        </span>
        <div style={{ width: 1, height: 30, background: "linear-gradient(180deg, rgba(148,136,196,0.35), transparent)" }} />
      </div>

      <style>{`
        @keyframes hero-shine {
          0%   { background-position: 220% center; }
          100% { background-position: -220% center; }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        .hero-cta:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 0 1px rgba(148,136,196,0.40),
                      0 12px 40px rgba(100,80,180,0.55),
                      0 2px 8px rgba(0,0,0,0.50) !important;
        }
        .hero-cta:hover .cta-shine {
          animation: cta-shine-sweep 0.55s ease forwards;
        }
        .hero-cta:active { transform: translateY(0) !important; }
        @keyframes cta-shine-sweep {
          from { background-position: 200% 0; }
          to   { background-position: -50% 0; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-grid h1 { font-size: clamp(2.4rem,8vw,3.5rem) !important; }
          .cta-group { align-items: center !important; }
          .hero-visual { min-height: 320px; }
          .testimonial-card { left: 50% !important; transform: translateX(-50%); bottom: -20px !important; }
          .stat-card { display: none !important; }
        }
      `}</style>
    </section>
  );
}
