import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [128, 256, 384, 500],
  },
  trailingSlash: true,

  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────────────────
      // ANTIGUAS URLS DE ARTÍCULOS EN WORDPRESS (/[categoria]/[slug]/)
      // Redirección 301 permanente hacia /blog/[slug]/ para conservar 100% SEO
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/contenido/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/consejos/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/marketing/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/tendencias/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/redes-sociales/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source: "/biografia/:slug/",
        destination: "/blog/:slug/",
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────────
      // ARCHIVOS DE CATEGORÍA DE WORDPRESS
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/category/:slug/",
        destination: "/blog/?categoria=:slug",
        permanent: true,
      },
      {
        source: "/category/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/uncategorized/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/author/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/tag/:path*",
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/feed",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*/feed/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/:path*/feed",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
