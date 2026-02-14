import { motion } from "framer-motion";
import heroImage from "@/assets/hero-classroom.jpg";

const Hero = () => {
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
            className="mb-6"
          >
            <span className="text-4xl font-black text-hero-foreground tracking-widest glow-effect">
              JOTIT
            </span>
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

        {/* Floating tablet mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card rounded-2xl p-2 max-w-2xl"
            >
              <img
                src={heroImage}
                alt="JOTIT בפעולה"
                className="rounded-xl w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
