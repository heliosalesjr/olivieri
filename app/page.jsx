import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import NewNavbar from "@/components/NewNavbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import FloatingWhatsAppButton from "@/components/Whatzapp";
import WhoWeAre from "@/components/WhoWeAre";
import Believe from "@/components/Believe";


export default function Home() {
  return (
    <>
     
      <NewNavbar />
      <HeroSection />
      <Services />
      <WhoWeAre />
      <Partners />
      <Believe />
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
