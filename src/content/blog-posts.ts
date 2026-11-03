import blogIndexData from "./blog-index.json";

export interface BlogPostMeta {
  id: string;
  title: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  excerpt: string;
  publishedAt: string;
  imageUrl: string;
  readTime: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

export const BLOG_CATEGORIES: Record<string, string> = {
  contenido: "Creadora de Contenido y Guías",
  consejos: "Consejos para Emprendedores",
  marketing: "Marketing Digital y UGC",
  tendencias: "Tendencias de Video Marketing",
  "redes-sociales": "Redes Sociales para Marcas",
  biografia: "Historia y Biografía",
};

export const BLOG_INDEX: BlogPostMeta[] = blogIndexData as BlogPostMeta[];
