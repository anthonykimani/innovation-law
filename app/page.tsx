import About from "@/components/landing/About";
import HeroSection from "@/components/landing/HeroSection";
import { Team } from "@/components/landing/Team";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <About />
      <Team />
    </div>
  );
}
