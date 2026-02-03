import dynamic from "next/dynamic";

import Hero from "@/components/sections/Hero";
import LeaderboardSection from "@/components/sections/LeaderboardSection";



const TutorialSection = dynamic(() => import("@/components/sections/Tutorial/TutorialSection"), {
  loading: () => <div className="h-96 w-full bg-[#0a0a0a]" /> 
});

const Features = dynamic(() => import("@/components/sections/Features"));
const About = dynamic(() => import("@/components/sections/About"));
const Community = dynamic(() => import("@/components/sections/Community"));
const Teams = dynamic(() => import("@/components/sections/Teams"));

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
    </>
  );
}