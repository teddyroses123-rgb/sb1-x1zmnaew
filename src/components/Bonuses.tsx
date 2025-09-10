import React from 'react';
import { Gift, Sparkles, Clock, Star } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      icon: "https://i.ibb.co/R4T0DYTX/image.png",
      title: "30 рецептов смузи",
      description: "Детокс-смузи для очищения организма и ускорения метаболизма",
      value: "БОНУС",
      bgColor: "from-yellow-100 to-yellow-200",
      textColor: "text-yellow-800"
    },
    {
      icon: "https://i.ibb.co/Q1LSCHC/image.png",
      title: "Гид по суперфудам",
      description: "Полный справочник полезных продуктов и их свойств",
      value: "БОНУС",
      bgColor: "from-blue-100 to-blue-200",
      textColor: "text-blue-800"
    },
    {
      icon: "https://i.ibb.co/p6jKNLy1/image.png",
      title: "Планы питания на неделю",
      description: "Готовые меню на 7 дней с рецептами и списками покупок",
      value: "БОНУС",
      bgColor: "from-green-100 to-green-200",
      textColor: "text-green-800"
    },
    {
      icon: "https://i.ibb.co/XhNmmLM/image.png",
      title: "Рецепты для особых случаев",
      description: "Праздничные блюда, которые не навредят фигуре",
      value: "БОНУС",
      bgColor: "from-purple-100 to-purple-200",
      textColor: "text-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-mint-100 via-sage-50 to-powder-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Эксклюзивные бонусы
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            К основному рецептбуку вы получите ценные дополнения абсолютно бесплатно
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${bonus.bgColor} rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-coral-300 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3 shadow-lg">
                  <img 
                    src={bonus.icon} 
                    alt={bonus.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold ${bonus.textColor} font-montserrat`}>
                      {bonus.title}
                    </h3>
                    <span className="text-white font-bold text-sm bg-coral-500 px-3 py-1 rounded-full font-montserrat shadow-lg">
                      {bonus.value}
                    </span>
                  </div>
                  
                  <p className={`${bonus.textColor} leading-relaxed font-manrope text-sm`}>
                    {bonus.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <Sparkles className="w-6 h-6 text-coral-500" />
            <span className="text-graphite-800 font-bold font-manrope text-lg">
              Общая стоимость бонусов: 
              <span className="text-coral-500 font-bold text-2xl ml-2 font-montserrat">25 €</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;