import React from 'react';
import { ArrowRight, Star, Users, CheckCircle, Instagram } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-50 via-mint-50 to-sage-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-400/20 to-green-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-mint-400/20 to-teal-400/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Navigation */}
        <nav className="hidden md:flex justify-between items-center mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E&F</span>
            </div>
            <span className="font-bold text-graphite text-lg font-montserrat">EAT&FIT</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/artassya?igsh=MXM3NGNxMDFtd3Vt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>
            <a 
              href="https://www.tiktok.com/@artassya?fbclid=PAZXh0bgNhZW0CMTEAAafhvh5g57hgbaHZPf2kwlgnm9etZ0Khwb53SOGkoUF1cxS8wsN8Cljh54b59w_aem_t_N-afXVkUhjh_7fiNOdwg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 shadow-lg">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              <span className="text-coral-600 font-semibold text-sm sm:text-base font-montserrat">РЕЦЕПТБУК EAT&FIT</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-graphite mb-4 sm:mb-6 leading-tight font-montserrat">
              Здоровые рецепты для 
              <span className="block text-transparent bg-gradient-to-r from-lime-500 to-green-600 bg-clip-text">
                стройности и энергии
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-sage mb-6 sm:mb-8 leading-relaxed font-manrope max-w-2xl mx-auto lg:mx-0">
              200+ проверенных рецептов с КБЖУ, которые помогут вам питаться вкусно, 
              полезно и достигать желаемой формы без диет и ограничений
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              {[
                "Завтраки, обеды, ужины",
                "КБЖУ для каждого блюда", 
                "Простые ингредиенты",
                "Подходит всей семье"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CheckCircle className="w-5 h-5 text-mint-500 flex-shrink-0" />
                  <span className="text-graphite font-medium font-manrope text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-3 sm:gap-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl">
                <span className="text-2xl sm:text-3xl text-sage line-through font-montserrat">19 €</span>
                <span className="text-3xl sm:text-4xl font-bold text-coral-500 font-montserrat">12 €</span>
                <div className="bg-lime-400 text-white px-2 sm:px-3 py-1 rounded-full font-bold text-sm font-montserrat">-37%</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:from-coral-600 hover:to-terracotta-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4 sm:mb-6 font-montserrat w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                ПОЛУЧИТЬ РЕЦЕПТЫ СЕЙЧАС
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sage text-sm font-manrope">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>5000+ довольных покупателей</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md sm:max-w-lg lg:max-w-xl w-full">
              <img 
                src="https://i.ibb.co/V0gMw7fn/E6-DCA96-B-AF56-4-CA1-BAB1-3-C95196837-D0-no-bg-preview-carve-photos.png"
                alt="Здоровые рецепты EAT&FIT"
                className="w-full h-auto animate-float"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl animate-bounce-subtle">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-coral-500 font-montserrat">200+</div>
                  <div className="text-xs sm:text-sm text-sage font-manrope">рецептов</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-lime-400 to-green-500 text-white rounded-2xl p-3 sm:p-4 shadow-xl animate-pulse-gentle">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold font-montserrat">КБЖУ</div>
                  <div className="text-xs sm:text-sm opacity-90 font-manrope">для каждого</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;