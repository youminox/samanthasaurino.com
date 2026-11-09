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
      // 1. RESOLUCIÓN DE "PÁGINA ALTERNATIVA CON ETIQUETA CANÓNICA ADECUADA"
      // Redirige ?categoria=slug hacia la ruta estática autónoma /blog/categoria/slug/
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/blog/",
        has: [
          {
            type: "query",
            key: "categoria",
            value: "(?<cat>contenido|consejos|marketing|tendencias|redes-sociales|biografia)",
          },
        ],
        destination: "/blog/categoria/:cat/",
        permanent: true,
      },
      {
        source: "/blog",
        has: [
          {
            type: "query",
            key: "categoria",
            value: "(?<cat>contenido|consejos|marketing|tendencias|redes-sociales|biografia)",
          },
        ],
        destination: "/blog/categoria/:cat/",
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────────
      // 2. FEEDS DE ARTÍCULOS DE WORDPRESS (/[categoria]/[slug]/feed/)
      // Redirige directamente al artículo canónico /blog/[slug]/
      // ─────────────────────────────────────────────────────────────────────
      {
        source:
          "/:cat(contenido|consejos|marketing|tendencias|redes-sociales|biografia)/:slug/feed/",
        destination: "/blog/:slug/",
        permanent: true,
      },
      {
        source:
          "/:cat(contenido|consejos|marketing|tendencias|redes-sociales|biografia)/:slug/feed",
        destination: "/blog/:slug/",
        permanent: true,
      },

      // ─────────────────────────────────────────────────────────────────────
      // 3. ANTIGUAS URLS DE ARTÍCULOS EN WORDPRESS (/[categoria]/[slug]/)
      // Redirección 301 permanente hacia /blog/[slug]/
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
      // 4. ARCHIVOS DE CATEGORÍA Y PAGINACIÓN DE WORDPRESS
      // Redirige a la categoría canónica correspondiente
      // ─────────────────────────────────────────────────────────────────────
      {
        source: "/category/:slug/page/:num*",
        destination: "/blog/categoria/:slug/",
        permanent: true,
      },
      {
        source: "/category/:slug/",
        destination: "/blog/categoria/:slug/",
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
        destination: "/blog/",
        permanent: true,
      },
      {
        source: "/:path*/feed",
        destination: "/blog/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
