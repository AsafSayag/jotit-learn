import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import schoolGirl from "@/assets/school-girl.png";

const FloatingCharacter = () => {
  const [hideCharacter, setHideCharacter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      // Hide when footer enters viewport
      setHideCharacter(footerTop < windowHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-32 right-4 z-[100] pointer-events-none hidden md:block"
      animate={{
        y: hideCharacter ? 0 : [0, -8, 0],
        opacity: hideCharacter ? 0 : 1,
      }}
      transition={{
        y: { duration: 3, repeat: hideCharacter ? 0 : Infinity, ease: "easeInOut" },
        opacity: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <img
        src={schoolGirl}
        alt="תלמידה עם טאבלט"
        className="w-20 lg:w-24 h-auto drop-shadow-lg"
        loading="lazy"
        width={512}
        height={768}
      />
    </motion.div>
  );
};

export default FloatingCharacter;
