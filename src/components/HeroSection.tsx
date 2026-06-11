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
              { label: "about", target: "about" },
              { label: "projects", target: "features" },
              { label: "let's talk", target: "contact" },
            ].map((item, index) => {
              const isContact = item.target === "contact";
              return (
                <button
                  key={index}
                  id={`navbar-item-${index}`}
                  onClick={() => onNavClick(item.target)}
                  style={isContact ? undefined : { color: "rgba(225, 224, 204, 0.8)" }}
                  className={
                    isContact
                      ? "bg-white text-black font-sans font-bold tracking-[0.1em] uppercase rounded-full px-4 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-xs md:text-sm flex items-center gap-1 sm:gap-1.5 transition-all duration-300 hover:bg-[#E1E0CC]/90 hover:scale-[1.03] whitespace-nowrap cursor-pointer"
                      : "text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-300 hover:text-[#E1E0CC] whitespace-nowrap cursor-pointer"
                  }
                >
                  {isContact ? (
                    <>
                      <span>LET'S TALK</span>
                      <span className="text-xs sm:text-sm md:text-base font-normal tracking-[0]">↗</span>
                    </>
                  ) : (
                    item.label
                  )}
                </button>
              );
            })}
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
            {/* Giant Heading (Full width) */}
            <div
               id="hero-heading-col"
              className="col-span-12 flex flex-col justify-end overflow-visible select-none"
            >
              <WordsPullUp
                text="hi, i'm nagazaki and i'm a"
                className="text-[10px] sm:text-xs md:text-sm font-sans font-bold tracking-[0.25em] text-[#E1E0CC] uppercase mb-4 sm:mb-5 pl-1"
                showAsterisk={false}
                delay={0.02}
              />
              <WordsPullUp
                text="DESIGNER"
                className="text-[13vw] sm:text-[13vw] md:text-[13.5vw] lg:text-[13.5vw] xl:text-[13.5vw] 2xl:text-[13.5vw] font-medium leading-[0.85] tracking-[-0.05em] font-sans text-[#E1E0CC]"
                showAsterisk={false}
                delay={0.1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
