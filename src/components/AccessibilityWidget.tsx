import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Plus, Minus, Eye, Palette, Link2, X } from "lucide-react";

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);

  const changeFontSize = (delta: number) => {
    const next = Math.max(-2, Math.min(4, fontSize + delta));
    setFontSize(next);
    document.documentElement.style.fontSize = `${100 + next * 12.5}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("a11y-high-contrast");
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    document.documentElement.classList.toggle("a11y-grayscale");
  };

  const toggleHighlightLinks = () => {
    setHighlightLinks(!highlightLinks);
    document.documentElement.classList.toggle("a11y-highlight-links");
  };

  return (
    <div className="fixed bottom-4 left-4 z-[9999]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 bg-card border border-border rounded-2xl shadow-2xl p-5 w-64"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-foreground font-bold text-sm">נגישות</h3>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-3">
              {/* Font size */}
              <div className="flex items-center justify-between">
                <span className="text-foreground text-xs font-medium">גודל טקסט</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => changeFontSize(-1)}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <button
                    onClick={() => changeFontSize(1)}
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* High contrast */}
              <button
                onClick={toggleHighContrast}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  highContrast ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <Eye size={14} />
                ניגודיות גבוהה
              </button>

              {/* Grayscale */}
              <button
                onClick={toggleGrayscale}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  grayscale ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <Palette size={14} />
                מצב גווני אפור
              </button>

              {/* Highlight links */}
              <button
                onClick={toggleHighlightLinks}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  highlightLinks ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                <Link2 size={14} />
                הדגשת קישורים
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full gradient-primary text-accent-foreground flex items-center justify-center shadow-lg"
        aria-label="נגישות"
      >
        <Accessibility size={22} />
      </motion.button>
    </div>
  );
};

export default AccessibilityWidget;
