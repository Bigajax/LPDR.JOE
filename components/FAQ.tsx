"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Preciso saber meditar?",
    a: "Não. É guiado, simples e progressivo.",
  },
  {
    q: "Funciona mesmo sem experiência?",
    a: "Sim. Foi feito exatamente pra isso.",
  },
  {
    q: "Quanto tempo por dia?",
    a: "5 a 7 minutos.",
  },
  {
    q: "É só ouvir?",
    a: "Não. É prática guiada para mudar estado.",
  },
  {
    q: "Vou sentir diferença quando?",
    a: "Algumas pessoas já percebem nos primeiros dias — outras ao longo da repetição.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "100px 24px", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h2
          className="font-display reveal"
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: 1.2,
          }}
        >
          FAQ
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map((faq, i) => (
          <div
            key={faq.q}
            className="reveal card"
            style={{
              padding: 0,
              overflow: "hidden",
              cursor: "pointer",
              transition: "border-color 0.2s",
              borderColor:
                open === i ? "rgba(41,182,232,0.28)" : "var(--card-border)",
            }}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px 24px",
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  lineHeight: 1.4,
                }}
              >
                {faq.q}
              </span>
              <div
                className="faq-arrow"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(41,182,232,0.08)",
                  border: "1px solid rgba(41,182,232,0.16)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  color: "var(--blue)",
                  fontSize: 12,
                }}
              >
                ▼
              </div>
            </div>

            <div
              style={{
                maxHeight: open === i ? 220 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s ease",
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  padding: "0 24px 20px",
                  borderTop: "1px solid rgba(245,245,245,0.08)",
                  paddingTop: 16,
                }}
              >
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
