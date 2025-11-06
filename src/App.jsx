import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import HowItWorks from './components/HowItWorks';
import InviteCTA from './components/InviteCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#07090b] text-white">
      <HeroSection />
      <FeatureGrid />
      <HowItWorks />
      <InviteCTA />
    </div>
  );
}

export default App;
