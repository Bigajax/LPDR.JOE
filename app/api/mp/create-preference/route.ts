import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/mp/create-preference
 *
 * Proxy para o backend real (ecobackend888).
 * Garante que o productKey seja sempre "dr_joe_colecao" e injeta a
 * siteUrl correta para que o back_urls.success aponte para /dr-joe/obrigado
 * desta landing page.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  const backendUrl =
    process.env.BACKEND_URL || "https://ecobackend888.onrender.com";

  const siteUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    req.headers.get("origin") ||
    "https://ecotopia.vercel.app";

  const payload = {
    productKey: "dr_joe_colecao",
    origin: "landing",
    siteUrl,
    utm: (body as Record<string, unknown>).utm ?? null,
  };

  try {
    const backendRes = await fetch(
      `${backendUrl}/api/mp/create-preference`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await backendRes.json();

    return NextResponse.json(data, { status: backendRes.status });
  } catch (err) {
    console.error("[mp/create-preference proxy] Erro:", err);
    return NextResponse.json(
      { error: "INTERNAL_ERROR", message: "Erro ao conectar com o servidor de pagamento" },
      { status: 502 }
    );
  }
}
