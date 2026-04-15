/**
 * Inicia o fluxo de checkout via Mercado Pago.
 * Chama POST /api/mp/create-preference e redireciona para o init_point.
 */
export async function startCheckout(): Promise<void> {
  const res = await fetch("/api/mp/create-preference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Falha ao iniciar checkout");
  }

  const data = await res.json();

  // Em produção usa init_point; em sandbox usa sandbox_init_point
  const url =
    process.env.NODE_ENV === "production"
      ? data.init_point
      : (data.sandbox_init_point ?? data.init_point);

  if (!url) throw new Error("URL de checkout não retornada");

  window.location.href = url;
}
