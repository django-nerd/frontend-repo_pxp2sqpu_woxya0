import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0f1e20]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient + vignette overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.45)' }} />

      {/* Headline copy */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3 text-sm tracking-widest text-[#E3C98F] uppercase"
          >
            you’re invited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-[#FBF9F5] sm:text-5xl md:text-6xl"
            style={{ fontFamily: 'serif' }}
          >
            Life moves fast. We plan when you can’t.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-4 max-w-xl text-base text-[#F6D8C0]/90 sm:text-lg"
          >
            Your next trip, curated by AI — effortless, personal, and ready when you are.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
