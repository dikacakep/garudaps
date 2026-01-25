import Hero from "@/components/sections/Hero";
import TutorialSection from "@/components/sections/Tutorial/TutorialSection";
import Features from "@/components/sections/Features"; 
import About from "@/components/sections/About";
import Community from "@/components/sections/Community"; 
import Teams from "@/components/sections/Teams";
import FloatingButtons from "@/components/effects/FloatingButtons";
import LeaderboardSection from "@/components/sections/LeaderboardSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LeaderboardSection />
      <TutorialSection />
      <Features />
      <About />
      <Community />
      <Teams />
      <FloatingButtons />
    </>
  );
}