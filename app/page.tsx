import About from "@/components/landing/About";
import HeroSection from "@/components/landing/HeroSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
    </div>
  );
}
