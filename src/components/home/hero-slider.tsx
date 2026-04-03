"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Sparkles, ArrowRight } from "lucide-react";
import Container from "@/components/common/container";
import { heroSlides } from "@/content/hero";

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isHovering, heroSlides.length]);

  const goPrev = () => {
    setActive((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goNext = () => {
    setActive((prev) => (prev + 1) % heroSlides.length);
  };

  const slide = heroSlides[active];

  return (
    <section 
      id="home" 
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Enhanced Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [0, -100],
              x: [0, (i % 2 === 0 ? 50 : -50)]
            }}
            transition={{ 
              duration: 4 + i, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "linear"
            }}
            style={{ 
              left: `${10 + (i * 12)}%`, 
              top: `${60 + (i * 5)}%` 
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center pt-24">
        <Container>
          <div className="flex justify-end">
            <div className="ml-auto w-full max-w-[680px] text-left lg:translate-x-20 xl:translate-x-28 2xl:translate-x-36">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Premium Indian Spice Brand
                  </span>
                  <Star className="h-3 w-3 text-yellow-400" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1
                key={slide.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              >
                {slide.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                key={slide.subtitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-6 max-w-[580px] text-base leading-relaxed text-zinc-200 sm:text-lg lg:text-xl"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href={slide.ctaPrimary.href}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10">{slide.ctaPrimary.label}</span>
                  <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 bg-gradient-to-r from-yellow-500 to-yellow-600" />
                </Link>
                <Link
                  href={slide.ctaSecondary.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 hover:border-white/50"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </motion.div>

              {/* Trust Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="mt-12 flex items-center gap-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-gray-300 to-gray-400"
                    />
                  ))}
                </div>
                <div className="text-sm text-white/80">
                  <span className="font-semibold text-yellow-400">10,000+</span> Happy Customers
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Slide Indicators & Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <Container className="flex items-center justify-between">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                className="group relative h-2.5 rounded-full transition-all"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    active === index ? "w-10 bg-yellow-400" : "w-2.5 bg-white/40 group-hover:bg-white/60"
                  }`}
                />
                {active === index && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-yellow-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={goPrev}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 hover:border-white/50"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-110 hover:border-white/50"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </Container>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-xs uppercase tracking-wider text-white/60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-6 w-px bg-white/60"
        />
      </motion.div>
    </section>
  );
}