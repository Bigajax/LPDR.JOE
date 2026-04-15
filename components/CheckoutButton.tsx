"use client";
import { useState } from "react";
import { startCheckout } from "@/lib/checkout";

interface CheckoutButtonProps {
  label?: string;
  subLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "dark" | "light";
}

export default function CheckoutButton({
  label = "Começar o protocolo agora",
  subLabel,
  className,
  style,
  variant = "dark",
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    if (loading) return;
    setLoading(true);
    try {
      await startCheckout();
    } catch {
      setLoading(false);
      alert("Não foi possível iniciar o checkout. Tente novamente.");
    }
  }

  const base: React.CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    padding: "1.125rem 2.875rem",
    borderRadius: 8,
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "1.0rem",
    letterSpacing: "0.03em",
    color: "#ffffff",
    background: loading
      ? "rgba(148,136,196,0.50)"
      : "linear-gradient(135deg, #7c6fc0 0%, #9488C4 50%, #b0a6d8 100%)",
    border: "1px solid rgba(255,255,255,0.14)",
    cursor: loading ? "not-allowed" : "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease",
    boxShadow:
      "0 0 0 1px rgba(148,136,196,0.30), 0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50)",
    animation: loading ? "none" : "checkout-pulse 2.6s ease-out infinite",
    ...style,
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`checkout-btn${className ? ` ${className}` : ""}`}
        style={base}
      >
        <span style={{ position: "relative", zIndex: 1 }}>
          {loading ? "Aguarde…" : label}
        </span>
        {subLabel && !loading && (
          <span
            className="font-mono"
            style={{
              fontSize: "0.6rem",
              color: variant === "dark" ? "rgba(210,200,255,0.60)" : "rgba(255,255,255,0.60)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {subLabel}
          </span>
        )}
      </button>

      <style>{`
        @keyframes checkout-pulse {
          0%   { box-shadow: 0 0 0 0    rgba(148,136,196,0.65), 0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
          65%  { box-shadow: 0 0 0 12px rgba(148,136,196,0),    0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
          100% { box-shadow: 0 0 0 0    rgba(148,136,196,0),    0 8px 32px rgba(100,80,180,0.40), 0 2px 8px rgba(0,0,0,0.50); }
        }
        .checkout-btn:hover:not(:disabled) {
          transform: translateY(-2px) !important;
          box-shadow: 0 0 0 1px rgba(148,136,196,0.40),
                      0 12px 40px rgba(100,80,180,0.55),
                      0 2px 8px rgba(0,0,0,0.50) !important;
          animation-play-state: paused !important;
        }
        .checkout-btn:active:not(:disabled) {
          transform: translateY(0) scale(0.97) !important;
        }
      `}</style>
    </>
  );
}
