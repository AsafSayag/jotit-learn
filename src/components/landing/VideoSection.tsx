import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-16"
        >
          ראו את המערכת בפעולה
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hero-section aspect-video flex items-center justify-center group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center shadow-2xl relative z-10"
            >
              <Play className="w-10 h-10 text-accent-foreground mr-[-3px]" />
            </motion.div>
            <p className="absolute bottom-8 text-hero-foreground/60 text-sm">לחצו לצפייה בסרטון ההדגמה</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
