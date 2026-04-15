"use client";
import { useState, useEffect, useCallback } from "react";
import { createPreference, openCheckoutPopup } from "@/lib/checkout";

interface CheckoutButtonProps {
  label?: string;
  subLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CheckoutButton({
  label = "Criar minha nova realidade — R$ 37",
  subLabel,
  className,
  style,
}: CheckoutButtonProps) {
  const [state, setState] = useState<"idle" | "loading" | "open" | "success" | "error">("idle");

  /* Escuta postMessage do popup /dr-joe/obrigado */
  const handleMessage = useCallback((e: MessageEvent) => {
    if (e.data?.type === "MP_PAYMENT_SUCCESS") {
      setState("success");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [handleMessage]);

  async function handleClick() {
    if (state === "loading" || state === "open") return;
    setState("loading");

    try {
      const { init_point } = await createPreference();
      const popup = openCheckoutPopup(init_point);

      if (!popup) {
        /* Popup bloqueado pelo browser — fallback para redirect */
        window.location.href = init_point;
        return;
      }

      setState("open");

      /* Monitora fechamento manual do popup */
      const timer = setInterval(() => {
        if (popup.closed) {
          clearInterval(timer);
          /* Se voltou ao idle sem success, é porque fechou sem pagar */
          setState((prev) => (prev === "open" ? "idle" : prev));
        }
      }, 600);
    } catch {
      setState("error");
    }
  }

  /* ── Labels por estado ── */
  const labelMap: Record<typeof state, string> = {
    idle:    label,
    loading: "Aguarde…",
    open:    "Checkout aberto — conclua o pagamento",
    success: "Pagamento confirmado!",
    error:   "Erro — tente novamente",
  };

  const isDisabled = state === "loading" || state === "open" || state === "success";

  const bg =
    state === "success" ? "linear-gradient(135deg, #4a9c6e, #5cb87d)" :
    state === "error"   ? "linear-gradient(135deg, #9c4a4a, #b85c5c)" :
    isDisabled          ? "rgba(148,136,196,0.45)" :
    "linear-gradient(135deg, #7c6fc0 0%, #9488C4 50%, #b0a6d8 100%)";

  return (
    <>
      {/* Sucesso inline */}
      {state === "success" && (
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem",
          padding: "1.5rem 2rem",
          background: "rgba(74,156,110,0.08)", border: "1px solid rgba(74,156,110,0.30)",
          borderRadius: 12, textAlign: "center",
          animation: "fade-in 0.4s ease",
        }}>
          <span style={{ fontSize: 28 }}>✓</span>
          <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "1rem", color: "rgba(235,229,218,0.92)", lineHeight: 1.4 }}>
            Pagamento confirmado!<br />
            <span style={{ fontWeight: 400, fontSize: "0.9375rem", color: "rgba(192,180,224,0.72)" }}>
              Acesse o app para iniciar o protocolo.
            </span>
          </p>
          <a
            href="https://ecofrontend888.vercel.app/app"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "0.875rem 2rem", borderRadius: 8,
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9375rem",
              color: "#fff", textDecoration: "none",
              background: "linear-gradient(135deg, #7c6fc0, #9488C4)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            Acessar o protocolo →
          </a>
        </div>
      )}

      {state !== "success" && (
        <button
          onClick={handleClick}
          disabled={isDisabled}
          className={`checkout-btn${className ? ` ${className}` : ""}`}
          style={{
            display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6,
            padding: "1.125rem 2.875rem", borderRadius: 8,
            fontFamily: "var(--font-body)", fontWeight: 600,
            fontSize: "1.0rem", letterSpacing: "0.03em",
            color: "#ffffff", background: bg,
            border: "1px solid rgba(255,255,255,0.14)",
            cursor: isDisabled ? "not-allowed" : "pointer",
            position: "relative", overflow: "hidden",
            transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
            boxShadow: isDisabled
              ? "none"
              : "0 0 0 1px rgba(148,136,196,0.30), 0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50)",
            animation: (state === "idle") ? "checkout-pulse 2.6s ease-out infinite" : "none",
            ...style,
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>{labelMap[state]}</span>
          {subLabel && state === "idle" && (
            <span className="font-mono" style={{ fontSize: "0.6rem", color: "rgba(210,200,255,0.55)", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              {subLabel}
            </span>
          )}
          {state === "open" && (
            <span className="font-mono" style={{ fontSize: "0.6rem", color: "rgba(210,200,255,0.65)", letterSpacing: "0.12em" }}>
              Não viu o popup? Verifique popups bloqueados no navegador.
            </span>
          )}
        </button>
      )}

      <style>{`
        @keyframes checkout-pulse {
          0%   { box-shadow: 0 0 0 0    rgba(148,136,196,0.65), 0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
          65%  { box-shadow: 0 0 0 12px rgba(148,136,196,0),    0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
          100% { box-shadow: 0 0 0 0    rgba(148,136,196,0),    0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
        }
        @keyframes fade-in { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .checkout-btn:hover:not(:disabled) {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 0 1px rgba(148,136,196,0.40), 0 12px 40px rgba(100,80,180,0.55), 0 2px 8px rgba(0,0,0,0.50) !important;
          animation-play-state: paused !important;
        }
        .checkout-btn:active:not(:disabled) { transform: translateY(0) scale(0.97) !important; }
      `}</style>
    </>
  );
}
