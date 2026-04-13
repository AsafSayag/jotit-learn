import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 section-pastel-mint relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 rounded-full bg-accent blur-3xl -top-20 -left-20" />
        <div className="absolute w-96 h-96 rounded-full bg-primary blur-3xl -bottom-20 -right-20" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-foreground mb-6"
        >
          מוכנים להביא את העתיד לבית הספר שלכם?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
        >
          הצטרפו למאות בתי ספר שכבר עברו ללמידה חכמה
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-[#1B3A5C] text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors"
          >
            קביעת פגישה
          </a>
          <a
            href="#contact"
            className="bg-[#1B3A5C] text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-[#152E4A] transition-colors"
          >
            השאירו פרטים
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
