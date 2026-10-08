import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Gera um site 100% estático na pasta out/ (publicado na Cloudflare, ver wrangler.jsonc).
  // Banco, login e imagens dos eventos ficam no Supabase.
  output: "export",
  // A otimização de imagens do Next precisa de servidor; as imagens vão como estão.
  images: { unoptimized: true },
};

export default nextConfig;
