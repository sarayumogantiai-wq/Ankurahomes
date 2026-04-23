const projects = [
  {
    id: "iqon-west",
    name: "IQON West",
    type: "5 BHK Triplex Villas",
    location: "Shankarpalli, Hyderabad",
    price: "₹2.48 – 3.09 Cr",
    possession: "July 2028",
    status: "Under Construction",
    highlight: "Lavish 4-level clubhouse with gym, yoga, guest suites & skating rink",
    gradient: "from-[#1C2B1A] to-[#0D1A0C]",
    accent: "#6B9E64",
    tag: "Flagship",
  },
  {
    id: "urban-trilla-farms",
    name: "Urban Trilla Farms",
    type: "Luxury Farm Villas",
    location: "Mokila, West Hyderabad",
    price: "₹1.72 – 2.22 Cr",
    possession: "Dec 2027",
    status: "Under Construction",
    highlight: "Private farm villas with lush greens, pools, and city connectivity",
    gradient: "from-[#1A2215] to-[#101608]",
    accent: "#8DB874",
    tag: "Nature Living",
  },
  {
    id: "urban-trilla-apts",
    name: "Urban Trilla Apartments",
    type: "4 BHK Residences",
    location: "Mokila, West Hyderabad",
    price: "From ₹1.5 Cr",
    possession: "2027",
    status: "New Launch",
    highlight: "Elegant 4 BHK apartments set among landscaped gardens",
    gradient: "from-[#1A1408] to-[#12100A]",
    accent: "#C4965A",
    tag: "New Launch",
  },
  {
    id: "casa-billa",
    name: "Casa Billa",
    type: "Weekend Villa Homes",
    location: "Shankarpalli, Hyderabad",
    price: "On Request",
    possession: "Ongoing",
    status: "Available",
    highlight: "Serene weekend retreat homes designed for rest and rejuvenation",
    gradient: "from-[#1A1520] to-[#0D0A14]",
    accent: "#9B7EC8",
    tag: "Weekend Homes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-ink py-28 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4 flex items-center gap-4">
              <span className="w-10 h-px bg-gold inline-block" />
              Our Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
              Homes worth <em className="text-gold font-normal">living in</em>
            </h2>
          </div>
          <p className="text-cream/40 font-sans font-light text-sm max-w-xs leading-relaxed">
            Six landmark projects across Hyderabad's most sought-after
            residential corridors.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className={`group relative bg-gradient-to-br ${p.gradient} overflow-hidden cursor-pointer`}
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(to right, ${p.accent} 1px, transparent 1px), linear-gradient(to bottom, ${p.accent} 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at 30% 50%, ${p.accent}15, transparent 60%)`,
                }}
              />

              <div className="relative z-10 p-8 lg:p-10">
                {/* Tag */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-sans px-3 py-1.5 border"
                    style={{ borderColor: `${p.accent}60`, color: p.accent }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-cream/30 font-sans text-xs">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Project name */}
                <h3 className="font-serif text-cream text-3xl lg:text-4xl font-light mb-1">
                  {p.name}
                </h3>
                <p className="font-sans text-cream/50 text-sm mb-6">{p.type}</p>

                {/* Divider */}
                <div className="w-full h-px bg-cream/10 mb-6" />

                {/* Details */}
                <p className="text-cream/50 font-sans text-sm leading-relaxed mb-8">
                  {p.highlight}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { k: "Location", v: p.location },
                    { k: "Price", v: p.price },
                    { k: "Possession", v: p.possession },
                    { k: "Status", v: p.status },
                  ].map((d) => (
                    <div key={d.k}>
                      <p className="text-cream/30 font-sans text-[10px] tracking-widest uppercase mb-1">
                        {d.k}
                      </p>
                      <p className="text-cream font-sans text-sm font-light">
                        {d.v}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-sans group-hover:gap-4 transition-all duration-300"
                  style={{ color: p.accent }}
                >
                  View Project
                  <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
