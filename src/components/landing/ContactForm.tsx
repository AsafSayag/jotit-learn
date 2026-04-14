import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { error } = await supabase.from("contact_submissions").insert({
      full_name: formData.get("full_name") as string,
      role: (formData.get("role") as string) || null,
      school: (formData.get("school") as string) || null,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: (formData.get("message") as string) || null,
    });

    setLoading(false);
    if (error) {
      toast({ title: "שגיאה", description: "אירעה שגיאה, נסו שוב מאוחר יותר", variant: "destructive" });
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 section-alt" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-20"
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
            <div className="card-elevated rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">תודה רבה!</h3>
              <p className="text-muted-foreground">קיבלנו את הפרטים שלכם ונחזור אליכם בהקדם</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-elevated rounded-3xl p-8 md:p-12 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">שם מלא</label>
                  <input type="text" name="full_name" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">תפקיד</label>
                  <input type="text" name="role" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all" placeholder="מנהל / מורה / רכז" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">בית ספר</label>
                <input type="text" name="school" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all" placeholder="שם בית הספר" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">טלפון</label>
                  <input type="tel" name="phone" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all" placeholder="050-1234567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">אימייל</label>
                  <input type="email" name="email" required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all" placeholder="email@school.co.il" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">הודעה</label>
                <textarea name="message" rows={4} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all resize-none" placeholder="ספרו לנו על בית הספר שלכם..." />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-accent-foreground py-4 rounded-xl text-lg font-bold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "שולח..." : "שלחו פרטים ונחזור אליכם"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;