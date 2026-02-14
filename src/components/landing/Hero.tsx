import { motion } from "framer-motion";
import { useState } from "react";
import heroImage from "@/assets/hero-classroom.jpg";
import jotitLogo from "@/assets/jotit-logo.png";
import classroomOld from "@/assets/classroom-old.jpg";
import classroomModern from "@/assets/classroom-modern.jpg";

const Hero = () => {
  const [oldHovered, setOldHovered] = useState(false);
  const [modernHovered, setModernHovered] = useState(false);

  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden pt-20">
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {/* Old classroom */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setOldHovered(true)}
            onMouseLeave={() => setOldHovered(false)}
            onClick={() => setOldHovered(!oldHovered)}
          >
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={classroomOld}
                  alt="כיתה מהעבר"
                  className={`w-full aspect-video object-cover transition-all duration-700 ${
                    oldHovered ? "grayscale brightness-75" : "grayscale-0"
                  }`}
                  style={oldHovered ? { filter: "grayscale(1) brightness(0.7) sepia(0.2)" } : {}}
                />
                {oldHovered && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                )}
              </div>
            </div>
            <p className="text-center text-hero-foreground/60 text-sm mt-3 font-medium">
              כיתה מהעבר
            </p>
          </div>

          {/* Modern classroom */}
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setModernHovered(true)}
            onMouseLeave={() => setModernHovered(false)}
            onClick={() => setModernHovered(!modernHovered)}
          >
            <div className="glass-card rounded-2xl p-2 overflow-hidden">
              <div className="relative overflow-hidden rounded-xl">
                <motion.img
                  src={classroomModern}
                  alt="כיתה של 2025"
                  className="w-full aspect-video object-cover transition-all duration-700"
                  style={modernHovered ? {
                    filter: "saturate(1.3) brightness(1.1)",
                    boxShadow: "inset 0 0 40px hsl(190 85% 45% / 0.2)"
                  } : {}}
                  animate={modernHovered ? { scale: 1.03 } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {modernHovered && (
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
                )}
              </div>
            </div>
            <p className="text-center text-hero-foreground/60 text-sm mt-3 font-medium">
              כיתה של 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
