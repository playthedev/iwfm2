import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionGoalsValues } from "@/components/VisionGoalsValues";
import { Services } from "@/components/Services";
import { SpecializedServices } from "@/components/SpecializedServices";
import { Process } from "@/components/Process";
import { Resources } from "@/components/Resources";
import { Organization } from "@/components/Organization";
import { TechQuality } from "@/components/TechQuality";
import { Advantages } from "@/components/Advantages";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <VisionGoalsValues />
        <Services />
        <SpecializedServices />
        <Process />
        <Resources />
        <Organization />
        <TechQuality />
        <Advantages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
