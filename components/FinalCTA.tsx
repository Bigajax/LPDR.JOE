"use client";
import CheckoutButton from "./CheckoutButton";

const BG = "#05030f";

export default function FinalCTA() {
  return (
    <section
      className="finalcta-section"
      style={{
        padding: "clamp(5.5rem, 9vw, 8rem) clamp(1.25rem, 4vw, 2rem) clamp(5rem, 8vw, 7rem)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: BG,
      }}
    >
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.12), transparent)" }} />

      {/* Orbs */}
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,80,180,0.09) 0%, transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(148,136,196,0.06) 0%, transparent 70%)", top: "15%", right: "5%", pointerEvents: "none" }} />
      {[420, 270].map((size) => (
        <div key={size} style={{ position: "absolute", width: size, height: size, borderRadius: "50%", border: "1px solid rgba(148,136,196,0.06)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />
      ))}

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Emotional pivot card */}
        <div className="card-night reveal finalcta-card" style={{ marginBottom: "5rem", textAlign: "left" }}>
          <span className="section-label" style={{ marginBottom: "1.75rem" }}>Virada Emocional</span>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.625rem, 4vw, 2.375rem)",
              fontWeight: 700,
              color: "rgba(235,229,218,0.92)",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            Você já está criando sua realidade todos os dias.
          </h2>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, marginBottom: "1rem", fontFamily: "var(--font-body)", fontWeight: 500 }}>
            A diferença é se isso acontece no automático…
          </p>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, marginBottom: "2.5rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>
            ou com intenção.
          </p>

          <div className="quote-night" style={{ margin: "0 0 2.5rem" }}>
            <blockquote className="font-display">
              "Você não é prisioneiro de seus genes. A expressão genética é mutável quando você pensa, age e se comporta diferente."
            </blockquote>
            <p className="font-mono" style={{ fontSize: 11, color: "rgba(148,136,196,0.55)", letterSpacing: "0.12em", marginTop: "1.25rem" }}>
              Dr. Joe Dispenza
            </p>
          </div>

          {/* FAQ mini-block */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0.625rem", marginBottom: "2rem" }}>
            {[
              { q: "Quanto tempo leva?", a: "Menos de 3 minutos para começar" },
              { q: "Preciso criar conta?", a: "Não, o acesso é imediato após a compra" },
              { q: "Funciona para mim?", a: "Se você quer mudar algo na sua vida, sim" },
            ].map(({ q, a }) => (
              <div key={q} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 1rem", background: "rgba(148,136,196,0.04)", border: "1px solid rgba(148,136,196,0.09)", borderRadius: 10 }}>
                <span style={{ fontSize: "0.75rem", color: "rgba(196,152,60,0.70)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em", flexShrink: 0, marginTop: 2 }}>→</span>
                <p style={{ fontSize: "0.875rem", color: "rgba(210,205,230,0.60)", fontFamily: "var(--font-body)", lineHeight: 1.55 }}>
                  <strong style={{ color: "rgba(235,229,218,0.80)", fontWeight: 600 }}>{q}</strong>{" "}
                  <span style={{ color: "rgba(192,180,224,0.50)" }}>·</span>{" "}
                  {a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <CheckoutButton
              label="Começar agora"
              subLabel="Leva menos de 3 minutos para iniciar"
            />
          </div>
        </div>

        {/* Final headline */}
        <div className="reveal">
          <span className="section-label" style={{ marginBottom: "1.75rem", display: "flex", justifyContent: "center", color: "rgba(148,136,196,0.45)" }}>
            Não no automático. Com intenção.
          </span>

          <div style={{ width: 36, height: 1, margin: "1.75rem auto", background: "linear-gradient(90deg, transparent, rgba(148,136,196,0.40), transparent)" }} />

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
              fontWeight: 700,
              color: "rgba(235,229,218,0.92)",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
              marginTop: "1.5rem",
            }}
          >
            Você já está criando sua realidade.
            <br />
            <span className="shimmer-text">A diferença é se faz isso no automático ou com intenção.</span>
          </h2>

          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "rgba(192,180,224,0.62)", lineHeight: 1.65, marginBottom: "3rem", letterSpacing: "0.16em" }}>
            Sem cadastro · Acesso imediato · Menos de 3 minutos para iniciar
          </p>

          <CheckoutButton
            label="Começar agora"
            subLabel="Leva menos de 3 minutos para iniciar"
            style={{ fontSize: "1rem", padding: "1.1rem 3rem" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .finalcta-section { padding: 6.25rem 1.25rem 5.25rem !important; }
          .finalcta-card { margin-bottom: 3.25rem !important; }
          .finalcta-card .section-label { margin-bottom: 1.25rem !important; text-align: center; }
          .finalcta-card .quote-night { margin: 0 0 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}
