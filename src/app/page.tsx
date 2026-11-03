import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { content } from "@/content/content";
import { BLOG_INDEX, BLOG_CATEGORIES } from "@/content/blog-posts";

export default function HomePage() {
  const recentPosts = BLOG_INDEX.slice(0, 6);

  return (
    <>
      <Header />
      <main>
        {/* ══════════════════════════════════════════════════════════════════
            1. HERO PRINCIPAL — ESTILO SAMANTHA SAURINO
           ══════════════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-samantha-hero pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-border-light">
          {/* Decorative soft shape from Samantha's original site */}
          <img
            src="/images/shape-bg.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-12 w-[540px] opacity-35 select-none hidden lg:block"
          />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Text */}
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-xs">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {content.hero.badge}
                </div>

                <p className="mt-6 text-lg font-bold text-primary tracking-wide">
                  {content.hero.greeting}
                </p>

                <h1 className="mt-2 text-4xl font-extrabold leading-[1.15] text-navy sm:text-5xl lg:text-[54px]">
                  Emprendedora, Fundadora de{" "}
                  <span className="text-primary underline decoration-primary/25 decoration-wavy underline-offset-8">
                    Belle 364
                  </span>{" "}
                  y Creadora de Contenido.
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-gray sm:text-lg">
                  ¡Hola! Soy{" "}
                  <strong className="text-navy">Samantha Saurino</strong>,
                  emprendedora y creadora de contenido digital. Hoy lidero mi
                  propia empresa{" "}
                  <strong className="text-belle-olive">Belle 364</strong>, una
                  marca peruana de{" "}
                  <strong className="text-navy">
                    cuidado personal femenino y masculino
                  </strong>{" "}
                  creada para brindar bienestar, estética facial y confianza
                  todos los días del año, mientras comparto con mi comunidad el
                  camino real de emprender y comunicar con autenticidad.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#belle-364"
                    className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Conoce mi marca Belle 364
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://belle364.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-belle-olive bg-belle-cream/60 px-6 py-3.5 text-sm font-bold text-belle-olive transition-all hover:bg-belle-olive hover:text-white"
                  >
                    Visitar belle364.com
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
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>

                {/* Trust Highlights */}
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border-light pt-6 text-xs font-semibold text-brand-gray sm:text-sm">
                  {content.hero.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Samantha Portrait + Floating Belle 364 Badge */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md">
                  {/* Soft decorative halo */}
                  <div className="absolute inset-x-4 bottom-0 top-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/15 via-belle-sage/25 to-white border border-border-light shadow-inner" />

                  <picture className="relative z-10 block">
                    <source srcSet="/hero-samantha.webp" type="image/webp" />
                    <img
                      src="/hero-samantha.png"
                      alt="Samantha Saurino - Emprendedora y Creadora de Contenido"
                      width={520}
                      height={650}
                      fetchPriority="high"
                      className="relative z-10 mx-auto max-h-[500px] w-auto object-contain drop-shadow-xl"
                    />
                  </picture>

                  {/* Floating Card: Fundadora de Belle 364 */}
                  <a
                    href="#belle-364"
                    className="animate-float-slow absolute -bottom-4 left-2 right-2 sm:left-4 sm:right-auto z-20 flex items-center gap-3.5 rounded-2xl border border-belle-olive/20 bg-white/95 backdrop-blur-md p-3.5 shadow-xl transition hover:scale-[1.02]"
                  >
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-belle-olive p-2">
                      <img
                        src="/images/belle364/isotipo-cream.webp"
                        alt="Belle 364 Isotipo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-belle-bronze">
                        CEO & Fundadora
                      </span>
                      <span className="font-belle-serif text-sm font-bold text-belle-olive">
                        BELLE 364 · Cuidado Femenino y Masculino
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            2. FRANJA DE IMPACTO / CIFRAS
           ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-10 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {content.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border-light bg-light-bg/60 p-6 text-center transition hover:border-primary/30 hover:bg-light-bg"
                >
                  <p className="font-serif-display text-3xl font-extrabold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold text-brand-gray sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            3. SOBRE SAMANTHA: DE CREADORA DE CONTENIDO A EMPRENDEDORA
           ══════════════════════════════════════════════════════════════════ */}
        <section id="sobre-samantha" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                {content.about.eyebrow}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
                {content.about.title}
              </h2>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 space-y-5 text-base leading-relaxed text-brand-gray">
                {content.about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/blog/creadora-de-contenido/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark"
                  >
                    Leer mi biografía completa en el blog →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid gap-5 sm:grid-cols-1">
                {content.about.pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className="flex gap-4 rounded-2xl border border-border-light bg-light-bg p-6 shadow-xs transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-white font-bold text-base shadow-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy font-sans">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-gray">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            4. SECCIÓN ESTRELLA: BELLE 364 (CUIDADO FEMENINO Y MASCULINO)
            Usa los colores y estética del Brand Board de Belle 364 en armonía
            con la web de Samantha Saurino
           ══════════════════════════════════════════════════════════════════ */}
        <section
          id="belle-364"
          className="relative overflow-hidden bg-belle-olive py-20 lg:py-28 text-belle-cream"
        >
          {/* Subtle decorative radial glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-belle-sage/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-belle-gold/15 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Brand Header */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex items-center justify-center rounded-2xl bg-belle-olive-dark/70 border border-belle-sage/25 px-8 py-5 shadow-lg">
                <img
                  src="/images/belle364/logo-vertical-cream.webp"
                  alt="Belle 364 Logotipo Oficial"
                  className="h-24 w-auto sm:h-28 object-contain"
                />
              </div>

              <span className="inline-block rounded-full bg-belle-sage/20 border border-belle-sage/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-belle-sage">
                {content.belle364Section.eyebrow}
              </span>

              <h2 className="font-belle-serif mt-4 max-w-3xl text-3xl font-bold text-belle-cream sm:text-4xl lg:text-5xl">
                {content.belle364Section.title}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-belle-cream/85 sm:text-lg">
                {content.belle364Section.subtitle}
              </p>
            </div>

            {/* Dual Care Lines: Cuidado Femenino & Cuidado Masculino */}
            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {content.belle364Section.lines.map((line) => (
                <div
                  key={line.title}
                  className="group overflow-hidden rounded-3xl border border-belle-sage/25 bg-belle-cream text-brand-black shadow-xl transition hover:-translate-y-1"
                >
                  <div className="grid sm:grid-cols-12 items-stretch">
                    <div className="sm:col-span-5 relative overflow-hidden bg-belle-sage/40 min-h-[260px]">
                      <img
                        src={line.image}
                        alt={line.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 rounded-full bg-belle-olive/90 backdrop-blur-xs px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-belle-cream">
                        {line.badge}
                      </span>
                    </div>

                    <div className="sm:col-span-7 flex flex-col justify-between p-6 sm:p-8">
                      <div>
                        <h3 className="font-belle-serif text-2xl font-bold text-belle-olive">
                          {line.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-brand-gray">
                          {line.description}
                        </p>
                        <ul className="mt-4 space-y-2">
                          {line.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex items-start gap-2 text-xs font-semibold text-brand-black sm:text-sm"
                            >
                              <span className="mt-0.5 text-belle-bronze">●</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-belle-sand/50 flex items-center justify-between">
                        <a
                          href="https://belle364.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-belle-olive hover:text-belle-bronze transition"
                        >
                          Ver línea en belle364.com →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Products from belle364.com */}
            <div className="mt-16">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-belle-gold">
                    Catálogo Destacado Belle 364
                  </span>
                  <h3 className="font-belle-serif mt-1 text-2xl font-bold text-belle-cream sm:text-3xl">
                    Productos diseñados para resultados reales
                  </h3>
                </div>
                <a
                  href="https://belle364.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-belle-gold px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-belle-olive-dark shadow-md transition hover:brightness-105"
                >
                  Comprar en belle364.com →
                </a>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {content.belle364Section.featuredProducts.map((prod) => (
                  <a
                    key={prod.name}
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-2xl border border-belle-sage/25 bg-white text-brand-black shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="aspect-square overflow-hidden bg-belle-cream/50 p-6 flex items-center justify-center relative">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-3 right-3 rounded-full bg-belle-olive px-3 py-1 text-xs font-extrabold text-belle-cream">
                        {prod.price}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-belle-bronze">
                        {prod.category}
                      </span>
                      <h4 className="font-belle-serif mt-1 text-xl font-bold text-belle-olive group-hover:text-primary transition-colors">
                        {prod.name}
                      </h4>
                      <p className="mt-2 text-sm text-brand-gray flex-1">
                        {prod.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
                        Ver producto en tienda →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Brand Board Packaging & Identity Gallery */}
            <div className="mt-16 rounded-3xl border border-belle-sage/25 bg-belle-olive-dark/60 p-6 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-12 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="inline-block rounded-full bg-belle-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-belle-gold">
                    Identidad & Experiencia Belle 364
                  </span>
                  <h3 className="font-belle-serif text-2xl font-bold text-belle-cream sm:text-3xl">
                    Cada detalle pensado con amor por la estética y la calidad
                  </h3>
                  <p className="text-sm leading-relaxed text-belle-cream/80">
                    Como emprendedora, diseñé la identidad de{" "}
                    <strong className="text-belle-cream">Belle 364</strong> para
                    que cada cliente —hombre o mujer— viva una experiencia
                    premium desde que recibe su empaque hasta que incorpora el
                    producto en su rutina diaria.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-belle-sage">
                    <span>
                      Web oficial:{" "}
                      <a
                        href="https://belle364.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-belle-gold underline"
                      >
                        belle364.com
                      </a>
                    </span>
                    <span>·</span>
                    <span>
                      Contacto:{" "}
                      <a
                        href="mailto:info@belle364.com"
                        className="font-bold text-belle-gold underline"
                      >
                        info@belle364.com
                      </a>
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="overflow-hidden rounded-2xl border border-belle-sage/20 aspect-square">
                    <img
                      src="/images/belle364/brand-skincare-hero.webp"
                      alt="Cuidado de la piel Belle 364"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-belle-sage/20 aspect-square">
                    <img
                      src="/images/belle364/packaging-boxes.webp"
                      alt="Empaque Cajas Belle 364"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-belle-sage/20 aspect-square col-span-2 sm:col-span-1">
                    <img
                      src="/images/belle364/packaging-bag.webp"
                      alt="Bolsa Oficial Belle 364"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            5. FACETA COMO CREADORA DE CONTENIDO DIGITAL
           ══════════════════════════════════════════════════════════════════ */}
        <section
          id="creadora"
          className="bg-light-bg py-20 lg:py-24 border-b border-border-light"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Column: Smartphones visual of Samantha */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-border-light bg-white p-4 sm:p-6 shadow-lg">
                  <picture>
                    <source
                      srcSet="/images/samantha-reels.webp"
                      type="image/webp"
                    />
                    <img
                      src="/images/samantha-reels.png"
                      alt="Samantha Saurino creando contenido vertical para redes sociales"
                      className="w-full h-auto rounded-2xl object-contain"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>

              {/* Right Column: Copy & Cards */}
              <div className="lg:col-span-6">
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                  {content.creatorSection.eyebrow}
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
                  {content.creatorSection.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-brand-gray">
                  {content.creatorSection.subtitle}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {content.creatorSection.cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-border-light bg-white p-5 shadow-xs transition hover:border-primary/40 hover:shadow-md"
                    >
                      <h3 className="text-base font-bold text-navy font-sans">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-brand-gray sm:text-sm">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            6. ÚLTIMOS ARTÍCULOS DEL BLOG (MISMO DISEÑO DE TARJETAS DE DINAMICA.PE)
           ══════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                Blog de Samantha Saurino · +{BLOG_INDEX.length} Artículos
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
                Artículos sobre Emprendimiento,{" "}
                <span className="text-primary">Contenido y Marcas</span>
              </h2>
              <p className="mt-4 max-w-2xl text-base text-brand-gray sm:text-lg">
                Explora mis guías, consejos y tendencias sobre creación de
                contenido, marketing digital, redes sociales y crecimiento de
                negocios.
              </p>

              {/* Category quick pills */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {Object.entries(BLOG_CATEGORIES).map(([slug, label]) => (
                  <Link
                    key={slug}
                    href={`/blog/?categoria=${slug}`}
                    className="rounded-full border border-border-light bg-light-bg px-4 py-1.5 text-xs font-bold text-brand-black transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cards Grid (Dinamica.pe style) */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
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
                    <h3 className="text-lg font-bold text-navy transition-colors group-hover:text-primary line-clamp-2 font-sans">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-brand-gray flex-1">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                      Leer artículo completo
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

            <div className="mt-12 text-center">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold text-white shadow-md transition hover:bg-primary"
              >
                Ver los {BLOG_INDEX.length} artículos del blog →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            7. SECCIÓN DE CONTACTO
           ══════════════════════════════════════════════════════════════════ */}
        <section
          id="contacto"
          className="bg-gradient-to-br from-light-bg via-white to-belle-cream/40 py-20 border-t border-border-light"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-border-light bg-white p-8 sm:p-12 shadow-xl">
              <div className="grid gap-10 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                    Conecta Conmigo
                  </span>
                  <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                    ¿Quieres conocer más sobre Belle 364 o conversar sobre un
                    proyecto?
                  </h2>
                  <p className="text-base leading-relaxed text-brand-gray">
                    Tanto si buscas adquirir nuestros productos de{" "}
                    <strong className="text-belle-olive">
                      cuidado femenino y masculino en Belle 364
                    </strong>{" "}
                    como si deseas contactarme por colaboraciones, prensa o
                    emprendimiento, estaré encantada de leerte.
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <a
                    href="https://belle364.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl bg-belle-olive p-5 text-belle-cream shadow-md transition hover:bg-belle-olive-dark"
                  >
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-belle-gold">
                        Tienda Online Oficial
                      </span>
                      <span className="font-belle-serif text-lg font-bold">
                        Visitar belle364.com
                      </span>
                    </div>
                    <span className="text-xl">↗</span>
                  </a>

                  <a
                    href="mailto:info@belle364.com"
                    className="flex items-center justify-between rounded-2xl border border-belle-olive/25 bg-belle-cream/60 p-5 text-belle-olive transition hover:bg-belle-cream"
                  >
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-belle-bronze">
                        Correo Corporativo Belle 364
                      </span>
                      <span className="text-base font-bold">
                        info@belle364.com
                      </span>
                    </div>
                    <span className="text-xl">✉</span>
                  </a>

                  <a
                    href="mailto:samanthasaurino@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-border-light bg-light-bg p-5 text-navy transition hover:border-primary/40"
                  >
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-primary">
                        Contacto Directo Samantha Saurino
                      </span>
                      <span className="text-base font-bold">
                        samanthasaurino@gmail.com
                      </span>
                    </div>
                    <span className="text-xl">✉</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
