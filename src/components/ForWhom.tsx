import React from 'react';
import { CheckCircle, Users, Heart, Target, Clock, Star } from 'lucide-react';

const ForWhom = () => {
  const targetAudience = [
    {
      icon: Users,
      title: "Мамы в декрете",
      description: "Которые хотят быстро готовить полезную еду для всей семьи",
      color: "from-coral-400 to-red-400"
    },
    {
      icon: Heart,
      title: "Девушки, следящие за фигурой",
      description: "Желающие питаться вкусно и при этом оставаться стройными",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: Target,
      title: "Новички в ПП",
      description: "Кто только начинает путь к здоровому образу жизни",
      color: "from-lime-400 to-green-400"
    },
    {
      icon: Clock,
      title: "Занятые люди",
      description: "У кого мало времени на готовку, но есть желание питаться правильно",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  const suitabilityItems = [
    {
      category: "ПОДХОДИТ",
      items: [
        "Новичкам в ПП",
        "Мамам в декрете", 
        "Работающим девушкам",
        "Студентам",
        "Всем, кто хочет питаться вкусно и полезно"
      ],
      bgColor: "bg-gradient-to-br from-mint-400 to-green-500",
      textColor: "text-white"
    },
    {
      category: "НЕ ПОДХОДИТ",
      items: [
        "Тем, кто ищет волшебную таблетку",
        "Кто не готов менять привычки",
        "Ожидающим результат без усилий",
        "Тем, кто против здорового питания"
      ],
      bgColor: "bg-gradient-to-br from-coral-400 to-red-400", 
      textColor: "text-white"
    }
  ];

  return (
    <section id="for-whom" className="py-20 bg-gradient-to-b from-vanilla-50 to-cream-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Для кого этот рецептбук
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Идеально подойдет тем, кто ценит свое время и здоровье
          </p>
        </div>

        {/* Target Audience Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {targetAudience.map((audience, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                <audience.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat">
                {audience.title}
              </h3>
              
              <p className="text-sage leading-relaxed font-manrope">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Suitability Section */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {suitabilityItems.map((section, index) => (
            <div 
              key={index}
              className={`${section.bgColor} rounded-3xl p-8 shadow-xl animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Star className={`w-6 h-6 ${section.textColor}`} />
                <h3 className={`text-2xl font-bold font-montserrat ${section.textColor}`}>
                  {section.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className={`flex items-start gap-3 ${section.textColor} opacity-90`}
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-manrope leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-graphite mb-4 font-montserrat">
              Узнали себя?
            </h3>
            <p className="text-sage text-lg mb-6 font-manrope">
              Тогда этот рецептбук создан специально для вас!
            </p>
            <button className="bg-gradient-to-r from-coral-500 to-terracotta-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat">
              ПОЛУЧИТЬ РЕЦЕПТЫ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;