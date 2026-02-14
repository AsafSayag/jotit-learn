import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, GraduationCap, MonitorSmartphone } from "lucide-react";

const steps = [
  { icon: Settings, num: "01", title: "התאמה לבית הספר", desc: "מתאימים את המערכת לצרכים הייחודיים של בית הספר" },
  { icon: GraduationCap, num: "02", title: "הטמעה והדרכה", desc: "צוות מקצועי מלווה את המורים והצוות" },
  { icon: MonitorSmartphone, num: "03", title: "מעבר ללמידה דיגיטלית", desc: "בית הספר עובר לעידן חדש של למידה" },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-20"
        >
          איך זה עובד?
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 right-0 left-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                  <step.icon className="w-9 h-9 text-accent-foreground" />
                </div>
                <span className="text-sm font-bold text-accent mb-2 block">{step.num}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
