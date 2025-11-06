import React from 'react';
import { motion } from 'framer-motion';

const InviteCTA = () => {
  return (
    <section className="bg-[#090b0e] py-14 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-full p-[2px] bg-gradient-to-r from-[#ffffff] via-[#ffb774] to-[#ff6a00]"
        >
          <div className="rounded-full bg-[#090b0e]">
            <div className="flex flex-col items-center gap-3 p-3 sm:flex-row sm:justify-center">
              <button
                className="px-8 py-3 rounded-full text-[#0b0d10] font-medium bg-gradient-to-r from-white to-[#FF8A1E] hover:shadow-[0_0_32px_rgba(255,138,30,0.35)] transition-shadow"
              >
                Join with invite
              </button>
              <button
                className="px-8 py-3 rounded-full text-white font-medium bg-white/5 hover:bg-white/10 border border-white/15"
              >
                Explore features
              </button>
            </div>
          </div>
        </motion.div>
        <p className="mt-4 text-xs text-white/70">No spam. We only use your info to personalize planning for your group.</p>
      </div>
    </section>
  );
};

export default InviteCTA;
