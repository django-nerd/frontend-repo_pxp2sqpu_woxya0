import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const InviteCard = () => {
  return (
    <section className="relative -mt-16 z-20 w-full">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl p-6 md:p-8 shadow-[0_10px_60px_rgba(0,0,0,0.25)]"
          style={{ backgroundImage: 'linear-gradient(135deg, rgba(227,201,143,0.15), rgba(16,63,68,0.15))' }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="h-28 w-full md:w-56 overflow-hidden rounded-2xl bg-[#1A1A1A]">
              <img
                src="https://images.unsplash.com/photo-1543340713-8a9211f0b3df?q=80&w=1600&auto=format&fit=crop"
                alt="Destination"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1">
              <p className="text-[#E3C98F] text-xs tracking-widest uppercase mb-2">Invite</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#FBF9F5]">You’ve been invited to a trip crafted just for you.</h3>
              <p className="mt-2 text-[#F6D8C0]/90">Based on your past journeys & interests.</p>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-[#FBF9F5]/80">
                <div className="flex items-center gap-2"><span className="opacity-70">Destination</span><span className="font-medium">Udaipur, India</span></div>
                <div className="flex items-center gap-2"><span className="opacity-70">Dates</span><span className="font-medium">Mar 14 – 18</span></div>
                <div className="flex items-center gap-2"><span className="opacity-70">Budget</span><span className="font-medium">₹45k</span></div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                  <User size={18} className="text-[#FBF9F5]" />
                </div>
                <span className="text-sm text-[#FBF9F5]/80">Organized by <span className="text-[#FBF9F5] font-medium">Aarav</span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InviteCard;
