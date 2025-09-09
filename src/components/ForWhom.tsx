import React from 'react';
import { Check, X, Smile, Frown } from 'lucide-react';

const ForWhom = () => {
  const forWhom = [
    "Тем, кто хочет питаться вкусно и полезно без сложных диет",
    "Занятым людям, которым нужны быстрые и здоровые рецепты",
    "Тем, кто хочет похудеть без голодания и ограничений",
    "Людям, которые устали от однообразного питания",
    "Тем, кто заботится о здоровье семьи и детей"
  ];

  const notForWhom = [
    "Тем, кто ищет волшебную таблетку для похудения",
    "Людям, которые не готовы тратить время на готовку",
    "Тем, кто хочет есть только фастфуд и сладости",
    "Людям, которые не верят в силу правильного питания",
    "Тем, кто не готов менять пищевые привычки"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Для кого этот рецептбук
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Для кого */}
          <div className="bg-gradient-to-br from-mint-50 to-lime-50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-lime-400 rounded-full flex items-center justify-center">
                <Smile className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-graphite font-montserrat">Рецептбук подходит</h3>
            </div>

            <ul className="space-y-4">
              {forWhom.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in-right"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-mint-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-graphite leading-relaxed font-manrope">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Не для кого */}
          <div className="bg-gradient-to-br from-powder-50 to-sage-50 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-sage-400 to-graphite-400 rounded-full flex items-center justify-center">
                <Frown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-graphite font-montserrat">Рецептбук НЕ подходит</h3>
            </div>

            <ul className="space-y-4">
              {notForWhom.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-4 animate-fade-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-6 h-6 bg-sage-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-graphite leading-relaxed font-manrope">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;