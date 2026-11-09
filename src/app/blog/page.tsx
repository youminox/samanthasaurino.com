import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogListClient from "./BlogListClient";

export const metadata: Metadata = {
  title:
    "Blog y Artículos sobre Emprendimiento, Contenido Digital y Marcas | Samantha Saurino",
  description:
    "Más de 770 artículos y guías prácticas de Samantha Saurino sobre emprendimiento, creación de contenido digital, redes sociales, video marketing y posicionamiento de marcas.",
  alternates: { canonical: "https://samanthasaurino.com/blog/" },
  openGraph: {
    title:
      "Blog y Artículos sobre Emprendimiento, Contenido Digital y Marcas | Samantha Saurino",
    description:
      "Guías, consejos y tendencias para emprendedores, creadores de contenido y marcas auténticas por Samantha Saurino.",
    url: "https://samanthasaurino.com/blog/",
    type: "website",
    locale: "es_PE",
    siteName: "Samantha Saurino",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Centro de Conocimiento · Samantha Saurino
            </span>
            <h1 className="mt-4 text-4xl font-extrabold text-navy sm:text-5xl">
              Guías y Artículos de{" "}
              <span className="text-primary">
                Emprendimiento y Contenido Digital
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-gray">
              Estrategias de crecimiento para emprendedores, creación de
              contenido que conecta, redes sociales y lecciones reales
              construyendo marcas como Belle 364.
            </p>
          </div>

          <BlogListClient initialCategory="all" />
        </div>
      </main>
      <Footer />
    </>
  );
}
