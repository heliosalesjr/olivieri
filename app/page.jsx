import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MyNavbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <Services />
      <WhoWeAre />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
