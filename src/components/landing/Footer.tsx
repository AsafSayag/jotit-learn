import jotitLogo from "@/assets/jotit-logo.png";
import { Phone, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient background - light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,35%,95%)] via-[hsl(210,30%,97%)] to-[hsl(200,40%,96%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--glow)/0.06),transparent_60%)]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent))] to-transparent opacity-40" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-14 pb-8">
        {/* Main content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img src={jotitLogo} alt="JOTIT" className="h-11 w-auto" />
            <p className="text-sm text-muted-foreground max-w-[200px] text-center md:text-right">
              הפלטפורמה החכמה לניהול כיתות
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-sm" dir="rtl">
            {[
              { href: "#what-is-jotit", label: "מה זה JOTIT" },
              { href: "#how-it-works", label: "איך זה עובד" },
              { href: "#contact", label: "יצירת קשר" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="tel:+972525603424"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+972 52-560-3424</span>
            </a>
            <a
              href="mailto:1@tbook.co.il"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              1@tbook.co.il
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2026 JOTIT. כל הזכויות שמורות.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
            aria-label="חזרה למעלה"
          >
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            חזרה למעלה
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
