import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import jotitLogo from "@/assets/jotit-logo.png";

const navLinks = [
  { label: "מה זה JOTIT", href: "#what-is-jotit" },
  { label: "יתרונות המערכת", href: "#results" },
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "סרטון הדגמה", href: "#video" },
  { label: "יצירת קשר", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <motion.a
          href="#"
          whileHover={{ scale: 1.03, filter: "drop-shadow(0 0 12px hsl(190 85% 45% / 0.5))" }}
          className="block"
        >
          <img src={jotitLogo} alt="JOTIT" className="h-10 w-auto" />
        </motion.a>

        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-hero-foreground/70 hover:text-hero-foreground transition-colors text-xs lg:text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:right-0 after:bg-accent after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#1B3A5C] text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm font-bold hover:bg-[#152E4A] transition-colors"
          >
            קביעת פגישה
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-hero-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/98 backdrop-blur-md border-t border-hero-foreground/10 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-hero-foreground/80 hover:text-hero-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 bg-[#1B3A5C] text-white px-6 py-3 rounded-lg text-center font-bold hover:bg-[#152E4A]"
          >
            קביעת פגישה
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
