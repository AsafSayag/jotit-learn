import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, DollarSign, Rocket } from "lucide-react";

const trustItems = [
  { icon: DollarSign, title: "$10,000,000+", desc: "מימון שגויס עד כה" },
  { icon: Globe, title: "פעילות במספר מדינות", desc: "נוכחות עולמית הולכת וגדלה" },
  { icon: Rocket, title: "חדירה לשוק האמריקאי", desc: "שיתופי פעולה עם בתי ספר בארה\"ב" },
];

const GlobalTrust = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-20"
        >
          סטארטאפ חינוכי בצמיחה עולמית
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-elevated rounded-2xl p-8 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalTrust;