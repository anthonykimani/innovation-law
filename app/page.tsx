

import About from "@/components/landing/About";
import Blogs from "@/components/landing/Blogs";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Team  from "@/components/landing/Team";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Blogs />
      <Team />
      <Footer />
    </div>
  );
}
