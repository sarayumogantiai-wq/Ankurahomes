import {
  Dumbbell,
  Waves,
  Trees,
  ShieldCheck,
  Zap,
  Users,
  Car,
  Wind,
  HeartPulse,
  PawPrint,
  Baby,
  Bike,
} from "lucide-react";

const amenities = [
  { icon: Waves, label: "Swimming Pool", desc: "Olympic-length pools with lounging decks" },
  { icon: Dumbbell, label: "Fitness Centre", desc: "Fully equipped gym & yoga studio" },
  { icon: Trees, label: "Landscaped Gardens", desc: "Curated green spaces and walking paths" },
  { icon: ShieldCheck, label: "24/7 Security", desc: "Multi-tier CCTV and access control" },
  { icon: Zap, label: "Power Backup", desc: "Uninterrupted supply for all homes" },
  { icon: Users, label: "Clubhouse", desc: "Social architecture across four levels" },
  { icon: Car, label: "Ample Parking", desc: "Covered and visitor parking bays" },
  { icon: Wind, label: "Treated Water", desc: "24-hour pure water distribution" },
  { icon: HeartPulse, label: "Wellness Zone", desc: "Meditation gardens and spa facilities" },
  { icon: PawPrint, label: "Pet Area", desc: "Dedicated pet-friendly open spaces" },
  { icon: Baby, label: "Children's Play", desc: "Safe, supervised play zones" },
  { icon: Bike, label: "Cycling Track", desc: "Jogging & cycling circuits" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-beige py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-4 flex items-center gap-4">
            <span className="w-10 h-px bg-gold inline-block" />
            World-Class Living
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.1]">
            Every detail, <em className="text-gold font-normal">considered</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {amenities.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group bg-cream border border-beige p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-ink text-base font-medium mb-1">
                {label}
              </p>
              <p className="text-stone font-sans text-xs leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
