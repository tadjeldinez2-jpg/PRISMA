import { useRef } from "react";
import { useScroll } from "motion/react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedLetter from "./AnimatedLetter";

export default function AboutSection() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  // Scroll tracking on the paragraph container
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const paragraphText =
    "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

  const characters = paragraphText.split("");
  const totalChars = characters.length;

  // Segment inputs for the MultiStyle heading
  const headingSegments = [
    { text: "I am Marcus Chen, ", className: "font-normal" },
    { text: "a self-taught director. ", className: "italic font-serif text-[#DEDBC8]" },
    { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-black py-16 sm:py-24 md:py-32 px-4 md:px-6 flex justify-center items-center relative overflow-hidden"
    >
      {/* Inner Card layout */}
      <div
        id="about-card"
        className="bg-[#101010] w-full max-w-6xl rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col items-center text-center shadow-2xl border border-white/[0.02] relative"
      >
        {/* Small top label */}
        <span
          id="about-label"
          className="text-primary text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-4 sm:mb-6 block text-[#DEDBC8]"
        >
          Visual arts
        </span>

        {/* Main Heading styled dynamically per segment */}
        <div
          id="about-heading-container"
          className="text-[#E1E0CC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.1] sm:leading-[0.95] md:leading-[0.9] font-light mb-10 sm:mb-14"
        >
          <WordsPullUpMultiStyle
            segments={headingSegments}
            className="w-full"
            delay={0.1}
          />
        </div>

        {/* Scroll Linked Character Opacity Character Reveal Paragraph */}
        <p
          ref={paragraphRef}
          id="about-scroll-paragraph"
          className="text-[#DEDBC8] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-[1.5] sm:leading-[1.4] text-center font-light flex flex-wrap justify-center gap-x-[0.1em]"
        >
          {characters.map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              totalChars={totalChars}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>
      </div>
    </section>
  );
}
