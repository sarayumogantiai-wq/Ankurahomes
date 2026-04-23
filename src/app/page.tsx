import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Amenities from "@/components/Amenities";
import Locations from "@/components/Locations";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Amenities />
        <Locations />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
