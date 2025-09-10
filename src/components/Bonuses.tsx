import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

const Bonuses = () => {
  const bonuses = [
    {
      icon: "https://i.ibb.co/R4T0DYTX/image.png",
      title: "«Правильная тарелка»",
      description: "Наглядная схема баланса БЖУ и порций",
      bgColor: "from-yellow-200 to-yellow-300",
      textColor: "text-yellow-800"
    },
    {
      icon: "https://i.ibb.co/Q1LSCHC/image.png",
      title: "Рекомендации по уходу за кожей",
      description: "Секреты красоты и здоровья",
      bgColor: "from-blue-200 to-blue-300",
      textColor: "text-blue-800"
    },
    {
      icon: "https://i.ibb.co/p6jKNLy1/image.png",
      title: "Видео МФР",
      description: "Миофасциальный релиз для расслабления и восстановления",
      bgColor: "from-green-200 to-green-300",
      textColor: "text-green-800"
    },
    {
      icon: "https://i.ibb.co/XhNmmLM/image.png",
      title: "Индивидуальный подсчёт КБЖУ",
      description: "Для первых участников канала",
      bgColor: "from-purple-200 to-purple-300",
      textColor: "text-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-mint-100 via-sage-50 to-powder-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 py-3 rounded-full mb-4 shadow-lg">
            <Gift className="w-5 h-5" />
            <span className="font-bold text-lg font-montserrat">БОНУСЫ</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Эксклюзивные бонусы
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            К основному рецептбуку вы получите ценные дополнения абсолютно бесплатно
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${bonus.bgColor} rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Иконка сверху */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <img 
                    src={bonus.icon} 
                    alt={bonus.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              
              {/* Заголовок */}
              <h4 className={`font-bold mb-3 text-xl font-montserrat ${bonus.textColor} min-h-[3rem] flex items-center justify-center`}>
                {bonus.title}
              </h4>
              
              {/* Описание */}
              <p className={`text-sm leading-relaxed font-manrope ${bonus.textColor} opacity-80`}>
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
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