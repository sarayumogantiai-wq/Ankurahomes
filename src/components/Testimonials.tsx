const testimonials = [
  {
    quote:
      "We moved into our IQON West villa last year and every single day feels like a retreat. The attention to detail in the construction is something you notice only when you live here.",
    name: "Raghav & Priya Nair",
    project: "IQON West, Shankarpalli",
    since: "2024",
  },
  {
    quote:
      "Ankura delivered exactly on time and not a single corner was cut. The Urban Trilla community has already become home — not just a house.",
    name: "Srinivas Reddy",
    project: "Urban Trilla Farms, Mokila",
    since: "2023",
  },
  {
    quote:
      "I was sceptical about buying off-plan. The Ankura team walked me through every stage. Transparent, professional, and the final product exceeded expectations.",
    name: "Kavitha Manohar",
    project: "Casa Billa, Shankarpalli",
    since: "2023",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4 flex items-center gap-4">
            <span className="w-10 h-px bg-gold inline-block" />
            Resident Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink leading-[1.1]">
            500+ families <em className="text-gold font-normal">trust us</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-beige/60 border border-beige p-8 flex flex-col justify-between gap-8 hover:border-gold/30 transition-colors duration-300"
            >
              <div>
                <span className="font-serif text-5xl text-gold/40 leading-none block mb-4">
                  "
                </span>
                <p className="font-sans font-light text-stone text-sm leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-beige pt-6">
                <p className="font-serif text-ink text-base font-medium">
                  {t.name}
                </p>
                <p className="text-gold font-sans text-xs tracking-wide mt-1">
                  {t.project}
                </p>
                <p className="text-stone font-sans text-xs mt-0.5">
                  Resident since {t.since}
                </p>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
