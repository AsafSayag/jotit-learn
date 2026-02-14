import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Tablet, BookOpen, ShieldCheck, WifiOff, LayoutList, MessageCircle } from "lucide-react";

const features = [
  { icon: Tablet, title: "ניהול לימודים מלא דרך טאבלט", desc: "כל מה שצריך במכשיר אחד" },
  { icon: BookOpen, title: "כל הספרים במערכת", desc: "ספרים דיגיטליים, מעודכנים ונגישים תמיד" },
  { icon: ShieldCheck, title: "שליטה במסכי תלמידים", desc: "המורה רואה ושולט בכל המסכים בזמן אמת" },
  { icon: WifiOff, title: "חסימת אינטרנט", desc: "שליטה מלאה בגישה לאינטרנט בזמן השיעור" },
  { icon: LayoutList, title: "יצירת סדר ומשמעת", desc: "כלים חכמים לניהול כיתה אפקטיבי" },
  { icon: MessageCircle, title: "קשר אישי בין מורה לתלמיד ובין מורה להורה", desc: "יכולת השארת הודעות ותקשורת אישית בין המשולש החשוב ביותר — הורה, תלמיד והמורים" },
];

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is-jotit" className="py-24 section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-4"
        >
          אז מה זה בעצם <span className="gradient-text">JOTIT</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto mb-16"
        >
          ג'וט-איט מחברת בין מרחב הלמידה הפיזי והדיגיטלי.
          <br />
          המערכת יוצרת סביבה מסודרת ונגישה לחומרי הלימוד, דרכה ניתן להשלים ולהגיש משימות, ומשתלבת עם מערכת ניהול הלמידה של בית הספר.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
