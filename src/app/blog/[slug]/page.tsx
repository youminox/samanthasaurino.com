import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_INDEX } from "@/content/blog-posts";
import { getPostBySlug } from "@/content/blog-server";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_INDEX.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Artículo no encontrado | Samantha Saurino" };
  }

  return {
    title: `${post.title} | Samantha Saurino`,
    description: post.excerpt,
    alternates: { canonical: `https://samanthasaurino.com/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://samanthasaurino.com/blog/${post.slug}/`,
      images: [{ url: post.imageUrl, width: 760, height: 428 }],
      type: "article",
      locale: "es_PE",
      siteName: "Samantha Saurino",
      publishedTime: post.publishedAt,
      authors: ["Samantha Saurino"],
    },
  };
}

export default async function BlogSlugPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_INDEX.filter(
    (p) => p.id !== post.id && p.categorySlug === post.categorySlug
  ).slice(0, 4);

  const recentPosts = BLOG_INDEX.filter((p) => p.id !== post.id).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://samanthasaurino.com${post.imageUrl}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Samantha Saurino",
      url: "https://samanthasaurino.com",
    },
    publisher: {
      "@type": "Person",
      name: "Samantha Saurino",
      logo: {
        "@type": "ImageObject",
        url: "https://samanthasaurino.com/logo-samantha.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://samanthasaurino.com/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12">
            {/* Main article */}
            <article className="min-w-0 flex-1 lg:max-w-3xl">
              <Link
                href="/blog/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Volver a todos los artículos
              </Link>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/blog/?categoria=${post.categorySlug}`}
                  className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary hover:bg-primary hover:text-white transition"
                >
                  {post.categoryName}
                </Link>
                <span className="text-sm text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString("es-PE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-sm text-gray-400">·</span>
                <span className="text-sm text-gray-400">
                  {post.readTime} de lectura
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                {post.title}
              </h1>

              <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-md">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full max-h-[420px] object-cover"
                />
              </div>

              <div
                className="prose prose-lg prose-gray mt-10 max-w-none
                  prose-headings:text-navy prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-navy
                  prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-gray-900
                  prose-ul:my-4 prose-li:text-gray-600"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* CTA Banner inside article — Samantha Saurino & Belle 364 */}
              <div className="mt-14 rounded-2xl bg-gradient-to-br from-belle-olive-dark to-belle-olive p-8 sm:p-10 text-center text-belle-cream shadow-lg">
                <span className="inline-block rounded-full bg-belle-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-belle-gold">
                  Emprendimiento de Samantha Saurino
                </span>
                <h3 className="font-belle-serif mt-3 text-2xl font-bold text-belle-cream sm:text-3xl">
                  Conoce BELLE 364: Cuidado Personal Femenino y Masculino
                </h3>
                <p className="mt-2 text-belle-cream/85 max-w-xl mx-auto text-sm sm:text-base">
                  Descubre nuestra línea de estética y bienestar facial (Faja
                  Facial Reutilizable en tonos Rosado, Negro y Verde Salvia, y
                  Cintas Faciales Adhesivas) diseñada para mujeres y hombres.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://belle364.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-xl bg-belle-gold px-6 py-3.5 text-sm font-bold text-belle-olive-dark transition hover:brightness-105"
                  >
                    Visitar Tienda belle364.com
                  </a>
                  <a
                    href="mailto:info@belle364.com"
                    className="inline-block rounded-xl border border-belle-sage/40 bg-belle-olive-dark/60 px-6 py-3.5 text-sm font-bold text-belle-cream transition hover:bg-belle-cream hover:text-belle-olive"
                  >
                    Escribir a info@belle364.com
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="mt-12 lg:mt-0 lg:w-80 lg:flex-shrink-0">
              <div className="sticky top-28 space-y-8">
                {/* Author / Belle 364 Card */}
                <div className="rounded-2xl border border-border-light bg-light-bg p-6">
                  <div className="flex items-center gap-3.5">
                    <img
                      src="/hero-samantha.webp"
                      alt="Samantha Saurino"
                      className="h-14 w-14 rounded-full object-cover object-top border-2 border-primary/30 bg-white"
                    />
                    <div>
                      <p className="text-sm font-bold text-navy">
                        Samantha Saurino
                      </p>
                      <p className="text-xs text-primary font-semibold">
                        Emprendedora & Creadora
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-brand-gray">
                    Fundadora de <strong>Belle 364</strong>, empresa de cuidado
                    personal femenino y masculino, y creadora de contenido
                    digital.
                  </p>
                  <a
                    href="https://belle364.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full rounded-xl bg-primary px-4 py-2.5 text-center text-xs font-bold text-white transition hover:bg-primary-dark"
                  >
                    Conocer Belle 364 →
                  </a>
                </div>

                {relatedPosts.length > 0 && (
                  <div className="rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
                    <h3 className="mb-4 text-base font-bold text-navy font-sans">
                      Artículos Relacionados
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/blog/${p.slug}/`}
                          className="group flex gap-3 rounded-xl p-2 transition hover:bg-white"
                        >
                          <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                            <img
                              src={p.imageUrl}
                              alt={p.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="line-clamp-2 text-xs font-bold text-gray-900 transition-colors group-hover:text-primary font-sans">
                              {p.title}
                            </h4>
                            <span className="mt-1 block text-[11px] text-gray-400">
                              {p.readTime}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="mb-4 text-base font-bold text-navy font-sans">
                    Guías Destacadas
                  </h3>
                  <div className="space-y-3">
                    {recentPosts.map((p) => (
                      <Link
                        key={p.id}
                        href={`/blog/${p.slug}/`}
                        className="block border-b border-gray-100 pb-3 last:border-b-0 last:pb-0 group"
                      >
                        <p className="text-xs font-semibold text-primary mb-0.5">
                          {p.categoryName}
                        </p>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 font-sans">
                          {p.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
