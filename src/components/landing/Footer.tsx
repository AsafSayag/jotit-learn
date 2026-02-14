import jotitLogo from "@/assets/jotit-logo.png";

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
          <p className="text-hero-foreground/40 text-sm">
            © 2026 JOTIT. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
