import Link from "next/link";
import { content } from "@/content/content";
import { BLOG_CATEGORIES } from "@/content/blog-posts";

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-light-bg py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Columna 1: Marca Personal Samantha Saurino */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <picture>
                <source srcSet="/logo-samantha.webp" type="image/webp" />
                <img
                  src="/logo-samantha.png"
                  alt="Samantha Saurino"
                  width={200}
                  height={38}
                  className="h-9 w-auto"
                  loading="lazy"
                />
              </picture>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-gray">
              Emprendedora peruana, fundadora de{" "}
              <strong className="text-navy">Belle 364</strong> (cuidado personal
              femenino y masculino) y creadora de contenido digital.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-belle-olive/20 bg-belle-cream/70 px-3.5 py-1.5 text-xs font-semibold text-belle-olive">
              <span className="h-2 w-2 rounded-full bg-belle-olive" />
              Fundadora de Belle 364
            </div>
          </div>

          {/* Columna 2: Belle 364 */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-navy uppercase tracking-wider font-sans">
              Mi Marca · Belle 364
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-gray">
              <li>
                <a
                  href="/#belle-364"
                  className="transition-colors hover:text-primary"
                >
                  Cuidado Femenino Belle 364
                </a>
              </li>
              <li>
                <a
                  href="/#belle-364"
                  className="transition-colors hover:text-primary"
                >
                  Cuidado Masculino Belle 364
                </a>
              </li>
              <li>
                <a
                  href="https://belle364.com/products/faja-facial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Faja Facial Reutilizable
                </a>
              </li>
              <li>
                <a
                  href="https://belle364.com/products/cinta-facial-adhesiva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Cinta Facial Adhesiva (128 Cintas)
                </a>
              </li>
              <li>
                <a
                  href="https://belle364.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-primary hover:text-primary-dark"
                >
                  Ir a belle364.com →
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Categorías del Blog */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-navy uppercase tracking-wider font-sans">
              Artículos y Guías
            </h3>
            <ul className="space-y-2.5 text-sm text-brand-gray">
              {Object.entries(BLOG_CATEGORIES).map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    href={`/blog/?categoria=${slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto Directo */}
          <div>
            <h3 className="mb-4 text-xs font-extrabold text-navy uppercase tracking-wider font-sans">
              Contacto Directo
            </h3>
            <div className="space-y-3 text-sm text-brand-gray">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-black">
                  Samantha Saurino (Prensa y Contenido)
                </p>
                <a
                  href={`mailto:${content.brand.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {content.brand.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-black">
                  Atención al Cliente Belle 364
                </p>
                <a
                  href={`mailto:${content.brand.belle364.email}`}
                  className="font-medium text-belle-olive hover:underline"
                >
                  {content.brand.belle364.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-black">
                  Tienda Oficial Belle 364
                </p>
                <a
                  href="https://belle364.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy hover:text-primary"
                >
                  www.belle364.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border-light pt-6 sm:flex-row">
          <p className="text-xs text-brand-gray">{content.footer.copyright}</p>
          <div className="flex flex-wrap justify-center gap-5">
            {content.footer.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-brand-gray transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
