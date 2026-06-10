import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

interface Project {
  id: string;
  name: string;
  gif: string;
  category: "Cinematic" | "Technical" | "Motion";
  features: string[];
}

const ALL_PROJECTS: Project[] = [
  {
    id: "01",
    name: "Space Voyage",
    gif: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
    category: "Cinematic",
    features: ["Spatial camera system", "Physically-simulated stars", "Zero-gravity atmosphere"]
  },
  {
    id: "02",
    name: "Code Nest",
    gif: "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
    category: "Technical",
    features: ["Dynamic AST parsing", "High-density notation style", "Real-time execution preview"]
  },
  {
    id: "03",
    name: "Vex Ventures",
    gif: "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
    category: "Motion",
    features: ["Kinetic spring animations", "Bezier-path loops", "Interactive sound triggers"]
  },
  {
    id: "04",
    name: "Stellar AI v2",
    gif: "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
    category: "Technical",
    features: ["Contextual video criticism", "Generative layout matrices", "Autonomous model pipelines"]
  },
  {
    id: "05",
    name: "ASME Studio",
    gif: "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
    category: "Cinematic",
    features: ["Architectural aspect ratios", "Geometric viewport grids", "Sparsely populated shadows"]
  },
  {
    id: "06",
    name: "Transform Data",
    gif: "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
    category: "Technical",
    features: ["Continuous table streams", "Custom schema generation", "Interactive schema trees"]
  },
  {
    id: "07",
    name: "Vitara Kinetic",
    gif: "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
    category: "Motion",
    features: ["Inertial scroll easing", "Symphonic audio reactivity", "High-frequency point maps"]
  },
  {
    id: "08",
    name: "Terra",
    gif: "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
    category: "Cinematic",
    features: ["Chrono-photographic noise", "Environmental fog layers", "Subtle wind-drift motion"]
  },
  {
    id: "09",
    name: "Sky Elite",
    gif: "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
    category: "Motion",
    features: ["Fluid aerodynamic fields", "Multi-axis camera rigs", "Symmetrical flight-paths"]
  },
  {
    id: "10",
    name: "Aethera",
    gif: "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
    category: "Cinematic",
    features: ["Ethereal fluid renderers", "Volumetric haze filters", "Dreamlike transition loops"]
  },
  {
    id: "11",
    name: "DesignPro",
    gif: "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
    category: "Motion",
    features: ["Dynamic responsive staging", "Studio typography control", "Interactive cursor follow"]
  },
  {
    id: "12",
    name: "Stellar AI",
    gif: "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
    category: "Technical",
    features: ["Automated canvas feedback", "Smart focus assistants", "Integrated review notes"]
  },
  {
    id: "13",
    name: "XPortfolio",
    gif: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    category: "Cinematic",
    features: ["Bespoke showcase scenes", "Interlocking design blocks", "Minimalist layout cards"]
  },
  {
    id: "14",
    name: "Orbit Web3",
    gif: "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
    category: "Technical",
    features: ["Decentralized visual states", "Crypto-token smart art", "Distributed render pipelines"]
  },
  {
    id: "15",
    name: "Nexora",
    gif: "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
    category: "Motion",
    features: ["Frictionless vector morphing", "Kinetic motion cascades", "Lag-free interaction response"]
  },
  {
    id: "16",
    name: "EVR Ventures",
    gif: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    category: "Technical",
    features: ["Immersive spatial capsule", "Virtual world assets", "Next-gen creative labs"]
  },
  {
    id: "17",
    name: "Planet Orbit",
    gif: "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
    category: "Motion",
    features: ["Astronomical orbit sync", "Dynamic gravity curves", "Symmetrical planet system"]
  },
  {
    id: "18",
    name: "New Era",
    gif: "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
    category: "Cinematic",
    features: ["Neo-noir visual styling", "High-contrast shadows", "Ultra-wide cinematic crop"]
  },
  {
    id: "19",
    name: "Wealth Engine",
    gif: "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
    category: "Technical",
    features: ["Dynamic financial streams", "Sleek data dashboards", "Real-time security feeds"]
  },
  {
    id: "20",
    name: "Luminex",
    gif: "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
    category: "Motion",
    features: ["Reactivity shaders loaded", "Fluorescent ambient glows", "High-frequency stroke waves"]
  },
  {
    id: "21",
    name: "Celestia",
    gif: "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
    category: "Cinematic",
    features: ["Celestial stardust fields", "Atmospheric spatial drift", "Surreal narrative timing"]
  }
];

const CATEGORIES = ["All", "Cinematic", "Technical", "Motion"];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const headerSegments = [
    { text: "Studio-grade workflows for visionary creators. ", className: "text-[#E1E0CC] font-normal block md:inline" },
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500 font-normal block md:inline" },
  ];

  // Filter projects dynamically
  const filteredProjects = ALL_PROJECTS.filter((proj) => {
    if (selectedCategory === "All") return true;
    return proj.category === selectedCategory;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = filteredProjects.length > visibleCount;

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
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4"
        >
          <WordsPullUpMultiStyle segments={headerSegments} delay={0.1} />
        </div>

        {/* Categories Tab Selector */}
        <div
          id="categories-selector-container"
          className="flex justify-center items-center gap-2 sm:gap-4 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`cat-tab-${cat.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(6); // Reset grid item count on category change
                }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                  isActive ? "text-black" : "text-[#E1E0CC]/70 hover:text-[#E1E0CC]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-[#DEDBC8] rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Showcases Grid */}
        <div
          ref={containerRef}
          id="features-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Static Video Hero/Intro block (Only visible on 'All' or 'Cinematic' tabs as leading intro) */}
          {selectedCategory === "All" && (
            <motion.div
              id="feature-card-1"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-1 md:col-span-2 lg:col-span-3 h-80 rounded-2xl md:rounded-3xl overflow-hidden relative shadow-xl border border-white/[0.03] mb-2"
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
                className="bg-gradient-to-t from-black/90 via-black/30 to-black/10 absolute inset-0 z-10"
              />
              {/* Bottom Text Content */}
              <div
                id="feature-card-1-content"
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
              >
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#DEDBC8]/70 block mb-2">
                    Our Playground
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#E1E0CC] leading-tight">
                    Your creative canvas.
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-light max-w-sm">
                  Experience a high-fidelity cinematic workflow custom tailored for studios demanding real-time response.
                </p>
              </div>
            </motion.div>
          )}

          {/* Render individual distinct project cards */}
          <AnimatePresence mode="popLayoutContainer">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`feature-card-${project.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="col-span-1 bg-[#212121] rounded-2xl md:rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/[0.04] shadow-xl relative group"
              >
                <div className="flex flex-col gap-4">
                  {/* Category badge & ID serial */}
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-gray-500 tracking-wider">
                      ({project.id})
                    </span>
                  </div>

                  {/* High Quality Project GIF */}
                  <div
                    id={`project-gif-frame-${project.id}`}
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5 shadow-inner"
                  >
                    <img
                      id={`project-gif-image-${project.id}`}
                      src={project.gif}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none" />
                  </div>

                  {/* Project Name */}
                  <h3 className="text-lg sm:text-xl font-light text-[#E1E0CC] tracking-tight mt-1">
                    {project.name}
                  </h3>

                  {/* Custom Highlights */}
                  <ul className="flex flex-col gap-2">
                    {project.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm"
                      >
                        <Check className="text-primary w-3.5 h-3.5 shrink-0 mt-0.5 text-[#DEDBC8]" />
                        <span className="text-gray-400 font-light leading-snug">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Link Button */}
                <div className="pt-4 mt-6 border-t border-white/[0.05]">
                  <a
                    href="#hero"
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] transition-colors"
                  >
                    <span>Launch Prototype</span>
                    <ArrowRight className="w-3.5 h-3.5 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#DEDBC8]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More toggle button */}
        {hasMore && (
          <div className="flex justify-center mt-12 sm:mt-16">
            <button
              id="show-more-projects-btn"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 6, filteredProjects.length))}
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-transparent hover:bg-white/[0.03] text-[#DEDBC8] font-medium border border-[#DEDBC8]/20 hover:border-[#DEDBC8] text-xs sm:text-sm uppercase tracking-widest cursor-pointer transition-all duration-300 hover:tracking-wide shadow-md"
            >
              Load more works ({filteredProjects.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
