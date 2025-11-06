import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="relative py-12 md:py-16 bg-[#0a1517]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-full p-[2px] bg-gradient-to-r from-[#E3C98F] via-[#F6D8C0] to-[#0fbfc5]"
        >
          <div className="rounded-full bg-[#0a1517]">
            <div className="flex flex-col items-center gap-3 p-3 sm:flex-row sm:justify-center">
              <button
                className="px-8 py-3 rounded-full text-[#0a1517] font-medium bg-gradient-to-r from-[#E3C98F] to-[#2bbec4] hover:shadow-[0_0_30px_rgba(43,190,196,0.35)] transition-shadow"
              >
                Join trip
              </button>
              <button
                className="px-8 py-3 rounded-full text-[#FBF9F5] font-medium bg-white/5 hover:bg-white/10 border border-white/15"
              >
                Preview plans
              </button>
            </div>
          </div>
        </motion.div>
        <p className="mt-4 text-xs text-[#F6D8C0]/70">By joining, you’ll get a personalized itinerary synced to your calendar.</p>
      </div>
    </section>
  );
};

export default CTASection;
