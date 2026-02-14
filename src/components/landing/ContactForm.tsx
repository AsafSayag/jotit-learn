import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-16"
        >
          יצירת קשר
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="bg-card rounded-2xl border border-border p-12 text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">תודה רבה!</h3>
              <p className="text-muted-foreground">קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 md:p-12 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">שם מלא</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">תפקיד</label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="מנהל / מורה / רכז"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">בית ספר</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="שם בית הספר"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">טלפון</label>
                  <input
                    type="tel"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="050-1234567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">אימייל</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="email@school.co.il"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">הודעה</label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                  placeholder="ספרו לנו על בית הספר שלכם..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-primary text-accent-foreground py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:scale-[1.02] transform"
              >
                שלחו פרטים ונחזור אליכם
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
