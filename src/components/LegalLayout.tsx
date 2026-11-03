import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalLayout({
  title,
  updatedAt,
  children,
}: {
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-gray transition hover:text-primary"
          >
            ← Volver al inicio
          </Link>
          <h1 className="text-3xl font-extrabold text-navy sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-xs text-brand-gray">
            Última actualización: {updatedAt}
          </p>
          <div className="prose prose-gray mt-8 max-w-none prose-headings:text-navy prose-a:text-primary">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
