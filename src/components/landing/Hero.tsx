import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Brain } from "lucide-react";
import jotitLogo from "@/assets/jotit-logo.png";
import tabletApp from "@/assets/tablet-app.png";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 0.8,
  duration: 1.2 + Math.random() * 0.8,
}));

const GoogleClassroomIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12 md:w-16 md:h-16">
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

const IconFloat = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    animate={{
      y: [0, -6, 0],
      filter: [
        "drop-shadow(0 0 4px hsl(190 85% 45% / 0.2))",
        "drop-shadow(0 0 14px hsl(190 85% 45% / 0.5))",
        "drop-shadow(0 0 4px hsl(190 85% 45% / 0.2))",
      ],
    }}
    transition={{
      y: { duration: 3, repeat: Infinity, ease: "easeInOut" as const, delay },
      filter: { duration: 2.5, repeat: Infinity, ease: "easeInOut" as const, delay },
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const sectionRef = useRef(null);
  const animRef = useRef(null);
  const isInView = useInView(animRef, { once: true, margin: "-40px" });
  const [phase, setPhase] = useState<"book" | "morphing" | "tablet">("book");

  useEffect(() => {
    if (!isInView) return;
    const t1 = setTimeout(() => setPhase("morphing"), 3800);
    const t2 = setTimeout(() => setPhase("tablet"), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [isInView]);

  return (
    <section ref={sectionRef} className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
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

          {/* Google Classroom icon - right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute -right-4 md:-right-20 lg:-right-32 top-4 md:top-6 flex flex-col items-center gap-1.5"
          >
            <IconFloat>
              <GoogleClassroomIcon />
            </IconFloat>
            <span className="text-[10px] md:text-xs text-hero-foreground/60 font-medium">Google Classroom</span>
          </motion.div>

          {/* AI icon - left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -left-4 md:-left-20 lg:-left-32 top-[45%] md:top-[40%] flex flex-col items-center gap-1.5"
          >
            <IconFloat delay={0.5}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-[#1B3A5C] flex items-center justify-center">
                <Brain className="w-7 h-7 md:w-9 md:h-9 text-white" />
              </div>
            </IconFloat>
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
            <a href="#video" className="bg-[#1B3A5C] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors">
              צפו איך זה עובד
            </a>
            <a href="#contact" className="bg-[#1B3A5C] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors">
              רוצים לדעת עוד?
            </a>
          </motion.div>
        </div>

        {/* Book → Tablet animation */}
        <div ref={animRef} className="mt-14 md:mt-20 flex justify-center items-center">
          <div className="relative w-[280px] h-[200px] sm:w-[360px] sm:h-[260px] md:w-[480px] md:h-[340px]">
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
                transition={{ duration: p.duration, delay: p.delay, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                style={{
                  width: p.size,
                  height: p.size,
                  background: `hsl(var(--glow))`,
                  boxShadow: `0 0 ${p.size * 2}px hsl(var(--glow) / 0.6)`,
                }}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{
                opacity: phase === "morphing" ? 0.4 : phase === "tablet" ? 0.15 : 0,
                scale: phase === "morphing" ? 1.3 : phase === "tablet" ? 1.1 : 0.6,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: `radial-gradient(ellipse at center, hsl(var(--glow) / 0.3), transparent 70%)` }}
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
                className="w-[45%] h-[90%] rounded-sm shadow-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, hsl(25 35% 32%), hsl(20 40% 24%))",
                  border: "2px solid hsl(25 30% 20%)",
                  boxShadow: "6px 6px 20px hsl(220 50% 5% / 0.5), inset 0 1px 0 hsl(25 30% 45%)",
                }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-4 md:w-5" style={{ background: "linear-gradient(90deg, transparent, hsl(25 35% 18% / 0.5))" }} />
                <div className="absolute left-0 top-2 bottom-2 w-2 md:w-3 flex flex-col gap-[1px]">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="flex-1" style={{ background: "hsl(40 30% 90%)" }} />
                  ))}
                </div>
                <div className="flex flex-col items-center justify-center h-full px-4 py-4 mr-2">
                  <div className="w-[50%] h-[2px] rounded-full mb-3 md:mb-5" style={{ background: "hsl(35 50% 60%)" }} />
                  <div className="text-center space-y-1 md:space-y-2">
                    <div className="text-base md:text-xl font-black" style={{ color: "hsl(40 50% 80%)" }}>📖</div>
                    <div className="text-sm md:text-lg font-black" style={{ color: "hsl(40 50% 80%)" }}>ספר לימוד</div>
                    <div className="text-[9px] md:text-xs font-medium" style={{ color: "hsl(35 30% 60%)" }}>מהדורה ישנה</div>
                  </div>
                  <div className="w-[50%] h-[2px] rounded-full mt-3 md:mt-5" style={{ background: "hsl(35 50% 60%)" }} />
                </div>
              </div>
            </motion.div>

            {/* Tablet - uploaded image */}
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
              <img
                src={tabletApp}
                alt="JOTIT App on tablet"
                className="w-full h-full object-contain rounded-2xl md:rounded-3xl"
                style={{
                  filter: phase === "tablet"
                    ? "drop-shadow(0 25px 50px hsl(220 50% 5% / 0.4))"
                    : "none",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
