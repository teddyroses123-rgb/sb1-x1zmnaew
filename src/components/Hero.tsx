import React from 'react';
import { ArrowRight, Star, Users, Clock, Instagram, Music } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-lime-50 via-mint-50 to-sage-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-coral-200/30 to-terracotta-200/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-mint-200/30 to-lime-200/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sage-200/20 to-powder-200/20 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg font-montserrat">E</span>
            </div>
            <span className="text-2xl font-bold text-graphite font-montserrat">EAT&FIT</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/artassya?igsh=MXM3NGNxMDFtd3Vt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="https://www.tiktok.com/@artassya?fbclid=PAZXh0bgNhZW0CMTEAAafhvh5g57hgbaHZPf2kwlgnm9etZ0Khwb53SOGkoUF1cxS8wsN8Cljh54b59w_aem_t_N-afXVkUhjh_7fiNOdwg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-black rounded-xl flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Music className="w-5 h-5 text-white" />
            </a>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg mb-4 lg:mb-6">
              <Star className="w-4 lg:w-5 h-4 lg:h-5 text-coral-500" />
              <span className="text-coral-600 font-semibold text-sm lg:text-base font-montserrat">200+ РЕЦЕПТОВ</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-graphite mb-4 lg:mb-6 leading-tight font-montserrat">
              РЕЦЕПТБУК
              <span className="block text-transparent bg-gradient-to-r from-coral-500 to-terracotta-400 bg-clip-text">
                EAT&FIT
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-sage mb-6 lg:mb-8 leading-relaxed font-manrope max-w-lg">
              Здоровые рецепты для стройности и энергии. Вкусно, просто, эффективно.
            </p>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
              {[
                "Без строгих диет",
                "Простые ингредиенты", 
                "Быстрое приготовление",
                "Для всей семьи"
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-5 h-5 bg-mint-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-graphite font-medium text-sm lg:text-base font-manrope">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="flex -space-x-2">
                {[
                  "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
                  "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop",
                  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                ].map((src, index) => (
                  <img 
                    key={index}
                    src={src}
                    alt={`User ${index + 1}`}
                    className="w-8 lg:w-10 h-8 lg:h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 lg:w-4 h-3 lg:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs lg:text-sm text-sage font-manrope">
                  <span className="font-semibold text-graphite">5000+</span> довольных покупателей
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="group bg-gradient-to-r from-coral-500 to-terracotta-400 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-bold text-lg lg:text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4 lg:mb-6 font-montserrat w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                ПОЛУЧИТЬ РЕЦЕПТЫ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            
            {/* Price */}
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-2xl px-4 lg:px-6 py-2 lg:py-3">
                <span className="text-lg lg:text-xl text-sage line-through font-montserrat">19 €</span>
                <span className="text-2xl lg:text-3xl font-bold text-coral-500 font-montserrat">12 €</span>
                <div className="bg-lime-400 text-white px-2 lg:px-3 py-1 rounded-full font-bold text-xs lg:text-sm font-montserrat">-37%</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-md lg:max-w-lg mx-auto">
              <img 
                src="https://i.ibb.co/V0gMw7fn/E6-DCA96-B-AF56-4-CA1-BAB1-3-C95196837-D0-no-bg-preview-carve-photos.png"
                alt="Здоровое питание"
                className="w-full h-auto relative z-10"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-mint-400 to-lime-400 rounded-2xl p-3 lg:p-4 shadow-xl animate-float">
                <div className="text-white text-center">
                  <div className="text-lg lg:text-xl font-bold font-montserrat">200+</div>
                  <div className="text-xs lg:text-sm font-manrope">рецептов</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-2xl p-3 lg:p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-white text-center">
                  <div className="text-lg lg:text-xl font-bold font-montserrat">-15кг</div>
                  <div className="text-xs lg:text-sm font-manrope">результат</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Mobile optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-20">
          {[
            { number: "200+", label: "Рецептов" },
            { number: "5000+", label: "Покупателей" },
            { number: "15кг", label: "Средний результат" },
            { number: "24/7", label: "Поддержка" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-coral-500 mb-1 lg:mb-2 font-montserrat">{stat.number}</div>
              <div className="text-sm lg:text-base text-sage font-manrope">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;