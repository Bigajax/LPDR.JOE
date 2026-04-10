"use client";

const features = [
  "5 meditações guiadas",
  "Sessões curtas (5 a 7 min)",
  "Acesso imediato",
  "Acesso vitalício",
  "Aplicável no dia a dia",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{ padding: "100px 24px", position: "relative", overflow: "hidden" }}
    >
      <div
        className="orb"
        style={{
          width: 760,
          height: 760,
          background: "rgba(41,182,232,0.10)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Transition block */}
        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: 56,
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(22px, 3.5vw, 34px)",
              fontWeight: 600,
              color: "#F5F7FA",
              lineHeight: 1.35,
              marginBottom: 12,
            }}
          >
            Você já começou a sair do padrão.
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#A8B4C0",
              lineHeight: 1.6,
            }}
          >
            Agora precisa repetir isso
            <br />
            até virar o seu novo estado.
          </p>
        </div>

        {/* Pricing card */}
        <div
          className="reveal"
          style={{
            background: "var(--card)",
            border: "1px solid var(--card-border)",
            borderRadius: 24,
            padding: "44px 40px",
            boxShadow: "0 0 70px rgba(0,0,0,0.45)",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(41,182,232,0.07)",
              border: "1px solid rgba(41,182,232,0.18)",
              borderRadius: 999,
              padding: "6px 14px",
              marginBottom: 22,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--gold)" }} />
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "var(--blue)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Oferta
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(24px, 4vw, 34px)",
              fontWeight: 600,
              color: "#F5F7FA",
              marginBottom: 22,
              lineHeight: 1.2,
            }}
          >
            Você já sabe o suficiente.
            <br />
            Agora precisa parar de repetir.
          </h2>

          <div style={{ marginBottom: 10 }}>
            <span
              style={{
                fontSize: 16,
                color: "var(--text-muted)",
                textDecoration: "line-through",
                marginRight: 12,
              }}
            >
              De R$ 97
            </span>
            <div style={{ marginTop: 6 }}>
              <span
                style={{
                  fontSize: "clamp(52px, 10vw, 72px)",
                  fontWeight: 700,
                  color: "var(--blue)",
                  lineHeight: 1,
                  fontFamily: "var(--font-display)",
                  textShadow: "0 0 22px rgba(41,182,232,0.16)",
                }}
              >
                R$ 47
              </span>
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 28 }}>
            Pagamento único, sem cobrança recorrente
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              marginBottom: 30,
            }}
          >
            {features.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgba(41,182,232,0.10)",
                    border: "1px solid rgba(41,182,232,0.22)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: 1,
                    color: "var(--gold)",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <span style={{ fontSize: 15, color: "#C8D0DC", lineHeight: 1.55 }}>
                  {f}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/app/guest/entrada"
            className="btn-cta"
            style={{
              width: "100%",
              justifyContent: "center",
              fontSize: 17,
              padding: "18px 24px",
            }}
          >
            Liberar minha jornada
          </a>

          <p
            style={{
              fontSize: 13,
              color: "rgba(245,247,250,0.40)",
              marginTop: 16,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            Acesso imediato após o pagamento
          </p>
        </div>
      </div>
    </section>
  );
}
