import React from 'react';
import { Heart, Users, Clock, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ForWhom = () => {
  const headerRef = useScrollAnimation();
  const cardsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const targetAudience = [
    {
      icon: Heart,
      title: "Мамам и женщинам",
      description: "Которые хотят питаться правильно, но не знают с чего начать. Готовые решения для каждого дня.",
      color: "from-coral-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Семьям",
      description: "Рецепты, которые понравятся всем членам семьи. Никаких отдельных блюд - готовим одно на всех.",
      color: "from-mint-400 to-teal-400"
    },
    {
      icon: Clock,
      title: "Занятым людям",
      description: "Быстрые и простые рецепты из доступных продуктов. Минимум времени - максимум пользы.",
      color: "from-lime-400 to-green-400"
    },
    {
      icon: Target,
      title: "Худеющим",
      description: "Сбалансированные блюда с подсчитанным КБЖУ. Худейте вкусно и без стресса.",
      color: "from-terracotta-400 to-coral-400"
    }
  ];

  return (
    <section id="for-whom" className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Для кого этот рецептбук
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Если вы узнаете себя хотя бы в одном пункте - этот рецептбук точно для вас
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-on-scroll">
          {targetAudience.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-graphite mb-4 text-center font-montserrat">
                {item.title}
              </h3>
              
              <p className="text-sage leading-relaxed text-center font-manrope">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits List */}
        <div className="bg-gradient-to-r from-mint-100 to-sage-100 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-graphite mb-6 text-center font-montserrat">
            Почему выбирают наш рецептбук
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Проверенные рецепты с точным КБЖУ",
              "Простые ингредиенты из обычного магазина", 
              "Подходит для всей семьи",
              "Экономия времени на планировании меню",
              "Поддержка сообщества единомышленников",
              "Постоянные обновления и новые рецепты"
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-mint-500 flex-shrink-0" />
                <span className="text-graphite font-medium font-manrope">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center animate-on-scroll">
          <button className="group bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-coral-600 hover:to-terracotta-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-montserrat">
            <span className="flex items-center justify-center gap-2">
              ПОЛУЧИТЬ РЕЦЕПТЫ
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;