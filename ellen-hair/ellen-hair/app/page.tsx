import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AwardsMarquee from "@/components/AwardsMarquee";
import Tradition from "@/components/Tradition";
import Pillars from "@/components/Pillars";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import UnitSelector from "@/components/UnitSelector";
import EditorialBreak from "@/components/EditorialBreak";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="w-full bg-bg-primary min-h-screen">
      <CustomCursor />
      <Header />
      <Hero />
      <AwardsMarquee />
      <Tradition />
      <Pillars />
      <Services />
      <Gallery />
      <Testimonials />
      <UnitSelector />
      <EditorialBreak />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
