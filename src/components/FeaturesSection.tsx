import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headerSegments = [
    { text: "Studio-grade workflows for visionary creators. ", className: "text-[#E1E0CC] font-normal block md:inline" },
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 font-normal block md:inline" },
  ];

  // Card items configurations
  const checklistCard1 = [
    "High-fidelity storyboards",
    "Real-time keyframe editing",
    "Dynamic timeline sequencing",
    "One-click scene rendering",
  ];

  const checklistCard2 = [
    "Context-aware visual critiques",
    "Frame-by-frame detailed notes",
    "Seamless design tool plugins",
  ];

  const checklistCard3 = [
    "Intelligent notification control",
    "Deep ambient soundscapes",
    "Calendar and schedule sync",
  ];

  // Framer motion animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section
      id="features"
      className="min-h-screen bg-black w-full relative py-20 sm:py-28 md:py-36 overflow-hidden"
    >
      {/* Subtle background noise overlay */}
      <div
        id="features-bg-noise"
        className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0"
      />

      <div
        id="features-content-container"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col"
      >
        {/* Features Header */}
        <div
          id="features-header-wrapper"
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 px-4"
        >
          <WordsPullUpMultiStyle segments={headerSegments} delay={0.1} />
        </div>

        {/* 4-Column Card Grid */}
        <div
          ref={containerRef}
          id="features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:h-[480px] gap-4 sm:gap-3 md:gap-2"
        >
          {/* Card 1: Video Card */}
          <motion.div
            id="feature-card-1"
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="col-span-1 h-80 lg:h-full rounded-2xl md:rounded-3xl overflow-hidden relative shadow-xl border border-white/[0.03]"
          >
            {/* Background Video */}
            <video
              id="feature-card-1-video"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
            />
            {/* Gradient Overlay */}
            <div
              id="feature-card-1-gradient"
              className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute inset-0 z-10"
            />
            {/* Bottom Text Content */}
            <div
              id="feature-card-1-content"
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20"
            >
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#E1E0CC]">
                Your creative canvas.
              </h3>
            </div>
          </motion.div>

          {/* Card 2: Project Storyboard */}
          <motion.div
            id="feature-card-2"
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="col-span-1 h-auto lg:h-full bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-white/[0.04] shadow-xl relative group"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Icon Image and Card Label */}
              <div className="flex justify-between items-start">
                <img
                  id="feature-card-2-icon"
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Storyboard Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-mono text-gray-500 tracking-wider">
                  (01)
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-light text-[#E1E0CC] tracking-tight">
                Project Storyboard.
              </h3>

              {/* Checklist */}
              <ul className="flex flex-col gap-3">
                {checklistCard1.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <span className="text-gray-400 font-light leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Learn More Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.05]">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Smart Critiques */}
          <motion.div
            id="feature-card-3"
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="col-span-1 h-auto lg:h-full bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-white/[0.04] shadow-xl relative group"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Icon Image and Card Label */}
              <div className="flex justify-between items-start">
                <img
                  id="feature-card-3-icon"
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Critique Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-mono text-gray-500 tracking-wider">
                  (02)
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-light text-[#E1E0CC] tracking-tight">
                Smart Critiques.
              </h3>

              {/* Checklist */}
              <ul className="flex flex-col gap-3">
                {checklistCard2.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <span className="text-gray-400 font-light leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Learn More Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.05]">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 4: Immersion Capsule */}
          <motion.div
            id="feature-card-4"
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="col-span-1 h-auto lg:h-full bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-white/[0.04] shadow-xl relative group"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Icon Image and Card Label */}
              <div className="flex justify-between items-start">
                <img
                  id="feature-card-4-icon"
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Immersion Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-mono text-gray-500 tracking-wider">
                  (03)
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-light text-[#E1E0CC] tracking-tight">
                Immersion Capsule.
              </h3>

              {/* Checklist */}
              <ul className="flex flex-col gap-3">
                {checklistCard3.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <Check className="text-primary w-4 h-4 shrink-0 mt-0.5" />
                    <span className="text-gray-400 font-light leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Learn More Footer */}
            <div className="pt-6 mt-6 border-t border-white/[0.05]">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] transition-colors"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
