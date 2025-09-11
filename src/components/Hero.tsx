import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Play, Clock, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          return { days: 2, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/PvN7wXY7/image.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Navigation - Hidden on mobile */}
      <nav className="hidden lg:flex absolute top-0 left-0 right-0 z-50 justify-between items-center p-6">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-graphite font-montserrat">
            РЕЦЕПТБУК
          </div>
          <div className="flex gap-6">
            <a href="#what-inside" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Что внутри</a>
            <a href="#for-whom" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Для кого</a>
            <a href="#reviews" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Отзывы</a>
            <a href="#faq" className="text-graphite hover:text-coral-500 transition-colors font-manrope">FAQ</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://instagram.com" className="text-graphite hover:text-coral-500 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com" className="text-graphite hover:text-coral-500 transition-colors">
            <Play className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden absolute top-0 left-0 right-0 z-50 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-graphite font-montserrat">
            РЕЦЕПТБУК
          </div>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-graphite"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl p-6">
            <div className="flex flex-col gap-4">
              <a href="#what-inside" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Что внутри</a>
              <a href="#for-whom" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Для кого</a>
              <a href="#reviews" className="text-graphite hover:text-coral-500 transition-colors font-manrope">Отзывы</a>
              <a href="#faq" className="text-graphite hover:text-coral-500 transition-colors font-manrope">FAQ</a>
              <div className="flex gap-4 pt-4 border-t">
                <a href="https://instagram.com" className="text-graphite hover:text-coral-500 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://tiktok.com" className="text-graphite hover:text-coral-500 transition-colors">
                  <Play className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in-up">
              {/* Title */}
              <h1 className="text-4xl lg:text-6xl font-bold text-graphite mb-6 font-montserrat leading-tight">
                РЕЦЕПТБУК
                <br />
                <span className="text-lime-500">EAT&FIT</span>
              </h1>

              {/* Offer Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-8 max-w-lg">
                {/* Discount Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-lime-500" />
                  <span className="text-lime-600 font-semibold font-montserrat">АКЦИЯ СЕГОДНЯ</span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-sage line-through font-montserrat">19 €</span>
                    <span className="text-4xl font-bold text-lime-500 font-montserrat">12 €</span>
                  </div>
                </div>

                {/* Timer */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-sage" />
                    <span className="text-sage font-medium font-manrope">До конца акции:</span>
                    <span className="text-lime-600 font-bold font-montserrat">37% скидка</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-lime-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-lime-600 font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-xs text-sage font-manrope">дней</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-lime-600 font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-sage font-manrope">часов</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-lime-600 font-montserrat">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-sage font-manrope">минут</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-lime-600 font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-sage font-manrope">секунд</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-lime-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat flex items-center justify-center gap-2">
                  КУПИТЬ СО СКИДКОЙ
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Side - Author Image */}
            <div className="relative animate-fade-in-right lg:block hidden">
              <div className="relative">
                {/* Author credit */}
                <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm text-graphite font-medium font-manrope">Автор: Asya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-lime-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-coral-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-5 h-5 bg-mint-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-16 w-4 h-4 bg-terracotta-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;