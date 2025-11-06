import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#0b0d10]">
      {/* Spline 3D Scene (interactive cover) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 220px rgba(0,0,0,0.5)' }} />

      {/* Headline copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-3 text-xs tracking-widest text-[#E3C98F] uppercase"
          >
            Invite / Onboarding
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="max-w-4xl text-4xl font-semibold leading-tight text-[#FBF9F5] sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'serif' }}
          >
            The AI trip planner for groups who value time, taste, and ease.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-4 max-w-2xl text-base text-[#F6D8C0]/90 sm:text-lg"
          >
            Connect your group, past trips, and calendars. We generate smart plans around shared interests — from one-city hangouts to effortless 2–3 day escapes.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
