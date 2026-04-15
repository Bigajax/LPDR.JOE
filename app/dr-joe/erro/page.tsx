"use client";
import { useEffect } from "react";

/**
 * Página de retorno quando o usuário clica "Voltar à loja" no MP.
 * - Se veio de popup: fecha o popup e o opener volta ao normal.
 * - Se veio de redirect: volta para a landing page.
 */
export default function ErroPage() {
  useEffect(() => {
    if (window.opener && !window.opener.closed) {
      /* Estava em popup — apenas fecha */
      window.close();
    } else {
      /* Estava em redirect — volta para a landing */
      window.location.replace("/");
    }
  }, []);

  return (
    <main style={{
      minHeight: "100vh", background: "#05030f",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <p style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "0.75rem", color: "rgba(148,136,196,0.55)",
        letterSpacing: "0.12em",
      }}>
        Redirecionando…
      </p>
    </main>
  );
}
