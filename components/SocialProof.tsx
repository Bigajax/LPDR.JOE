"use client";

const badges = [
  { display: "5",   label: "Sessões",   sub: "guiadas"    },
  { display: "5–7", label: "Minutos",   sub: "por dia"    },
  { display: "✦",   label: "Protocolo", sub: "testado"    },
  { display: "∞",   label: "Acesso",    sub: "vitalício"  },
];

export default function SocialProof() {
  return (
    <section
      style={{
        padding: "clamp(4.75rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(4rem, 7vw, 6rem)",
        position: "relative",
        overflow: "hidden",
        background: "#F2EBE0",
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 15% 20%, rgba(196,152,60,0.05) 0%, transparent 60%),
          radial-gradient(ellipse 60% 70% at 85% 80%, rgba(196,152,60,0.06) 0%, transparent 55%)
        `,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
        <span className="section-label-ink reveal" style={{ marginBottom: "1.25rem" }}>Resultados</span>

        <h2
          className="font-display reveal"
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.6rem)",
            fontWeight: 700,
            color: "var(--ink)",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
          }}
        >
          Pessoas começam a perceber mudanças{" "}
          <span style={{ color: "var(--gold)" }}>já na primeira semana</span>
        </h2>

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1.5rem, 4vw, 3.5rem)",
            flexWrap: "wrap",
            margin: "0 auto 2.5rem",
            maxWidth: 560,
          }}
        >
          {[
            "mais clareza mental",
            "menos repetição de padrões",
            "mais controle emocional",
          ].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--gold)", fontSize: 12 }}>→</span>
              <p style={{ fontSize: "0.9375rem", color: "var(--ink-dim)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{item}</p>
            </div>
          ))}
        </div>

        {/* Testimonial card */}
        <div className="reveal" style={{
          background: "rgba(255,252,248,0.80)",
          border: "1px solid rgba(28,20,40,0.09)",
          borderRadius: 16,
          padding: "1.5rem 2rem",
          maxWidth: 480,
          margin: "0 auto clamp(2.5rem, 6vw, 4rem)",
          textAlign: "left",
          boxShadow: "0 2px 16px rgba(28,20,40,0.06)",
        }}>
          <div style={{ display: "flex", gap: 2, marginBottom: "0.75rem" }}>
            {[1,2,3,4,5].map((i) => <span key={i} style={{ color: "var(--gold)", fontSize: 13 }}>★</span>)}
          </div>
          <p className="font-display" style={{ fontSize: "clamp(1.0625rem, 2vw, 1.1875rem)", color: "var(--ink)", lineHeight: 1.65, fontStyle: "italic", marginBottom: "0.75rem" }}>
            "Na terceira sessão já sentia que estava criando outra versão de mim, e as situações começaram a mudar do lado de fora."
          </p>
          <p className="font-mono" style={{ fontSize: "0.6875rem", color: "var(--ink-dim)", letterSpacing: "0.10em" }}>
            Ana M., 34 anos
          </p>
        </div>

        {/* Feature badges */}
        <div className="badge-grid reveal" data-stagger>
          {badges.map((b) => (
            <div
              key={b.label}
              className="reveal"
              style={{
                background: "rgba(255,252,248,0.80)",
                border: "1px solid rgba(28,20,40,0.09)",
                borderRadius: 16,
                padding: "2rem 1.25rem",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                boxShadow: "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(28,20,40,0.10), inset 0 1px 0 rgba(255,255,255,0.80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(28,20,40,0.06), inset 0 1px 0 rgba(255,255,255,0.80)";
              }}
            >
              <div className="font-display gold-text" style={{ fontSize: "2.25rem", fontWeight: 700, lineHeight: 1, marginBottom: "0.625rem" }}>
                {b.display}
              </div>
              <span className="font-mono" style={{ fontSize: "0.6875rem", color: "var(--ink-dim)", letterSpacing: "0.14em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>
                {b.label}
              </span>
              <span className="font-mono" style={{ fontSize: "0.625rem", color: "rgba(196,152,60,0.55)", letterSpacing: "0.10em", textTransform: "uppercase" }}>
                {b.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
