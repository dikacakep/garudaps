"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Trophy, Crown, AlertTriangle,  Sparkles} from "lucide-react";

// INTERFACE
interface Player {
  rank: number;
  name: string;
  wl: string;
  dl: string;
  bgl: string;
  ggl: string;
  totalWL: string;
}

interface ApiResponse {
  success: boolean;
  data: Player[];
}

const listContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      },
    },
};

const listItemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
};

export default function LeaderboardSection() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchLeaderboard = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/leaderboard");
      if (!res.ok) throw new Error("Failed");
      const json: ApiResponse = await res.json();

      if (json.success && Array.isArray(json.data)) {
        setPlayers(json.data);
      } else {
        setPlayers([]); 
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const topThree = [players[0], players[1], players[2]];
  const restPlayers = players.slice(3, 10); 

  return (
    <section id="leaderboard" className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container relative z-10 px-2 md:px-4 mx-auto max-w-6xl">
        
        {/* --- HEADER  --- */}
        <div className="text-center mb-40 md:mb-28 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-50px" }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          >
            <Trophy className="w-3 h-3" />
            Hall of Fame
          </motion.div>
          
          <motion.h2 
             initial={{ opacity: 0, y: 30 }} 
             whileInView={{ opacity: 1, y: 0 }} 
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
             className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter"
          >
            Top <span className="animate-gradient-text bg-clip-text text-transparent bg-linear-to-r from-orange-400 via-yellow-200 to-yellow-500 bg-300%">Richest</span> Players
          </motion.h2>
        </div>

        {/* --- STATE HANDLING --- */}
        {error && !loading && (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 mx-4">
             <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-4" />
             <p className="text-white/60 mb-4">Gagal memuat data leaderboard.</p>
             <button onClick={fetchLeaderboard} className="text-orange-400 underline">Coba Lagi</button>
          </div>
        )}

        {loading && (
           <div className="flex items-end gap-1 h-64 md:h-80 mb-12 w-full justify-center px-4">
              <div className="flex-1 h-32 md:h-48 bg-white/5 rounded-t-[30px] animate-pulse" />
              <div className="flex-1 h-48 md:h-72 bg-white/5 rounded-t-[30px] animate-pulse mx-1" />
              <div className="flex-1 h-24 md:h-40 bg-white/5 rounded-t-[30px] animate-pulse" />
           </div>
        )}

        {!loading && !error && players.length > 0 && (
          <>
            {/* PODIUM  */}
            <div className="flex justify-center items-end w-full max-w-4xl mx-auto mb-16 md:mb-24 relative z-10 px-1 md:px-0">
              
              {/* RANK 2 */}
              <PodiumCard 
                player={topThree[1]} 
                rank={2} 
                color="from-slate-300 to-slate-600"
                accentColor="bg-slate-200"
                height="h-40 md:h-[22rem]" 
                delay={0.2} 
              />

              {/* RANK 1  */}
              <div className="relative z-20 flex-1 flex justify-center mx-1 md:mx-4">
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 md:w-40 h-75 md:h-125 bg-yellow-500/20 blur-2xl md:blur-[80px] -z-10 pointer-events-none" />
                 
                 <PodiumCard 
                    player={topThree[0]} 
                    rank={1} 
                    color="from-yellow-300 via-amber-500 to-orange-700"
                    accentColor="bg-yellow-400"
                    height="h-52 md:h-[28rem]" 
                    isFirst
                    delay={0} 
                 />
              </div>

              {/* RANK 3 */}
              <PodiumCard 
                player={topThree[2]} 
                rank={3} 
                color="from-orange-700 to-amber-900"
                accentColor="bg-orange-400"
                height="h-32 md:h-[18rem]" 
                delay={0.3} 
              />
            </div>

            {/* LIST RANK 4-10*/}
            <motion.div 
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }} 
                className="max-w-3xl mx-auto space-y-2 md:space-y-3 relative z-20 px-2 md:px-0"
            >
               {restPlayers.map((player) => (
                 <motion.div 
                    key={player.rank} 
                    variants={listItemVariants} 
                    className="group relative flex items-center justify-between p-3 md:p-5 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 backdrop-blur-sm transition-colors duration-300"
                 >
                    <div className="flex items-center gap-3 md:gap-8">
                       <div className="w-6 md:w-10 text-center font-black text-white/30 italic text-sm md:text-xl group-hover:text-orange-500 transition-colors">
                         #{player.rank}
                       </div>
                       <span className="font-bold text-white text-[11px] md:text-lg tracking-wide group-hover:text-orange-400 transition-colors truncate max-w-25 md:max-w-xs">
                          {player.name}
                       </span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 md:gap-3 bg-black/40 px-2 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/5">
                       <Image 
                          src="/images/icons/wls.png" 
                          alt="WLS"
                          width={16} 
                          height={16}
                          className="w-3 h-3 md:w-6 md:h-6 object-contain"
                       />
                       <span className="font-mono font-bold text-cyan-100 text-[10px] md:text-lg uppercase">
                          {player.totalWL}
                       </span>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PodiumCard({ player, rank, color, height, isFirst = false, delay }: any) {
  if (!player) return <div className={`flex-1 ${height}`} />;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, type: "spring", bounce: 0.3 }}
      
      className={`relative flex-1 ${height} flex flex-col items-center justify-end pb-0 group min-w-0`}
    >
       {/* Crown Rank 1 */}
       {isFirst && (
         <>
            <motion.div 
               animate={{ y: [-3, 3, -3] }} 
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-12 md:-top-28 z-30 w-full flex justify-center"
            >
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-20 md:h-20 bg-yellow-400/50 blur-[20px]" />
               <Crown className="w-8 h-8 md:w-20 md:h-20 text-yellow-300 fill-yellow-400 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]" />
            </motion.div>
            <Sparkles className="absolute -top-4 md:-top-10 w-3 h-3 md:w-6 md:h-6 text-yellow-200 animate-pulse opacity-60" />
         </>
       )}

       {/* Player Text Info */}
       <div className="text-center mb-2 md:mb-6 px-0.5 w-full relative z-20 flex flex-col items-center">
         <div className={`mb-1 md:mb-3 w-5 h-5 md:w-14 md:h-14 rounded-full flex items-center justify-center text-black font-black text-[9px] md:text-2xl border md:border-4 border-[#0a0a0a] shadow-xl ${isFirst ? 'bg-yellow-400 scale-110' : 'bg-slate-200'}`}>
            #{rank}
         </div>

         <h3 className={`font-black text-[9px] md:text-2xl truncate drop-shadow-md mb-0.5 max-w-full w-full tracking-tight px-1 ${isFirst ? 'text-white' : 'text-white/80'}`}>
            {player.name}
         </h3>

         <div className={`inline-flex items-center gap-1 md:gap-2 px-1.5 py-0.5 md:px-4 md:py-1 rounded-full border shadow-lg ${isFirst ? 'bg-yellow-950/40 border-yellow-500/50' : 'bg-black/40 border-white/10'}`}>
            <Image 
                src="/images/icons/wls.png" 
                alt="WLS"
                width={14} height={14}
                className="w-2.5 h-2.5 md:w-5 md:h-5 object-contain"
            />
            <span className={`font-bold font-mono text-[8px] md:text-sm uppercase ${isFirst ? 'text-yellow-200' : 'text-cyan-100'}`}>
                {player.totalWL}
            </span>
         </div>
       </div>

       {/* Podium Pillar */}
       <div className={`w-full flex-1 rounded-t-[20px] md:rounded-t-[30px] bg-linear-to-b ${color} relative overflow-hidden shadow-2xl`}>
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-linear-to-tr from-white/20 via-transparent to-black/40 opacity-50" />
          
          {isFirst && (
             <div className="absolute inset-0 border-t border-x border-yellow-400/50 rounded-t-[20px] md:rounded-t-[30px]" />
          )}

          <div className="absolute bottom-0 inset-x-0 h-12 md:h-32 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
       </div>
    </motion.div>
  )
}