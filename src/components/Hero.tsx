import React, { useState, useEffect } from 'react';
import { Send, Instagram, Clock, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const titleRef = useScrollAnimation();
  const descriptionRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();
  const offerRef = useScrollAnimation();
  const imageRef = useScrollAnimation();

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
          // Restart timer when it reaches zero
          return { days: 2, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background with blur */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/PvN7wXY7/image.png" 
          alt="Kitchen background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-8">
          <a 
            href="#what-inside" 
            className="text-graphite-700 hover:text-coral-500 transition-colors font-medium font-manrope cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#what-inside')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Что внутри
          </a>
          <a 
            href="#about-author" 
            className="text-graphite-700 hover:text-coral-500 transition-colors font-medium font-manrope cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about-author')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Об авторе
          </a>
          <a 
            href="#for-whom" 
            className="text-graphite-700 hover:text-coral-500 transition-colors font-medium font-manrope cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#for-whom')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Для кого
          </a>
          <a 
            href="#reviews" 
            className="text-graphite-700 hover:text-coral-500 transition-colors font-medium font-manrope cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Отзывы
          </a>
          <a 
            href="#faq" 
            className="text-graphite-700 hover:text-coral-500 transition-colors font-medium font-manrope cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Вопросы
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Send className="w-4 h-4 text-white" />
          </a>
          <a href="#" className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors">
            <Instagram className="w-4 h-4 text-white" />
          </a>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 ref={titleRef} className="text-6xl lg:text-8xl font-bold text-graphite-800 leading-tight font-montserrat animate-on-scroll">
              РЕЦЕПТБУК<br />
              <span className="text-lime-500">EAT&FIT</span>
            </h1>
            
            <p ref={descriptionRef} className="text-lg text-graphite-600 leading-relaxed max-w-2xl font-manrope animate-on-scroll">
            </p>

            {/* Special Offer - Based on reference */}
            <div ref={offerRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl border border-lime-200 animate-on-scroll">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                <span className="text-lime-600 font-bold text-sm font-montserrat">АКЦИЯ СЕГОДНЯ</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="text-graphite-800 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="line-through text-lg text-gray-500">19 €</span>
                      <span className="font-bold text-3xl font-montserrat text-lime-600">12 €</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span className="text-gray-600 text-sm font-manrope">До конца акции:</span>
                    <span className="text-lime-600 font-bold text-sm font-montserrat">37% скидка</span>
                  </div>
                  
                  <button className="w-full bg-lime-400 hover:bg-lime-500 text-white py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 font-montserrat animate-pulse-gentle animate-glow-soft relative overflow-hidden">
                    КУПИТЬ СО СКИДКОЙ
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/10 to-lime-300/10 animate-shimmer-slow"></div>
                  </button>
                </div>

                <div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-lime-100 rounded-lg px-3 py-2">
                      <div className="text-lg font-bold text-graphite-800 font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-600 font-manrope">дней</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg px-3 py-2">
                      <div className="text-lg font-bold text-graphite-800 font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-600 font-manrope">часов</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg px-3 py-2">
                      <div className="text-lg font-bold text-graphite-800 font-montserrat">{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-600 font-manrope">минут</div>
                    </div>
                    <div className="bg-lime-100 rounded-lg px-3 py-2">
                      <div className="text-lg font-bold text-graphite-800 font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-gray-600 font-manrope">секунд</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="lg:justify-self-end animate-on-scroll-right">
            <div className="relative">
              <img 
                src="https://i.ibb.co/dF6RSp9/0-L5-A9235-no-bg-preview-carve-photos.png" 
                alt="Девушка с яблоком"
                className="w-full max-w-lg rounded-3xl shadow-2xl"
              />
              
              {/* Floating elements */}
              <div className="absolute top-10 -left-6 animate-float">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🥑</span>
                </div>
              </div>
              
              <div className="absolute bottom-20 -right-6 animate-float-delayed">
                <div className="w-12 h-12 bg-coral-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🍎</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 animate-bounce-gentle">
                <div className="w-10 h-10 bg-mint-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg">🥗</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-8 right-8 text-graphite-600 text-sm font-manrope">
          Автор: Asya
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-8 h-8 bg-lime-300 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-coral-300 rounded-full opacity-40 animate-float-delayed"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-mint-300 rounded-full opacity-50 animate-bounce-gentle"></div>
    </section>
  );
};

export default Hero;