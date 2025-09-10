import React, { useState, useEffect } from 'react';
import { Clock, Star, Zap, ArrowRight, Gift } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyItWorks = () => {
  const headerRef = useScrollAnimation();
  const offerRef = useScrollAnimation();
  const timerRef = useScrollAnimation();
  const buttonRef = useScrollAnimation();
  const benefitsRef = useScrollAnimation();

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

  const benefits = [
    "200+ проверенных рецептов",
    "Мгновенный доступ после оплаты", 
    "Бонусы в подарок",
    "Пожизненный доступ",
    "Подходит для всей семьи"
  ];

  return (
    <section className="py-6 bg-gradient-to-br from-coral-500 via-terracotta-500 to-coral-600 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-lime-300/15 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-4 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-3 animate-bounce-subtle">
            <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
            <span className="text-white font-bold text-base font-montserrat">ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 font-montserrat leading-tight">
            Только первые 3 дня
            <span className="block text-yellow-300 animate-pulse">скидка 37%</span>
          </h2>
          
          <p className="text-lg text-white/90 font-manrope">
            Не упустите шанс изменить свою жизнь!
          </p>
        </div>

        {/* Price Section */}
        <div ref={offerRef} className="text-center mb-4 animate-on-scroll">
          <div className="inline-block bg-white/15 backdrop-blur-sm rounded-2xl p-4 mb-3 relative">
            <div className="absolute -top-3 -right-3 bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm rotate-12 animate-bounce-subtle">
              -37%
            </div>
            
            <div className="text-3xl lg:text-4xl font-bold text-white mb-2 font-montserrat">
              <span className="line-through text-white/50 text-xl lg:text-2xl">19 €</span>
              <div className="text-yellow-300 animate-pulse text-3xl lg:text-4xl">12 €</div>
            </div>
            
            <p className="text-base text-white font-manrope">
              Экономьте <span className="font-bold text-yellow-300">7 €</span> прямо сейчас!
            </p>
          </div>
        </div>

        {/* Timer */}
        <div ref={timerRef} className="max-w-sm mx-auto mb-4 animate-on-scroll">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 text-center">
            <div className="flex items-center gap-2 justify-center mb-2">
              <Clock className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="text-white font-semibold text-sm font-montserrat">До конца акции:</span>
            </div>
            
            <div className="grid grid-cols-4 gap-1 text-white">
              <div className="bg-white/30 rounded-lg p-1 text-center">
                <div className="text-lg font-bold animate-pulse font-montserrat">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">дней</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 text-center">
                <div className="text-lg font-bold animate-pulse font-montserrat">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">часов</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 text-center">
                <div className="text-lg font-bold animate-pulse font-montserrat">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">минут</div>
              </div>
              <div className="bg-white/30 rounded-lg p-1 text-center">
                <div className="text-lg font-bold animate-pulse font-montserrat">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs font-manrope">секунд</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="max-w-xl mx-auto mb-4 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-xl p-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-3 h-3 text-white" />
                </div>
                <span className="text-white font-medium text-sm font-manrope">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div ref={buttonRef} className="text-center mb-4 animate-on-scroll">
          <button className="group bg-white text-coral-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-graphite transition-all duration-300 hover:scale-110 hover:shadow-2xl mb-3 font-montserrat relative overflow-hidden animate-pulse-gentle">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-lime-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              КУПИТЬ ЗА 12 € СЕЙЧАС
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>

          <p className="text-white/80 text-xs font-manrope">
            ✓ Безопасная оплата • ✓ Мгновенный доступ • ✓ Гарантия возврата
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center max-w-lg mx-auto">
          <div className="animate-fade-in-up">
            <div className="text-2xl font-bold text-yellow-300 mb-1 font-montserrat">5247+</div>
            <div className="text-white/80 text-xs font-manrope">покупателей</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold text-lime-300 mb-1 font-montserrat">98%</div>
            <div className="text-white/80 text-xs font-manrope">довольных</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-2xl font-bold text-white mb-1 font-montserrat">200+</div>
            <div className="text-white/80 text-xs font-manrope">рецептов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;