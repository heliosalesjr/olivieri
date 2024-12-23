import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import NewNavbar from "@/components/NewNavbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import FloatingWhatsAppButton from "@/components/Whatzapp";
import WhoWeAre from "@/components/WhoWeAre";
import Believe from "@/components/Believe";
import ServicesAlt from "@/components/ServicesAlt";
import NewPartners from "@/components/NewPartners";
import AnotherHero from "@/components/AnotherHero";
import HeyHero from "@/components/HeyHero";
import Services2 from "@/components/Services2";
import FeaturesSection from "@/components/Content";
import NewWhoWeAre from "@/components/NewWhoWeAre";

export default function Home() {
  return (
    <>
      <NewNavbar />
      <HeyHero />
      
      
      <Services2 />
      
      <NewWhoWeAre />
     
      <Believe />
      <NewPartners />
     
      
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
