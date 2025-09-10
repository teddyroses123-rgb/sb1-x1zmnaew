import React from 'react';
import Hero from './components/Hero';
import WhatInside from './components/WhatInside';
import ForWhom from './components/ForWhom';
import WhyItWorks from './components/WhyItWorks';
import SpecialOffer from './components/SpecialOffer';
import Reviews from './components/Reviews';
import PriceConditions from './components/PriceConditions';
import FAQ from './components/FAQ';
import FinalBlock from './components/FinalBlock';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatInside />
      <ForWhom />
      <WhyItWorks />
      <SpecialOffer />
      <Reviews />
      <PriceConditions />
      <FAQ />
      <FinalBlock />
    </div>
  );
}

export default App;