import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, Dumbbell, User, BookOpen, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpecialOffer = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-vanilla-100"></div>
      
      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 w-8 h-8 text-lime-400 transform rotate-45 opacity-60">🍃</div>
      <div className="absolute top-40 right-20 w-6 h-6 text-green-400 transform -rotate-12 opacity-50">🍃</div>
      <div className="absolute bottom-32 left-16 w-10 h-10 text-mint-400 transform rotate-12 opacity-40">🍃</div>
      <div className="absolute bottom-20 right-32 w-8 h-8 text-lime-500 transform -rotate-45 opacity-60">🍃</div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Left Side - Photo */}
            <div className="relative -ml-12">
              <img 
                src="https://i.ibb.co/60S5Z2FK/removebg-preview.png"
                alt="Ася - автор рецептов"
                className="w-full h-auto max-w-xl mx-auto"
                style={{ minHeight: '600px', objectFit: 'contain' }}
              />
            </div>

            {/* Right Side - About Me Text Block */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl min-h-[600px] flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-graphite mb-6 font-montserrat">
                ОБО МНЕ
              </h2>
              
              <div className="space-y-4 text-graphite leading-relaxed font-manrope">
                <p>
                  Привет! Меня зовут <strong>Ася</strong>, и я сертифицированный фитнес-тренер, 
                  который активно изучает нутрициологию. Готовлюсь к соревнованиям по фитнес-бикини, 
                  тренируюсь сама и помогаю другим достигать своих целей.
                </p>
                
                <p>
                  Мой личный результат — <strong className="text-coral-500">минус 20 кг</strong>, 
                  подтянутое тело, красивый пресс и, самое главное, огромная любовь к вкусной 
                  и полезной еде без ограничений и запретов.
                </p>
                
                <p>
                  Моя миссия — показать вам по-новому, без страха и строгих диет, 
                  что такое настоящее сбалансированное питание. Я верю, что здоровый 
                  образ жизни должен приносить радость, а не стресс.
                </p>
                
                <p>
                  В этом рецептбуке я собрала все свои любимые рецепты, которые помогли 
                  мне и тысячам моих подписчиков обрести стройность и энергию. 
                  Каждое блюдо проверено лично мной!
                </p>
              </div>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-graphite font-montserrat">5000+</div>
                    <div className="text-sm text-sage font-manrope">подписчиков</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-lime-400 to-green-400 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-graphite font-montserrat">-20 кг</div>
                    <div className="text-sm text-sage font-manrope">результат</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-graphite font-montserrat">7 лет</div>
                    <div className="text-sm text-sage font-manrope">опыта</div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-coral-500 to-terracotta-400 text-white py-4 rounded-2xl font-bold text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat flex items-center justify-center gap-2">
                  ПОЛУЧИТЬ РЕЦЕПТЫ АСИ
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center gap-2 text-sage">
                    <Shield className="w-5 h-5 text-mint-500" />
                    <span className="font-medium font-manrope">Безопасная оплата • Мгновенный доступ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-terracotta-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-coral-500 to-terracotta-400 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <h3 className="text-3xl lg:text-4xl font-bold font-montserrat leading-tight mb-4">
                Начни питаться правильно уже сегодня!
              </h3>
              <p className="text-xl opacity-90 font-manrope">
                Присоединяйся к тысячам людей, которые уже изменили свою жизнь с помощью моих рецептов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;