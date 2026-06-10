/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";

export default function App() {
  // Smooth scroll handler to target elements correctly
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="app-root-container"
      className="bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black min-h-screen overflow-x-hidden scroll-smooth"
    >
      {/* 1. Hero Section */}
      <HeroSection onNavClick={handleScrollToSection} />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Features Section */}
      <FeaturesSection />

      {/* 4. Minimalist Studio Footer */}
      <footer
        id="studio-footer"
        className="w-full bg-[#101010] py-10 md:py-14 text-center text-[10px] sm:text-xs text-gray-600 font-mono uppercase tracking-[0.2em] border-t border-white/[0.02] relative z-10"
      >
        <span>© 2026 prisma studio. all rights reserved.</span>
      </footer>
    </div>
  );
}

