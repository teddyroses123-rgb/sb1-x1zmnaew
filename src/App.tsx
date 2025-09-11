import React from 'react';
import Hero from './components/Hero';
import WhatInside from './components/WhatInside';
import ForWhom from './components/ForWhom';
import SpecialOffer from './components/SpecialOffer';
import WhyItWorks from './components/WhyItWorks';
import Reviews from './components/Reviews';
import FinalBlock from './components/FinalBlock';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatInside />
      <ForWhom />
      <SpecialOffer />
      <WhyItWorks />
      <Reviews />
      <FinalBlock />
    </div>
  );
}

export default App;