import React from 'react';
import { Share2, Info } from 'lucide-react';

const FooterBar = () => {
  return (
    <footer className="sticky bottom-0 z-30 w-full backdrop-blur-xl bg-[#0b1719]/70 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <div className="text-xs text-[#F6D8C0]/80">Cinematic, intelligent, calm.</div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-sm text-[#FBF9F5] bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            <Share2 size={16} /> Share Invite
          </button>
          <button className="flex items-center gap-2 text-sm text-[#FBF9F5] bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
            <Info size={16} /> About AI Planning
          </button>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
