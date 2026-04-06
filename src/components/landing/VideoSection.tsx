import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { Play, Pause } from "lucide-react";

const VideoSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <section id="video" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-black text-center text-foreground mb-16"
        >
          ראו את המערכת בפעולה
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/JOTIT.mp4"
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                showControls || !isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-full p-5 transition-transform duration-200 hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-white" fill="white" />
                ) : (
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
