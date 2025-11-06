import React from 'react';
import HeroSection from './components/HeroSection';
import InviteCard from './components/InviteCard';
import PlanVariants from './components/PlanVariants';
import CTASection from './components/CTASection';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="min-h-screen bg-[#071113] text-white">
      <HeroSection />
      <InviteCard />
      <PlanVariants />
      <CTASection />
      <FooterBar />
    </div>
  );
}

export default App;
