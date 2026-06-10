import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  delay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Flattens segments into individual words with distinct styles
  const words: { word: string; textStyle: string }[] = [];
  segments.forEach((segment) => {
    // Split by spaces but preserve space between words unless empty
    const splitWords = segment.text.split(" ");
    splitWords.forEach((word) => {
      if (word !== "") {
        words.push({
          word,
          textStyle: segment.className || "",
        });
      }
    });
  });

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${className}`}
      id="words-pullup-multistyle-container"
    >
      {words.map((item, i) => {
        return (
          <span
            key={i}
            className="inline-block overflow-hidden mr-[0.25em] py-[0.1em]"
            id={`multi-word-wrapper-${i}`}
          >
            <motion.span
              className={`inline-block ${item.textStyle}`}
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              id={`multi-word-inner-${i}`}
            >
              {item.word}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
