import React, { useState, useEffect } from 'react';
import { Clock, Star, Zap } from 'lucide-react';

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 32
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
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-coral-500 via-terracotta-500 to-coral-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
            <Zap className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold font-montserrat">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-montserrat">
            Только сегодня
            <span className="block text-yellow-300">скидка 50%</span>
          </h2>

          <div className="text-6xl lg:text-8xl font-bold mb-8 relative font-montserrat">
            <span className="line-through text-white/50">19 €</span>
            <div className="text-5xl lg:text-7xl text-white mt-4">12 €</div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg rotate-12">
              -37%
            </div>
          </div>

          <p className="text-2xl mb-12 text-white/90 font-manrope">
            Экономьте <span className="font-bold">7 €</span> при покупке сегодня!
          </p>

          {/* Timer */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8 max-w-md mx-auto">
            <div className="flex items-center gap-2 justify-center mb-4">
              <Clock className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="text-white font-semibold font-montserrat">До конца акции осталось:</span>
            </div>
            
            <div className="flex justify-center gap-4 text-white">
              <div className="text-center">
                <div className="bg-white/30 rounded-lg px-4 py-3 text-3xl font-bold animate-pulse font-montserrat">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 font-manrope">часов</div>
              </div>
              <div className="text-center">
                <div className="bg-white/30 rounded-lg px-4 py-3 text-3xl font-bold animate-pulse font-montserrat">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 font-manrope">минут</div>
              </div>
              <div className="text-center">
                <div className="bg-white/30 rounded-lg px-4 py-3 text-3xl font-bold animate-pulse font-montserrat">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm mt-1 font-manrope">секунд</div>
              </div>
            </div>
          </div>

          <button className="group bg-white text-coral-500 px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-300 hover:text-graphite transition-all duration-300 hover:scale-110 hover:shadow-2xl mb-6 font-montserrat">
            КУПИТЬ ЗА 12 €
            <Star className="inline-block w-6 h-6 ml-2 group-hover:animate-spin" />
          </button>

          <p className="text-white/80 text-sm font-manrope">
            Безопасная оплата • Мгновенный доступ после покупки
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-float-delayed"></div>
    </section>
  );
};

export default SpecialOffer;