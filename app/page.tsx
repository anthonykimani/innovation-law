

import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import News from "@/components/landing/News";
import PracticeAreas from "@/components/landing/PracticeAreas";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <PracticeAreas />
      <Blogs />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}
