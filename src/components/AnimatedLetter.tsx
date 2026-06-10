import { motion, MotionValue, useTransform } from "motion/react";

interface AnimatedLetterProps {
  key?: any;
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

export default function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollYProgress,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  // Transitions from opacity 0.2 to 1 based on character progress staggering within [charProgress - 0.1, charProgress + 0.05]
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);
  // Ensure we don't have start >= end which could cause division by zero or errors
  const safeEnd = end <= start ? start + 0.001 : end;

  const opacity = useTransform(scrollYProgress, [start, safeEnd], [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block whitespace-pre"
      id={`anim-letter-${index}`}
    >
      {char}
    </motion.span>
  );
}
