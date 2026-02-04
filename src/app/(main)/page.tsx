import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// --- LOADER COMPONENT ---
const SectionLoader = ({ height = "h-96" }: { height?: string }) => (
  <div className={`w-full ${height} bg-[#0a0a0a] flex items-center justify-center`}>
    {/* Optional: Pulse effect ringan */}
    <div className="w-full h-full opacity-[0.02] bg-white animate-pulse" />
  </div>
)


const LeaderboardSection = dynamic(() => import("@/components/sections/LeaderboardSection"), {
  loading: () => <SectionLoader height="h-[800px]" />
});

const TutorialSection = dynamic(() => import("@/components/sections/Tutorial/TutorialSection"), {
  loading: () => <SectionLoader height="h-[800px]" />
});

const Features = dynamic(() => import("@/components/sections/Features"), {
  loading: () => <SectionLoader height="h-[600px]" />
});

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <SectionLoader height="h-[600px]" />
});

const Community = dynamic(() => import("@/components/sections/Community"), {
  loading: () => <SectionLoader height="h-[400px]" />
});

const Teams = dynamic(() => import("@/components/sections/Teams"), {
  loading: () => <SectionLoader height="h-[600px]" />
});

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