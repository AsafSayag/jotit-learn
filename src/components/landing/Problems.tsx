import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookX, MonitorOff, Users, BriefcaseBusiness } from "lucide-react";

const painPoints = [
  { icon: BookX, title: "ספרים שנשכחים או נהרסים", desc: "תלמידים שוכחים ספרים בבית או שהם נהרסים לאורך השנה" },
  { icon: MonitorOff, title: "חוסר שליטה במסכים", desc: "אין למורים כלים לנהל את כל מה שהתלמידים עושים בזמן שיעור ובמהלך למידה מהבית (שיעורי בית)" },
  { icon: Users, title: "קושי במעקב תלמידים", desc: "מעקב אחרי ביצועים והתקדמות דורש זמן ומאמץ רב" },
  { icon: BriefcaseBusiness, title: "עומס על מורים", desc: "מורים מבלים יותר זמן בניהול ופחות בהוראה" },
];

const Problems = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-4"
        >
          האתגרים של מערכת החינוך בעידן הישן
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-20 text-lg"
        >
          בעיות שכל בית ספר מכיר
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="card-elevated flex gap-5 p-7 rounded-2xl group"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1.5">{point.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;