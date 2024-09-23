import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyNavbar from "@/components/Navbar";
import NewNavbar from "@/components/NewNavbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import FloatingWhatsAppButton from "@/components/Whatzapp";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (
    <>
     
      <NewNavbar />
      <HeroSection />
      <Services />
      <WhoWeAre />
      <Partners />
      <Contact />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
