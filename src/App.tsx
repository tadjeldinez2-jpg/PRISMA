/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Twitter, Circle, Instagram, Linkedin } from "lucide-react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4";

const SERVICES = [
  "Website",
  "Mobile App",
  "Web App",
  "E-Commerce",
  "Visual Identity",
  "3D & Motion",
  "Digital Marketing",
  "Growth & Consulting",
  "Other"
];

interface SocialBtnProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  className: string;
  href?: string;
}

function SocialBtn({ icon: Icon, className, href = "#" }: SocialBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
    >
      <Icon className="w-3.5 h-3.5" size={13} />
    </a>
  );
}

function LetsTalkSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleToggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // 1-second fake delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSending(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black p-3 sm:p-4 md:p-6 flex flex-col justify-center relative select-text"
    >
      {/* Container with rounded borders */}
      <div
        id="contact-card-container"
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)] flex flex-col justify-between"
      >
        {/* Background Video */}
        <video
          id="contact-bg-video"
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        />

        {/* Visual darkening overlay to ensure text contrast for white text */}
        <div className="absolute inset-0 bg-black/35 z-5 pointer-events-none" />

        {/* Content layer */}
        <div
          id="contact-content-layer"
          className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6 justify-between"
        >
          {/* Header row to push card main down nicely */}
          <div id="contact-top-spacer" />

          {/* Main flex layout containing side-by-side on lg: */}
          <div
            id="contact-layout-wrapper"
            className="w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 my-auto"
          >
            {/* Headline (left) */}
            <p
              id="contact-headline"
              className="text-white text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0"
            >
              I craft bold ideas <br />
              and ship them as{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                products
              </span>
            </p>

            {/* Contact form card (right) */}
            <div
              id="contact-form-outer"
              className="w-full lg:w-[min(480px,45%)] shrink-0 z-20"
            >
              <div
                id="contact-form-card"
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4 text-left"
              >
                <h3
                  id="contact-form-title"
                  className="text-xl sm:text-2xl font-semibold text-black tracking-tight"
                >
                  Say hello! 👋
                </h3>

                {/* Email + socials row */}
                <div
                  id="contact-socials-row"
                  className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5"
                >
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                      Drop us a line
                    </span>
                    <a
                      href="mailto:hello@forma.co"
                      className="text-blue-600 font-semibold hover:underline text-xs sm:text-sm truncate"
                    >
                      hello@forma.co
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <SocialBtn icon={Twitter} className="bg-gray-100 text-gray-800" />
                    <SocialBtn icon={Circle} className="bg-pink-100 text-pink-500" />
                    <SocialBtn icon={Instagram} href="https://www.instagram.com/nagazaki.1/" className="bg-orange-100 text-orange-400" />
                    <SocialBtn icon={Linkedin} className="bg-blue-100 text-blue-600" />
                  </div>
                </div>

                {/* OR divider */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 font-medium text-xs font-mono">OR</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Feedback flow depending on sent state */}
                {!sent ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    id="contact-form-element"
                  >
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium text-black">
                        Tell us about your vision
                      </label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Full name"
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                          className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you looking to build or improve..."
                      className="text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                    />

                    {/* Services Section */}
                    <div className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-black">
                        I need help with...
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map((service) => {
                          const isSelected = selected.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleToggleService(service)}
                              className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                                isSelected
                                  ? "bg-gray-100 text-black border-black"
                                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60 cursor-pointer"
                    >
                      {sending ? "Sending..." : "Send my message"}
                    </button>
                  </form>
                ) : (
                  /* Success state */
                  <div
                    id="contact-success-state"
                    className="py-6 gap-3 flex flex-col items-center justify-center text-center animate-fade-in"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-xl text-green-600">
                      ✓
                    </div>
                    <h4 className="text-base font-semibold text-gray-900">
                      You're all set!
                    </h4>
                    <p className="text-sm text-gray-500">
                      Expect a reply within 24 hours.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom spacer to align everything beautifully */}
          <div id="contact-bottom-spacer" />
        </div>
      </div>
    </section>
  );
}

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

      {/* 4. Let's Talk Section */}
      <LetsTalkSection />

      {/* 5. Minimalist Studio Footer */}
      <footer
        id="studio-footer"
        className="w-full bg-[#101010] py-10 md:py-14 text-center text-[10px] sm:text-xs text-gray-600 font-mono uppercase tracking-[0.2em] border-t border-white/[0.02] relative z-10"
      >
        <span>© 2026 prisma studio. all rights reserved.</span>
      </footer>
    </div>
  );
}
