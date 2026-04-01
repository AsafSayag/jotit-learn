import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-classroom.jpg";
import jotitLogo from "@/assets/jotit-logo.png";
import classroomOld from "@/assets/classroom-old.jpg";
import classroomModern from "@/assets/classroom-modern.jpg";

const progressBars = [
  { title: "נוחות ולמידה עדכנית", value: 95 },
  { title: "מעקב ובקרה", value: 88 },
  { title: "שיפור ביצועים ושיפור מוטיבציה אצל התלמידים", value: 82 },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const comparisonRef = useRef(null);
  const isInView = useInView(comparisonRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: comparisonRef,
    offset: ["start end", "center center"],
  });

  const oldImageOpacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0]);
  const barsOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const barsY = useTransform(scrollYProgress, [0.4, 0.7], [40, 0]);

  return (
    <section ref={sectionRef} className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="כיתת לימוד דיגיטלית" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 hero-section" style={{ opacity: 0.85 }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6 flex justify-center"
          >
            <img src={jotitLogo} alt="JOTIT" className="h-16 md:h-20 w-auto glow-effect" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-hero-foreground leading-tight mb-6"
          >
            העתיד של הלמידה כבר כאן
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-hero-foreground/75 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            מערכת חכמה לניהול לימודים מלא דרך הטאבלט — סדר, שליטה ושיפור ביצועים בבתי ספר
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#video"
              className="gradient-primary text-accent-foreground px-8 py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:scale-105 transform"
            >
              צפו איך זה עובד
            </a>
            <a
              href="#contact"
              className="glass-card text-hero-foreground px-8 py-4 rounded-xl text-lg font-bold hover:bg-hero-foreground/10 transition-all"
            >
              רוצים לדעת עוד?
            </a>
          </motion.div>
        </div>

        {/* Split classroom comparison */}
        <div
          ref={comparisonRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Old classroom — fades out, replaced by progress bars */}
          <div className="relative min-h-[240px]">
            <motion.div style={{ opacity: oldImageOpacity }} className="absolute inset-0">
              <div className="glass-card rounded-2xl p-2 overflow-hidden h-full">
                <div className="relative overflow-hidden rounded-xl h-full">
                  <img
                    src={classroomOld}
                    alt="כיתה מהעבר"
                    className="w-full aspect-video object-cover grayscale"
                  />
                </div>
              </div>
              <p className="text-center text-hero-foreground/60 text-sm mt-3 font-medium">
                כיתה מהעבר
              </p>
            </motion.div>

            {/* Progress bars that appear */}
            <motion.div
              style={{ opacity: barsOpacity, y: barsY }}
              className="flex flex-col gap-5 justify-center h-full glass-card rounded-2xl p-6"
            >
              {progressBars.map((bar, i) => (
                <div key={i}>
                  <p className="text-hero-foreground text-sm font-bold mb-2">{bar.title}</p>
                  <div className="w-full h-3 rounded-full bg-hero-foreground/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${bar.value}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.6 + i * 0.2, ease: "easeInOut" }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, hsl(var(--gradient-start)), hsl(var(--gradient-end)))`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Modern classroom */}
          <div className="relative group">
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={classroomModern}
                  alt="כיתה של 2025"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
            <p className="text-center text-hero-foreground/60 text-sm mt-3 font-medium">
              כיתה של 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
