export default function ContactCTA() {
  return (
    <section id="contact" className="bg-gold py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1A1208 1px, transparent 1px), linear-gradient(to bottom, #1A1208 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-dark/60 text-xs tracking-[0.3em] uppercase font-sans mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-dark/40 inline-block" />
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark leading-[1.05] mb-6">
              Your next home <br />
              <em className="font-normal opacity-70">awaits a conversation</em>
            </h2>
            <p className="text-dark/70 font-sans font-light text-base leading-relaxed max-w-md">
              Book a complimentary site visit, request a brochure, or simply
              ask a question. Our team responds within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { k: "Phone", v: "+91 98490 XXXXX" },
                { k: "Email", v: "hello@ankurahomes.com" },
                { k: "Office", v: "Hyderabad, Telangana, India" },
              ].map((c) => (
                <div key={c.k} className="flex gap-4">
                  <span className="text-dark/50 font-sans text-xs tracking-widest uppercase w-16 pt-0.5">
                    {c.k}
                  </span>
                  <span className="text-dark font-sans text-sm">{c.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="bg-dark/10 backdrop-blur-sm p-8 lg:p-10 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-dark/60 font-sans text-xs tracking-widest uppercase block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Rahul"
                  className="w-full bg-cream/20 border border-dark/20 text-dark placeholder:text-dark/40 font-sans text-sm px-4 py-3 outline-none focus:border-dark/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-dark/60 font-sans text-xs tracking-widest uppercase block mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Sharma"
                  className="w-full bg-cream/20 border border-dark/20 text-dark placeholder:text-dark/40 font-sans text-sm px-4 py-3 outline-none focus:border-dark/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-dark/60 font-sans text-xs tracking-widest uppercase block mb-2">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full bg-cream/20 border border-dark/20 text-dark placeholder:text-dark/40 font-sans text-sm px-4 py-3 outline-none focus:border-dark/50 transition-colors"
              />
            </div>

            <div>
              <label className="text-dark/60 font-sans text-xs tracking-widest uppercase block mb-2">
                Interested In
              </label>
              <select className="w-full bg-cream/20 border border-dark/20 text-dark font-sans text-sm px-4 py-3 outline-none focus:border-dark/50 transition-colors appearance-none">
                <option value="">Select a project</option>
                <option>IQON West — Shankarpalli</option>
                <option>Urban Trilla Farms — Mokila</option>
                <option>Urban Trilla Apartments — Mokila</option>
                <option>Casa Billa — Shankarpalli</option>
              </select>
            </div>

            <div>
              <label className="text-dark/60 font-sans text-xs tracking-widest uppercase block mb-2">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="I'd like to schedule a site visit..."
                className="w-full bg-cream/20 border border-dark/20 text-dark placeholder:text-dark/40 font-sans text-sm px-4 py-3 outline-none focus:border-dark/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-gold font-sans text-xs tracking-[0.18em] uppercase py-4 hover:bg-ink transition-colors duration-300"
            >
              Book a Site Visit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
