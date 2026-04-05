import { motion } from "framer-motion";
import schoolGirl from "@/assets/school-girl.png";

const FloatingCharacter = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-2 md:bottom-20 md:right-4 z-[100] pointer-events-none"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={schoolGirl}
        alt="תלמידה עם טאבלט"
        className="w-12 md:w-20 lg:w-24 h-auto drop-shadow-lg opacity-80 md:opacity-100"
        loading="lazy"
        width={512}
        height={768}
      />
    </motion.div>
  );
};

export default FloatingCharacter;
