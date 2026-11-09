"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BLOG_INDEX,
  BLOG_CATEGORIES,
  type BlogPostMeta,
} from "@/content/blog-posts";

const PAGE_SIZE = 24;

export default function BlogListClient({
  initialCategory = "all",
}: {
  initialCategory?: string;
}) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const filteredPosts = BLOG_INDEX.filter((post: BlogPostMeta) => {
    const matchesCat =
      initialCategory === "all" || post.categorySlug === initialCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const remainingPosts = filteredPosts.slice(visibleCount);

  return (
    <div>
      {/* Search + Category Filters */}
      <div className="mb-10 space-y-6">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Buscar artículos sobre emprendimiento, redes sociales, contenido..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pl-11 text-sm text-brand-black focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <svg
              className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>

        {/* Clean SEO Category Links (Self-canonicalized routes, no ?categoria= query params) */}
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/blog/"
            className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
              initialCategory === "all"
                ? "bg-primary text-white shadow-md shadow-primary/25"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos ({BLOG_INDEX.length})
          </Link>
          {Object.entries(BLOG_CATEGORIES).map(([slug, label]) => {
            const count = BLOG_INDEX.filter(
              (p) => p.categorySlug === slug
            ).length;
            return (
              <Link
                key={slug}
                href={`/blog/categoria/${slug}/`}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                  initialCategory === slug
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {label} ({count})
              </Link>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="py-20 text-center text-gray-500">
          No se encontraron artículos para tu búsqueda.
        </div>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-xl hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold text-white shadow">
                    {post.categoryName}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("es-PE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.readTime} de lectura</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy transition-colors group-hover:text-primary line-clamp-2 font-sans">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Leer guía completa
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {visibleCount < filteredPosts.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-primary cursor-pointer"
              >
                Cargar más artículos ({filteredPosts.length - visibleCount}{" "}
                restantes)
              </button>
            </div>
          )}

          {/* Complete SSR SEO Directory so Googlebot discovers 100% of articles without JS click */}
          {remainingPosts.length > 0 && (
            <section
              aria-label="Índice completo de artículos"
              className="mt-20 border-t border-gray-200 pt-12"
            >
              <h2 className="text-xl font-bold text-navy mb-6 font-sans">
                Índice Completo de Guías y Artículos ({filteredPosts.length})
              </h2>
              <div className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {remainingPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}/`}
                    className="text-xs font-medium text-brand-gray hover:text-primary transition-colors line-clamp-1 py-0.5"
                  >
                    • {post.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
