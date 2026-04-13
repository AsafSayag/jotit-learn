import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ClipboardCheck, Eye, Zap } from "lucide-react";

const stats = [
  { icon: ClipboardCheck, value: 65, suffix: "%", label: "עלייה בהגשת שיעורי בית" },
  { icon: Eye, value: 70, suffix: "%", label: "מורים מדווחים על מעקב קל" },
  { icon: Zap, value: 85, suffix: "%", label: "עלייה במוטיבציה של תלמידים" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
};

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 hero-section" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-hero-foreground mb-16"
        >
          התוצאות מדברות בעד עצמן
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center shadow-md"
            >
              <stat.icon className="w-8 h-8 text-glow mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-black text-hero-foreground mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-hero-foreground/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
