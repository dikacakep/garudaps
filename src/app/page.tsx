import Hero from "@/components/sections/Hero";
import TutorialSection from "@/components/sections/Tutorial/TutorialSection";
import Features from "@/components/sections/Features"; 
import About from "@/components/sections/About";
import Community from "@/components/sections/Community"; 
import Teams from "@/components/sections/Teams";
import FloatingButtons from "@/components/effects/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Hero />
      <TutorialSection />
      <Features />
      <About />
      <Community />
      <Teams />
      <FloatingButtons />
    </main>
  );
}