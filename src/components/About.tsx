export default function About() {
  return (
    <section id="about" className="bg-cream py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-gold inline-block" />
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1] mb-8">
              Architecture that{" "}
              <em className="text-gold font-normal">honours</em> how you live
            </h2>
            <div className="space-y-5 text-stone font-sans font-light text-base leading-relaxed">
              <p>
                Founded in 2015 in Hyderabad, Ankura Homes was built on one
                conviction: every family deserves a home that is not just
                beautiful, but deeply liveable — a space that grows with them,
                sustains them, and reflects who they are.
              </p>
              <p>
                From the quiet lanes of Mokila to the sunlit hills of
                Shankarpalli, we choose locations that breathe. We design homes
                that balance light, space, and greenery with the precision of
                those who genuinely care about the outcome.
              </p>
              <p>
                Quality, speed, and a one-of-a-kind look — that is the Ankura
                promise, in every brick, beam, and boulevard we build.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-beige pt-8">
              {[
                { v: "Quality", d: "Zero compromise on materials and craft" },
                { v: "Speed", d: "On-time delivery, every project" },
                { v: "Unique", d: "Designs that stand apart" },
              ].map((p) => (
                <div key={p.v}>
                  <p className="font-serif text-lg text-ink font-medium mb-1">
                    {p.v}
                  </p>
                  <p className="text-stone font-sans text-xs leading-relaxed">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual block */}
          <div className="relative">
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-[#1A1208] to-[#2C1F10] rounded-none aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(196,150,90,0.2),transparent_60%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="font-serif text-cream/30 text-6xl leading-none font-light mb-2">
                  "
                </p>
                <p className="font-serif text-cream text-xl italic leading-relaxed mb-4">
                  A home is not just a structure. It is a statement of who you
                  aspire to be.
                </p>
                <p className="text-gold font-sans text-xs tracking-widest uppercase">
                  Ankura Homes, Hyderabad
                </p>
              </div>
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #C4965A 1px, transparent 1px), linear-gradient(to bottom, #C4965A 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
            {/* Floating accent badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 hidden lg:block">
              <p className="font-serif text-dark text-3xl font-light">10+</p>
              <p className="text-dark/70 font-sans text-xs tracking-widest uppercase mt-1">
                Years of Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
