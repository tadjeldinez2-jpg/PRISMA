import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  delay = 0,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLastWord = i === words.length - 1;
        return (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.25em] py-[0.1em] relative"
            id={`word-wrapper-${i}`}
          >
            <motion.span
              className="inline-block"
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              id={`word-inner-${i}`}
            >
              {isLastWord && showAsterisk ? (
                <span className="relative inline-block pe-[0.3em]">
                  {word}
                  <span className="absolute top-[0.65em] -right-[0.1em] text-[0.31em] select-none font-sans">
                    *
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
