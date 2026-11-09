import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListClient from "../../BlogListClient";
import { BLOG_CATEGORIES, BLOG_INDEX } from "@/content/blog-posts";

type Props = {
  params: Promise<{ categoria: string }>;
};

export function generateStaticParams() {
  return Object.keys(BLOG_CATEGORIES).map((categoria) => ({
    categoria,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const label = BLOG_CATEGORIES[categoria];

  if (!label) {
    return { title: "Categoría no encontrada | Samantha Saurino" };
  }

  const count = BLOG_INDEX.filter((p) => p.categorySlug === categoria).length;

  return {
    title: `${label}: ${count} Artículos y Guías Prácticas | Samantha Saurino`,
    description: `Explora nuestra colección de ${count} artículos sobre ${label.toLowerCase()} escritos por Samantha Saurino, emprendedora y fundadora de Belle 364.`,
    alternates: {
      canonical: `https://samanthasaurino.com/blog/categoria/${categoria}/`,
    },
    openGraph: {
      title: `${label} | Blog de Samantha Saurino`,
      description: `Guías, estrategias y consejos sobre ${label.toLowerCase()} por Samantha Saurino.`,
      url: `https://samanthasaurino.com/blog/categoria/${categoria}/`,
      type: "website",
      locale: "es_PE",
      siteName: "Samantha Saurino",
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { categoria } = await params;
  const label = BLOG_CATEGORIES[categoria];

  if (!label) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Categoría Especializada · Samantha Saurino
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-navy sm:text-5xl">
              {label}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Artículos, guías paso a paso y consejos prácticos sobre{" "}
              {label.toLowerCase()} para potenciar tu marca y crecimiento
              digital.
            </p>
          </div>

          <BlogListClient initialCategory={categoria} />
        </div>
      </main>
      <Footer />
    </>
  );
}
