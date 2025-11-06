import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    k: 1,
    title: 'Accept your invite',
    body: 'Join the trip space — we pull just what’s needed to personalize (interests, past trips, calendars).',
  },
  {
    k: 2,
    title: 'Pick trip style',
    body: 'Choose a one-city hangout or a 2–3 day micro-escape. We optimize pace, routes, and reservations.',
  },
  {
    k: 3,
    title: 'Review & lock',
    body: 'Preview smart variants, vote as a group, and confirm. We handle the logistics — you keep the fun.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0a0c0f] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">How it works</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="text-[#E3C98F] text-sm">Step {s.k}</div>
              <h3 className="mt-1 text-white text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
