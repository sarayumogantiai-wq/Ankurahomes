const locations = [
  {
    name: "Shankarpalli",
    tag: "IQON West · Casa Billa",
    desc: "A peaceful township on NH-65, blending city access with countryside calm.",
    distance: "35 km from Hyderabad CBD",
  },
  {
    name: "Mokila",
    tag: "Urban Trilla · Future Projects",
    desc: "Hyderabad's green corridor — pristine air, open plots, and rising property values.",
    distance: "28 km from Hitech City",
  },
];

export default function Locations() {
  return (
    <section className="bg-ink py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4 flex items-center gap-4">
              <span className="w-10 h-px bg-gold inline-block" />
              Where We Build
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.1]">
              Locations chosen <br />
              <em className="text-gold font-normal">with intention</em>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="relative bg-gradient-to-br from-[#1A1208] to-[#0F0D0B] border border-cream/5 p-10 overflow-hidden group hover:border-gold/20 transition-colors duration-500"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-serif text-8xl text-cream/[0.03] select-none">
                {locations.indexOf(loc) + 1}
              </span>

              <p
                className="text-[10px] tracking-[0.2em] uppercase font-sans mb-6 text-gold/70 border border-gold/30 px-3 py-1.5 inline-block"
              >
                {loc.tag}
              </p>
              <h3 className="font-serif text-cream text-4xl font-light mb-4">
                {loc.name}
              </h3>
              <p className="text-cream/50 font-sans text-sm leading-relaxed mb-6">
                {loc.desc}
              </p>
              <div className="flex items-center gap-2 text-gold font-sans text-xs">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                {loc.distance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
