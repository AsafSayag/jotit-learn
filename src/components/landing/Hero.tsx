import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain } from "lucide-react";
import jotitLogo from "@/assets/jotit-logo.png";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 0.8,
  duration: 1.2 + Math.random() * 0.8,
}));

const GoogleClassroomIcon = () => (
  <svg viewBox="0 0 48 48" className="w-8 h-8 md:w-10 md:h-10">
    <rect width="48" height="48" rx="8" fill="#0F9D58" />
    <rect x="6" y="10" width="36" height="28" rx="3" fill="#57BB8A" />
    <circle cx="24" cy="21" r="4" fill="#F4F4F4" />
    <path d="M16 31c0-3.3 3.6-6 8-6s8 2.7 8 6" fill="#F4F4F4" />
    <circle cx="33" cy="20" r="2.5" fill="#F4F4F4" />
    <path d="M29 28c1.2-0.8 2.8-1.3 4.5-1.3 1.2 0 2.3 0.2 3.3 0.7" stroke="#F4F4F4" strokeWidth="1.5" fill="none" />
    <circle cx="15" cy="20" r="2.5" fill="#F4F4F4" />
    <path d="M19 28c-1.2-0.8-2.8-1.3-4.5-1.3-1.2 0-2.3 0.2-3.3 0.7" stroke="#F4F4F4" strokeWidth="1.5" fill="none" />
  </svg>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const animRef = useRef(null);
  const isInView = useInView(animRef, { once: true, margin: "-40px" });
  const [phase, setPhase] = useState<"book" | "morphing" | "tablet">("book");

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase("morphing"), 4800);
    const t2 = setTimeout(() => setPhase("tablet"), 6400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, hsl(var(--glow) / 0.4), transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 flex justify-center"
          >
            <img src={jotitLogo} alt="JOTIT" className="h-16 md:h-20 w-auto glow-effect" />
          </motion.div>

          {/* Google Classroom icon - right side, between logo and headline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute -right-4 md:-right-16 lg:-right-28 top-4 md:top-6 flex flex-col items-center gap-1"
          >
            <GoogleClassroomIcon />
            <span className="text-[10px] md:text-xs text-hero-foreground/60 font-medium">Google Classroom</span>
          </motion.div>

          {/* AI icon - left side, between headline and subheading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -left-4 md:-left-16 lg:-left-28 top-[45%] md:top-[40%] flex flex-col items-center gap-1"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1B3A5C] flex items-center justify-center">
              <Brain className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-[10px] md:text-xs text-hero-foreground/60 font-medium">AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-rubik text-hero-foreground leading-tight mb-6 tracking-tight"
          >
            מערכת לימוד דיגיטלית מבוססת AI בשילוב כתב יד
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-hero-foreground/65 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            המערכת המתקדמת ביותר ללמידה דיגיטלית - סדר, שליטה, ולמידה אפקטיבית ואישית לכל תלמיד
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#video"
              className="bg-[#1B3A5C] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors"
            >
              צפו איך זה עובד
            </a>
            <a
              href="#contact"
              className="bg-[#1B3A5C] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors"
            >
              רוצים לדעת עוד?
            </a>
          </motion.div>
        </div>

        {/* Book → Tablet animation */}
        <div ref={animRef} className="mt-14 md:mt-20 flex justify-center items-center">
          <div className="relative w-[220px] h-[280px] sm:w-[260px] sm:h-[340px] md:w-[320px] md:h-[420px]">
            {/* Particles during morph */}
            {(phase === "morphing" || phase === "tablet") && particles.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={{
                  opacity: phase === "morphing" ? [0, 1, 0] : 0,
                  x: p.x,
                  y: p.y,
                  scale: phase === "morphing" ? [0, 1.2, 0] : 0,
                }}
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  ease: "easeOut",
                }}
                className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  background: `hsl(var(--glow))`,
                  boxShadow: `0 0 ${p.size * 2}px hsl(var(--glow) / 0.6)`,
                }}
              />
            ))}

            {/* Glow ring during morph */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: phase === "morphing" ? 0.4 : phase === "tablet" ? 0.15 : 0,
                scale: phase === "morphing" ? 1.3 : phase === "tablet" ? 1.1 : 0.6,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, hsl(var(--glow) / 0.3), transparent 70%)`,
              }}
            />

            {/* Book */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: phase === "book" && isInView ? 1 : 0,
                scale: phase === "book" && isInView ? 1 : 0.85,
                rotateY: phase === "morphing" ? 40 : 0,
              }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <div
                className="w-[80%] h-[85%] rounded-sm shadow-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, hsl(25 35% 32%), hsl(20 40% 24%))",
                  border: "2px solid hsl(25 30% 20%)",
                  boxShadow: "6px 6px 20px hsl(220 50% 5% / 0.5), inset 0 1px 0 hsl(25 30% 45%)",
                }}
              >
                <div
                  className="absolute right-0 top-0 bottom-0 w-4 md:w-5"
                  style={{ background: "linear-gradient(90deg, transparent, hsl(25 35% 18% / 0.5))" }}
                />
                <div className="absolute left-0 top-2 bottom-2 w-2 md:w-3 flex flex-col gap-[1px]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex-1" style={{ background: "hsl(40 30% 90%)" }} />
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center h-full px-6 py-4 mr-2">
                  <div className="w-[50%] h-[2px] rounded-full mb-4 md:mb-6" style={{ background: "hsl(35 50% 60%)" }} />
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="text-base md:text-xl lg:text-2xl font-black" style={{ color: "hsl(40 50% 80%)" }}>📖</div>
                    <div className="text-base md:text-xl lg:text-2xl font-black" style={{ color: "hsl(40 50% 80%)" }}>ספר לימוד</div>
                    <div className="text-[10px] md:text-xs font-medium" style={{ color: "hsl(35 30% 60%)" }}>מהדורה ישנה</div>
                  </div>
                  <div className="w-[50%] h-[2px] rounded-full mt-4 md:mt-6" style={{ background: "hsl(35 50% 60%)" }} />
                  <div className="mt-4 md:mt-6 space-y-2 w-[65%]">
                    {[80, 60, 70].map((w, i) => (
                      <div key={i} className="h-1 md:h-1.5 rounded-full mx-auto" style={{ width: `${w}%`, background: "hsl(35 25% 50% / 0.4)" }} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tablet */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: -30 }}
              animate={{
                opacity: phase === "tablet" ? 1 : phase === "morphing" ? 0.3 : 0,
                scale: phase === "tablet" ? 1 : 0.85,
                rotateY: phase === "tablet" ? 0 : -30,
              }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ perspective: "800px" }}
            >
              <div
                className="w-[82%] h-[88%] rounded-2xl md:rounded-3xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, hsl(220 20% 18%), hsl(220 25% 12%))",
                  border: "2px solid hsl(220 15% 30%)",
                  boxShadow: phase === "tablet"
                    ? "0 0 60px hsl(var(--glow) / 0.2), 0 25px 50px hsl(220 50% 5% / 0.5), inset 0 1px 0 hsl(220 15% 35%)"
                    : "none",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: phase === "tablet" ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-[88%] h-[90%] rounded-lg md:rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, hsl(220 55% 12%), hsl(220 60% 18%))",
                    boxShadow: "inset 0 0 30px hsl(var(--glow) / 0.08)",
                  }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 40% 30%, hsl(var(--glow) / 0.12), transparent 60%)",
                    }}
                  />
                  <motion.img
                    src={jotitLogo}
                    alt="JOTIT"
                    className="w-[55%] md:w-[50%] h-auto relative z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: phase === "tablet" ? 1 : 0,
                      scale: phase === "tablet" ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    style={{
                      filter: phase === "tablet" ? "drop-shadow(0 0 16px hsl(var(--glow) / 0.5))" : "none",
                    }}
                  />
                </motion.div>
                <div
                  className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full"
                  style={{ background: "hsl(220 15% 30%)" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
