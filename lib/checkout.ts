/**
 * Cria a preferência de pagamento no backend e retorna a URL do checkout MP.
 * Não redireciona — deixa o caller decidir como abrir (popup, redirect, etc).
 */
export async function createPreference(): Promise<{
  init_point: string;
  external_reference: string;
}> {
  const res = await fetch("/api/mp/create-preference", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Falha ao criar preferência de pagamento");

  const data = await res.json();
  const url = data.init_point;

  if (!url) throw new Error("URL de checkout não retornada pelo servidor");

  return { init_point: url, external_reference: data.external_reference ?? "" };
}

/**
 * Abre o checkout MP num popup centralizado.
 * Retorna a referência do popup para monitoramento.
 */
export function openCheckoutPopup(url: string): Window | null {
  const w = 820;
  const h = 680;
  const left = Math.max(0, (window.screen.width - w) / 2 + (window.screenLeft ?? 0));
  const top  = Math.max(0, (window.screen.height - h) / 2 + (window.screenTop ?? 0));

  return window.open(
    url,
    "mp_checkout",
    `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`
  );
}
