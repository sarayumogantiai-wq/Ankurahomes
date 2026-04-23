export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end bg-dark overflow-hidden">
      {/* Gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1208] via-[#0F0D0B] to-[#0A0C0F]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(196,150,90,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(196,150,90,0.06),transparent_50%)]" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C4965A 1px, transparent 1px), linear-gradient(to bottom, #C4965A 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-10 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-24 pt-40 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-8 flex items-center gap-4">
            <span className="w-10 h-px bg-gold inline-block" />
            Hyderabad · Est. 2015
          </p>

          {/* Headline */}
          <h1 className="font-serif text-cream leading-[1.05] mb-8">
            <span className="block text-5xl md:text-7xl lg:text-8xl font-light">
              We Build Homes.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-semibold italic text-gold mt-2">
              Better Ones.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-cream/50 font-sans font-light text-base md:text-lg max-w-xl leading-relaxed mb-12">
            Luxury villas, thoughtful apartments, and serene weekend homes —
            crafted for those who refuse to settle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-gold text-dark font-sans text-xs tracking-[0.18em] uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-300"
            >
              Explore Projects
              <span className="text-base leading-none">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 text-cream/80 font-sans text-xs tracking-[0.18em] uppercase px-8 py-4 hover:border-cream/60 hover:text-cream transition-all duration-300"
            >
              Book a Site Visit
            </a>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="mt-20 pt-10 border-t border-cream/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { num: "500+", label: "Families Housed" },
            { num: "130+", label: "Acres Developed" },
            { num: "6", label: "Landmark Projects" },
            { num: "10+", label: "Years of Excellence" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl md:text-4xl text-cream font-light">
                {s.num}
              </p>
              <p className="text-cream/40 font-sans text-xs tracking-widest uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-2 text-cream/30">
        <span className="text-[10px] tracking-[0.2em] uppercase font-sans rotate-90 origin-center mb-4">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/30 to-transparent" />
      </div>
    </section>
  );
}
