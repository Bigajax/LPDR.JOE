"use client";
import MacbookMockup from "./MacbookMockup";
import CheckoutButton from "./CheckoutButton";
import dynamic from "next/dynamic";

const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false, loading: () => null });

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-root"
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
      <NeuralCanvas />

      {/* Atmospheric glows */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(ellipse 60% 55% at 65% 48%, rgba(100,80,180,0.13) 0%, transparent 70%)" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(ellipse 35% 50% at 8% 85%, rgba(196,152,60,0.06) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(3,1,10,0.70) 100%)" }} />

      {/* Two-column layout */}
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
        {/* LEFT */}
        <div className="hero-copy">

          {/* Eyebrow badge */}
          <div className="hero-eyebrow" style={{ marginBottom: "1.75rem" }}>
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
              <span style={{ color: "#C4983C", fontSize: 10 }}>★★★★★</span>
              <span style={{ color: "rgba(210,200,255,0.95)", fontWeight: 600 }}>4.9/5</span>
              <span style={{ width: 1, height: 10, background: "rgba(148,136,196,0.30)", display: "inline-block" }} />
              <span style={{ color: "rgba(196,152,60,0.70)", letterSpacing: "0.16em", textTransform: "uppercase", fontSize: 9 }}>Método Dispenza</span>
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "#f5f0ff",
              maxWidth: 700,
              marginBottom: 24,
            }}
          >
            Você sente que está preso
            <br />nos mesmos padrões…{" "}
            <span style={{
              background: "linear-gradient(120deg, #a89de0 0%, #d4caff 38%, #ffffff 52%, #d4caff 68%, #a89de0 100%)",
              backgroundSize: "220% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "hero-shine 6s linear infinite",
            }}>
              mesmo tentando mudar?
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p style={{
            fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
            color: "rgba(210,205,230,0.90)",
            lineHeight: 1.72,
            maxWidth: 450,
            marginBottom: "0.75rem",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}>
            Sua mente até quer avançar. Mas algo dentro de você te puxa de volta para o mesmo lugar.
          </p>

          <p style={{
            fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
            color: "rgba(192,180,224,0.75)",
            lineHeight: 1.65,
            maxWidth: 420,
            marginBottom: "1.75rem",
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}>
            Existe um motivo para isso — e você pode reprogramar esse padrão.
          </p>

          {/* PRIMARY CTA */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }} className="cta-group">
            <CheckoutButton
              label="Começar o protocolo agora"
              subLabel="Sem cadastro · Começa em menos de 3 minutos"
              className="hero-cta"
              style={{ fontSize: "1.0rem", padding: "1.125rem 2.875rem" }}
            />
          </div>

          {/* Benefit pills */}
          <div className="hero-pills" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem", marginBottom: "2.75rem" }}>
            {[
              { label: "5 sessões guiadas", icon: "◈" },
              { label: "7 min por dia",      icon: "◷" },
              { label: "Acesso imediato",    icon: "⟡" },
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

          {/* Trust line */}
          <div style={{ marginTop: "2.5rem", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 28, height: 1, background: "rgba(148,136,196,0.28)" }} />
            <p className="font-mono" style={{
              fontSize: "0.6563rem",
              color: "rgba(192,180,224,0.62)",
              letterSpacing: "0.10em",
            }}>
              Baseado na metodologia do Dr. Joe Dispenza, usada por mais de 2.400 pessoas para mudar emoções, hábitos e resultados.
            </p>
          </div>
        </div>

        {/* RIGHT: Mockup */}
        <div
          className="hero-visual"
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          {/* Orbital rings */}
          <div className="hero-orbit hero-orbit-1" style={{
            position: "absolute",
            width: "clamp(280px, 38vw, 500px)", height: "clamp(280px, 38vw, 500px)",
            borderRadius: "50%", border: "1px solid rgba(148,136,196,0.08)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            animation: "spin-slow 40s linear infinite", pointerEvents: "none",
          }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%,-50%)", width: 5, height: 5, borderRadius: "50%", background: "rgba(192,180,224,0.50)", boxShadow: "0 0 8px rgba(192,180,224,0.60)" }} />
          </div>
          <div className="hero-orbit hero-orbit-2" style={{
            position: "absolute",
            width: "clamp(200px, 28vw, 380px)", height: "clamp(200px, 28vw, 380px)",
            borderRadius: "50%", border: "1px solid rgba(196,152,60,0.06)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            animation: "spin-slow 28s linear infinite reverse", pointerEvents: "none",
          }}>
            <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translate(-50%,50%)", width: 4, height: 4, borderRadius: "50%", background: "rgba(196,152,60,0.65)", boxShadow: "0 0 8px rgba(196,152,60,0.50)" }} />
          </div>

          <div className="hero-glow" style={{
            position: "absolute",
            width: "clamp(240px, 32vw, 420px)", height: "clamp(240px, 32vw, 420px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(120,100,200,0.18) 0%, rgba(100,80,180,0.08) 45%, transparent 70%)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            pointerEvents: "none", filter: "blur(2px)",
          }} />

          <div className="float-slow hero-mockup" style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: 860, margin: "0 auto" }}>
            <MacbookMockup />
          </div>

          {/* Floating testimonial card */}
          <div className="testimonial-card" style={{
            position: "absolute", bottom: "5%", left: "-8%",
            background: "rgba(8,5,20,0.88)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(148,136,196,0.22)", borderRadius: 12,
            padding: "1rem 1.25rem", width: 210,
            boxShadow: "0 16px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(148,136,196,0.08)", zIndex: 3,
          }}>
            <div style={{ display: "flex", gap: 2.5, marginBottom: 8 }}>
              {[1,2,3,4,5].map((i) => <span key={i} style={{ color: "#C4983C", fontSize: 11 }}>★</span>)}
            </div>
            <p className="font-display" style={{ fontSize: 14, color: "rgba(235,229,218,0.90)", lineHeight: 1.65, fontStyle: "italic" }}>
              "Na terceira sessão já sentia que estava criando outra versão de mim, e as situações começaram a mudar do lado de fora."
            </p>
            <p className="font-mono" style={{ fontSize: 9.5, color: "rgba(192,180,224,0.72)", marginTop: 8, letterSpacing: "0.06em" }}>
              Ana M., 34 anos
            </p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 2 }}>
        <span className="font-mono" style={{ fontSize: 8.5, color: "rgba(148,136,196,0.30)", letterSpacing: "0.24em", textTransform: "uppercase" }}>scroll</span>
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
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-grid h1 { font-size: clamp(34px, 7.5vw, 52px) !important; line-height: 1.12 !important; }
          .cta-group { align-items: center !important; }
          .hero-visual { min-height: 320px; }
          .testimonial-card { left: 50% !important; transform: translateX(-50%); bottom: -20px !important; }
        }
        @media (max-width: 600px) {
          .hero-root { min-height: 100svh !important; padding-top: calc(76px + env(safe-area-inset-top)) !important; padding-bottom: 56px !important; }
          .hero-copy { text-align: center; }
          .hero-eyebrow { display: flex; justify-content: center; }
          .hero-copy p { margin-left: auto !important; margin-right: auto !important; }
          .hero-grid h1 { font-size: clamp(32px, 9vw, 44px) !important; line-height: 1.12 !important; margin-bottom: 20px !important; }
          .cta-group { gap: 0.75rem !important; }
          .hero-pills { justify-content: center; }
          .hero-cta { width: min(520px, 100%) !important; justify-content: center; padding: 1.05rem 2.25rem !important; }
          .hero-scroll-hint { display: none !important; }
          .hero-visual { flex-direction: column !important; }
          .hero-orbit, .hero-glow { display: none !important; }
          .hero-mockup { max-width: min(520px, 100%) !important; }
          .testimonial-card {
            position: relative !important; left: auto !important; bottom: auto !important;
            transform: none !important; width: min(360px, 92vw) !important; margin: 14px auto 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
