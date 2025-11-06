import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    key: 'A',
    title: 'Plan A',
    vibe: 'Romantic lakeside evenings & heritage walks',
    img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'B',
    title: 'Plan B',
    vibe: 'Boutique stays, craft markets, rooftop dinners',
    img: 'https://images.unsplash.com/photo-1548786811-ff4ae78f16e9?q=80&w=1600&auto=format&fit=crop',
  },
  {
    key: 'C',
    title: 'Plan C',
    vibe: 'Sunrise boat rides & palace photography trails',
    img: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1600&auto=format&fit=crop',
  },
];

const PlanVariants = () => {
  return (
    <section className="relative py-14 md:py-20 bg-[#0c191b]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-[#FBF9F5] text-2xl md:text-3xl font-semibold">Preview plans</h2>
          <p className="text-sm text-[#F6D8C0]/80">Scroll to explore cinematic variants</p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 snap-x">
          {plans.map((p, idx) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative snap-start min-w-[80%] sm:min-w-[360px] h-[220px] rounded-2xl overflow-hidden"
            >
              <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-xs text-white/80 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">{p.title}</span>
                </div>
                <h3 className="text-white text-lg font-medium drop-shadow">{p.vibe}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanVariants;
