import React from 'react';
import { Users, Calendar, Wand2, Map, Clock, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Group-first intelligence',
    desc: 'Understands everyone’s interests, budgets, and constraints — plans that feel fair and exciting.'
  },
  {
    icon: Wand2,
    title: 'Personalized planning',
    desc: 'Learns from your past trips and preferences to craft itineraries that match your vibe.'
  },
  {
    icon: Calendar,
    title: 'Calendar-aware',
    desc: 'Syncs with schedules to suggest realistic dates and pacing — no more back-and-forth.'
  },
  {
    icon: Map,
    title: 'One city or quick escape',
    desc: 'Choose a focused city hangout or an effortless 2–3 day getaway — both fully optimized.'
  },
  {
    icon: Clock,
    title: 'Time-saving automation',
    desc: 'Reservations, routes, and transitions planned for you. You just show up.'
  },
  {
    icon: Sparkles,
    title: 'Beautiful by default',
    desc: 'Clean layouts, cinematic visuals, and smart recommendations that feel curated.'
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-[#0b0d10] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What you get</h2>
          <p className="mt-2 text-sm text-white/70">An onboarding built to convert invites into aligned group plans.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/0">
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className="text-white text-lg font-medium">{f.title}</h3>
              <p className="mt-1.5 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
