import React from 'react';
import Hero from './components/Hero';
import WhatInside from './components/WhatInside';
import Bonuses from './components/Bonuses';
import ForWhom from './components/ForWhom';
import WhyItWorks from './components/WhyItWorks';
import SpecialOffer from './components/SpecialOffer';
import Reviews from './components/Reviews';
import AboutAuthor from './components/AboutAuthor';
import PriceConditions from './components/PriceConditions';
import FAQ from './components/FAQ';
import FinalBlock from './components/FinalBlock';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatInside />
      <Bonuses />
      <ForWhom />
      <WhyItWorks />
      <SpecialOffer />
      <Reviews />
      <AboutAuthor />
      <PriceConditions />
      <FAQ />
      <FinalBlock />
    </div>
  );
}

export default App;