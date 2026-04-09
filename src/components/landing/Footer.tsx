import jotitLogo from "@/assets/jotit-logo.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="hero-section py-12 border-t border-hero-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={jotitLogo} alt="JOTIT" className="h-10 w-auto" />
          <div className="flex gap-6 text-sm text-hero-foreground/60">
            <a href="#what-is-jotit" className="hover:text-hero-foreground transition-colors">מה זה JOTIT</a>
            <a href="#how-it-works" className="hover:text-hero-foreground transition-colors">איך זה עובד</a>
            <a href="#contact" className="hover:text-hero-foreground transition-colors">יצירת קשר</a>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 text-sm text-hero-foreground/60">
            <a href="tel:+972525603424" className="flex items-center gap-1.5 hover:text-hero-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span dir="ltr">+972 52-560-3424</span>
            </a>
            <a href="mailto:1@tbook.co.il" className="flex items-center gap-1.5 hover:text-hero-foreground transition-colors">
              <Mail className="w-4 h-4" />
              1@tbook.co.il
            </a>
          </div>
          <p className="text-hero-foreground/40 text-sm">
            © 2026 JOTIT. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
