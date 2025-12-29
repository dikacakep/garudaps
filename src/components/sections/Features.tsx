import { Users, Sword, Clock, MessageSquare, Shield, Zap, Globe, Trophy } from "lucide-react"

const FEATURE_ITEMS = [
  {
    title: "Active Community",
    description: "Join over 22,000 members in our thriving community where creativity and collaboration come to life.",
    icon: Users,
  },
  {
    title: "Cool Features",
    description:
      "Unique gameplay mechanics including surgery, cooking, fishing, ship building, and challenging parkour worlds.",
    icon: Sword,
  },
  {
    title: "24/7 Uptime",
    description:
      "Reliable server hosting with minimal downtime, so you can play whenever you want without interruption.",
    icon: Clock,
  },
  {
    title: "Discord Integration",
    description: "Seamless integration with our Discord for community events, support, and staying connected.",
    icon: MessageSquare,
  },
  {
    title: "Strong Security",
    description: "Advanced protection systems to keep your account and progress safe from any threats.",
    icon: Shield,
  },
  {
    title: "Lag Free",
    description: "Optimized server performance ensuring a smooth experience for players across the globe.",
    icon: Zap,
  },
  {
    title: "Global Reach",
    description: "Connect with players from all over the world in a stable and inclusive environment.",
    icon: Globe,
  },
  {
    title: "Daily Events",
    description: "Exciting daily events and competitions with amazing rewards for the best players.",
    icon: Trophy,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-[#0a0a0a]">
      
      {/* Gradient Overlay (Seamless Blend) - TETAP ADA */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0a0a0a] z-20 pointer-events-none -translate-y-full" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

      {/* Background decoration (Optional glow behind glass cards) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 mx-auto mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 inline-block relative text-white">
          <span className="animate-gradient-text underline decoration-[#ff5c00] decoration-4 underline-offset-8">
            Why
          </span>{" "}
          Choose GPS?
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
          Check out the awesome features that make our server the best choice!
        </p>
      </div>

      <div className="relative flex w-full z-10">
        {/* Tambahkan mask-image agar carousel terlihat memudar di kiri & kanan */}
        <div className="flex animate-scroll gap-6 py-4 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {[...FEATURE_ITEMS, ...FEATURE_ITEMS].map((item, index) => (
            <div
              key={index}
              // --- STYLE GLASSMORPHISM DISINI ---
              className="flex-shrink-0 w-[350px] 
                         bg-white/5                        
                         backdrop-blur-xl                  
                         border border-white/10            
                         shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] 
                         p-8 rounded-2xl 
                         hover:bg-white/10                 
                         hover:border-[#ff5c00]/50         
                         hover:-translate-y-2              
                         transition-all duration-300 group"
            >
              <item.icon className="w-10 h-10 text-[#ff5c00] mb-6 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,92,0,0.5)] transition-all duration-300" />
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff5c00] transition-colors">{item.title}</h3>
              <p className="text-white/60 whitespace-normal leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}