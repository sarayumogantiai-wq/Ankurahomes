const footerLinks = {
  Projects: [
    "IQON West",
    "Urban Trilla Farms",
    "Urban Trilla Apartments",
    "Casa Billa",
    "Fortune Greens",
  ],
  Company: ["About Us", "Our Story", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Use", "RERA Disclosures", "Site Map"],
};

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        {/* Top row */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-serif text-cream text-xl mb-4">
              <span className="font-semibold">ANKURA</span>
              <span className="font-light italic ml-1.5">Homes</span>
            </p>
            <p className="font-sans text-sm leading-relaxed mb-6 text-cream/40">
              Premium luxury real estate developer in Hyderabad. Crafting homes
              that honour the way you live.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {["FB", "IG", "YT", "LI"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 border border-cream/20 flex items-center justify-center text-[10px] font-sans text-cream/40 hover:border-gold/60 hover:text-gold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-cream/70 font-sans text-xs tracking-[0.2em] uppercase mb-5">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-cream/40 hover:text-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/30">
            © {new Date().getFullYear()} Ankura Homes Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-sans text-xs text-cream/20">
            RERA Registered · Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </footer>
  );
}
