"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const APP_URL = "https://ecofrontend888.vercel.app";

function ObrigadoContent() {
  const searchParams = useSearchParams();
  const status = searchParams.get("collection_status") || searchParams.get("status");
  const externalReference = searchParams.get("external_reference");
  const isApproved = status === "approved";
  const [sentToParent, setSentToParent] = useState(false);

  useEffect(() => {
    if (!isApproved) return;

    /* Salva ref no localStorage para o app fazer claim após login */
    try {
      localStorage.setItem("pending_claim_ref", externalReference ?? "");
      localStorage.setItem("pending_claim_product", "dr_joe_colecao");
    } catch { /* noop */ }

    /* Se está dentro de um popup da landing page, avisa o opener e fecha */
    if (window.opener && !window.opener.closed) {
      window.opener.postMessage({ type: "MP_PAYMENT_SUCCESS", externalReference }, "*");
      setSentToParent(true);
      /* Pequeno delay para garantir entrega do postMessage */
      setTimeout(() => window.close(), 400);
    }
  }, [isApproved, externalReference]);

  /* URL do app com o ref para claim automático */
  const appUrl = externalReference
    ? `${APP_URL}/app?claim_ref=${encodeURIComponent(externalReference)}&product=dr_joe_colecao`
    : `${APP_URL}/app`;

  /* Se está fechando o popup, mostra tela mínima */
  if (sentToParent) {
    return (
      <main style={{ minHeight: "100vh", background: "#05030f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", color: "rgba(148,136,196,0.60)", letterSpacing: "0.12em" }}>
          Fechando…
        </p>
      </main>
    );
  }

  return (
    <main style={{
      minHeight: "100vh", background: "#05030f",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "2rem", fontFamily: "var(--font-body, sans-serif)",
    }}>
      <div style={{ maxWidth: 560, width: "100%", textAlign: "center" }}>
        {isApproved ? (
          <>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "rgba(148,136,196,0.15)", border: "1px solid rgba(148,136,196,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2rem", fontSize: 28, color: "rgba(192,180,224,0.90)",
            }}>✓</div>

            <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(2rem, 5vw, 2.75rem)", fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Pagamento confirmado.
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(210,205,230,0.88)", lineHeight: 1.72, marginBottom: "2.5rem" }}>
              Seu protocolo foi liberado. Acesse o app para começar.
            </p>

            <div style={{ background: "rgba(148,136,196,0.06)", border: "1px solid rgba(148,136,196,0.18)", borderRadius: 12, padding: "1.5rem", marginBottom: "2.5rem", textAlign: "left" }}>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.6875rem", color: "rgba(148,136,196,0.60)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Próximos passos
              </p>
              {[
                "Acesse o app com seu e-mail",
                "Inicie o Protocolo — Sessão 1",
                "7 minutos por dia. Consistência é o método.",
              ].map((step, i) => (
                <div key={step} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start", marginBottom: i < 2 ? "0.75rem" : 0 }}>
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.625rem", color: "rgba(148,136,196,0.45)", flexShrink: 0, marginTop: 3 }}>0{i + 1}</span>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(210,205,230,0.88)", lineHeight: 1.65 }}>{step}</p>
                </div>
              ))}
            </div>

            <a href={appUrl} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "1.125rem 2.875rem", borderRadius: 8,
              fontWeight: 600, fontSize: "1.0rem", letterSpacing: "0.03em",
              color: "#ffffff", textDecoration: "none",
              background: "linear-gradient(135deg, #7c6fc0 0%, #9488C4 50%, #b0a6d8 100%)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 0 0 1px rgba(148,136,196,0.30), 0 8px 32px rgba(100,80,180,0.40)",
            }}>
              Acessar o protocolo →
            </a>
          </>
        ) : (
          <>
            <div style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "rgba(196,152,60,0.10)", border: "1px solid rgba(196,152,60,0.30)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 2rem", fontSize: 28, color: "rgba(196,152,60,0.80)",
            }}>◎</div>

            <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#f5f0ff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
              Pagamento em análise
            </h1>
            <p style={{ fontSize: "1.0625rem", color: "rgba(210,205,230,0.78)", lineHeight: 1.72, marginBottom: "2.5rem" }}>
              Assim que confirmado, seu acesso será liberado pelo e-mail informado na compra.
            </p>
            <a href="/" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.75rem", color: "rgba(148,136,196,0.65)", letterSpacing: "0.10em", textDecoration: "none" }}>
              ← Voltar ao início
            </a>
          </>
        )}
      </div>
    </main>
  );
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: "100vh", background: "#05030f", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "2px solid rgba(148,136,196,0.20)", borderTopColor: "rgba(148,136,196,0.70)", animation: "spin 0.8s linear infinite" }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </main>
    }>
      <ObrigadoContent />
    </Suspense>
  );
}
