import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
}

export default function HeroSection({ onNavClick }: HeroSectionProps) {
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="hero"
      className="w-full h-screen p-4 md:p-6 bg-black relative flex flex-col"
    >
      {/* Container with inset effect and rounded borders */}
      <div
        id="hero-container"
        className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden flex flex-col justify-between"
      >
        {/* Background Video */}
        <video
          id="hero-bg-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        {/* Noise overlay */}
        <div
          id="hero-noise-overlay"
          className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10"
        />

        {/* Gradient overlay */}
        <div
          id="hero-gradient-overlay"
          className="bg-gradient-to-b from-black/40 via-transparent to-black/70 absolute inset-0 z-10 pointer-events-none"
        />

        {/* Navbar pill hanging from top edge */}
        <nav
          id="hero-navbar"
          className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
        >
          <div
            id="navbar-pill"
            className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-10 md:py-4 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 border-x border-b border-white/5 shadow-2xl"
          >
            {[
              { label: "Our story", target: "about" },
              { label: "Collective", target: "features" },
              { label: "Workshops", target: "hero" },
              { label: "Programs", target: "features" },
              { label: "Inquiries", target: "features" },
            ].map((item, index) => (
              <button
                key={index}
                id={`navbar-item-${index}`}
                onClick={() => onNavClick(item.target)}
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-[#E1E0CC] whitespace-nowrap cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Content Section aligned to bottom */}
        <div
          id="hero-content-wrapper"
          className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-12 z-20 pb-8 sm:pb-10 md:pb-14 flex flex-col justify-end"
        >
          <div
            id="hero-grid"
            className="grid grid-cols-12 gap-6 items-end w-full"
          >
            {/* Giant Heading (Left 8 cols on desktop) */}
            <div
              id="hero-heading-col"
              className="col-span-12 lg:col-span-8 flex flex-col justify-end"
            >
              <WordsPullUp
                text="Prisma"
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] font-sans text-[#E1E0CC]"
                showAsterisk={true}
                delay={0.1}
              />
            </div>

            {/* Description + CTA (Right 4 cols on desktop) */}
            <div
              id="hero-desc-col"
              className="col-span-12 lg:col-span-4 flex flex-col gap-5 sm:gap-6 items-start lg:pl-4 mb-4"
            >
              <motion.p
                id="hero-description"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: customEase,
                }}
                className="text-[#DEDBC8]/70 text-xs sm:text-sm md:text-base leading-[1.2] font-light max-w-md"
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* Pill Button */}
              <motion.button
                id="hero-cta-btn"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: customEase,
                }}
                onClick={() => onNavClick("features")}
                className="group flex items-center bg-[#DEDBC8] hover:bg-[#eae7d5] text-black pr-2 pl-5 sm:pl-6 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 gap-2 hover:gap-3 cursor-pointer shadow-lg border border-[#DEDBC8]/20"
              >
                <span className="text-sm sm:text-base uppercase tracking-wider font-semibold">
                  Join the lab
                </span>
                <div
                  id="hero-cta-arrow-circle"
                  className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                >
                  <ArrowRight className="text-[#DEDBC8] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
