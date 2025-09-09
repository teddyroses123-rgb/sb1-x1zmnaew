import React from 'react';
import { BookOpen, Utensils, Heart, Users, RefreshCw, Gift, User, Play, Calculator } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatInside = () => {
  const headerRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const bonusesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const mainFeatures = [
    {
      number: "01",
      title: "55 рецептов на каждый день",
      description: "Завтраки/обеды/ужины/перекусы, у каждого — КБЖУ",
      icon: Utensils
    },
    {
      number: "02",
      title: "SOS-сладкое и ПП-десерты",
      description: "Без демонизации продуктов",
      icon: Heart
    },
    {
      number: "03",
      title: "Челлендж «7 дней завтраков»",
      description: "Стартуем сразу, чтобы войти в ритм",
      icon: Play
    },
    {
      number: "04",
      title: "Памятки и мини-гайды",
      description: "По осознанному питанию",
      icon: BookOpen
    },
    {
      number: "05",
      title: "Комьюнити-чат",
      description: "Активное сообщество единомышленников для обмена опытом, мотивации и поддержки 24/7",
      icon: Users
    },
    {
      number: "06",
      title: "Регулярное пополнение контента",
      description: "Новые рецепты, советы, бонусы и анонсы продуктов о которых вы узнаете первыми",
      icon: RefreshCw
    }
  ];

  const bonuses = [
    {
      title: "«Правильная тарелка»",
      description: "Наглядная схема баланса БЖУ и порций",
      icon: "🍽️"
    },
    {
      title: "Рекомендации по уходу за кожей",
      description: "Секреты красоты и здоровья",
      icon: "✨"
    },
    {
      title: "Видео МФР",
      description: "Миофасциальный релиз для расслабления и восстановления",
      icon: "🧘‍♀️"
    },
    {
      title: "Индивидуальный подсчёт КБЖУ",
      description: "Для первых участников канала",
      icon: "📊"
    }
  ];

  const stats = [
    { number: "4 НЕДЕЛИ", label: "МАСТЕР-КЛАССЫ" },
    { number: "СИСТЕМА ПИТАНИЯ", label: "СИСТЕМА ПИТАНИЯ" },
    { number: "ГОТОВЫЕ ЗАВТРАКИ", label: "ГОТОВЫЕ ЗАВТРАКИ" },
    { number: "79 ЧАСОВ КОНТЕНТА", label: "79 ЧАСОВ КОНТЕНТА" },
    { number: "СЕРТИФИКАТ", label: "СЕРТИФИКАТ" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/XfmX4v3q/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            О КУРСЕ
          </h2>
        </div>

        {/* Stats Bar */}
        <div ref={statsRef} className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-coral-100 text-coral-600 px-4 py-2 rounded-full text-sm font-semibold font-montserrat"
            >
              {stat.number}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Numbered List */}
          <div className="space-y-8">
            {mainFeatures.map((feature, index) => {
              const featureRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={featureRef}
                  className="flex items-start gap-6 animate-on-scroll"
                >
                  {/* Number Circle */}
                  <div className="w-12 h-12 bg-coral-500 text-white rounded-full flex items-center justify-center font-bold text-lg font-montserrat flex-shrink-0">
                    {feature.number}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-graphite mb-2 font-montserrat">
                      {feature.title}
                    </h3>
                    <p className="text-sage leading-relaxed font-manrope">
                      {feature.description}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 bg-lime-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-lime-600" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bonuses Section */}
        <div ref={bonusesRef} className="mt-20 animate-on-scroll">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 py-3 rounded-full mb-4 shadow-lg">
              <Gift className="w-5 h-5" />
              <span className="font-bold text-lg font-montserrat">БОНУСЫ</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => {
              const bonusRef = useScrollAnimation();
              return (
                <div 
                  key={index}
                  ref={bonusRef}
                  className={`rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll ${
                    index === 0 ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' :
                    index === 1 ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                    index === 2 ? 'bg-gradient-to-br from-green-100 to-green-200' :
                    'bg-gradient-to-br from-purple-100 to-purple-200'
                  }`}
                >
                  {/* Графические элементы */}
                  <div className="absolute top-4 right-4 opacity-20">
                    {index === 0 && (
                      <div className="w-12 h-12 border-4 border-yellow-400 rounded-full relative">
                        <div className="absolute inset-2 bg-yellow-400 rounded-full"></div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="w-12 h-12 relative">
                        <div className="absolute inset-0 bg-blue-400 rounded-lg transform rotate-45"></div>
                        <div className="absolute inset-2 bg-blue-300 rounded-lg transform rotate-45"></div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-12 h-12 relative">
                        <div className="w-12 h-12 bg-green-400 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-green-300 rounded-full"></div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="w-12 h-12 relative">
                        <div className="w-3 h-8 bg-purple-400 rounded-full absolute left-1"></div>
                        <div className="w-3 h-6 bg-purple-400 rounded-full absolute left-4 top-2"></div>
                        <div className="w-3 h-10 bg-purple-400 rounded-full absolute right-1 -top-1"></div>
                      </div>
                    )}
                  </div>
                  
                  <h4 className={`font-bold mb-3 text-xl font-montserrat ${
                    index === 0 ? 'text-yellow-800' :
                    index === 1 ? 'text-blue-800' :
                    index === 2 ? 'text-green-800' :
                    'text-purple-800'
                  } min-h-[3rem] flex items-center justify-center`}>{bonus.title}</h4>
                  <p className={`text-sm leading-relaxed font-manrope ${
                    index === 0 ? 'text-yellow-700' :
                    index === 1 ? 'text-blue-700' :
                    index === 2 ? 'text-green-700' :
                    'text-purple-700'
                  }`}>{bonus.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="text-center animate-on-scroll">
          <button className="group bg-gradient-to-r from-lime-400 to-green-400 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-lime-500 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat relative overflow-hidden animate-pulse-gentle before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:skew-x-12">
            <span className="relative z-10">ПОЛУЧИТЬ ДОСТУП</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatInside;