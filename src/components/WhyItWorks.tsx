import React from 'react';
import { Target, Brain, Heart } from 'lucide-react';

const WhyItWorks = () => {
  const reasons = [
    {
      icon: Target,
      title: "Проверенные рецепты",
      description: "Все блюда протестированы на практике и одобрены нутрициологами для здорового похудения",
      color: "from-coral-400 to-terracotta-400"
    },
    {
      icon: Brain,
      title: "Научный подход",
      description: "Рецепты основаны на принципах правильного питания и сбалансированного рациона",
      color: "from-mint-400 to-teal-400"
    },
    {
      icon: Heart,
      title: "Вкусно и полезно",
      description: "Каждое блюдо не только полезное, но и невероятно вкусное - никаких пресных диетических блюд",
      color: "from-lime-400 to-green-400"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Почему это работает
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Наши рецепты помогают худеть естественно, без стресса для организма и 
            <span className="text-coral-500 font-semibold"> с удовольствием от еды</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className={`flex items-center gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''} animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center`}>
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-coral-500 font-semibold text-lg font-montserrat">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-graphite font-montserrat">{reason.title}</h3>
                  </div>
                </div>
                
                <p className="text-sage text-lg leading-relaxed font-manrope">
                  {reason.description}
                </p>
              </div>
              
              <div className="w-64 h-48 bg-gradient-to-br from-powder-100 to-sage-100 rounded-3xl flex items-center justify-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${reason.color} rounded-full opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-mint-100 to-sage-100 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral-500 font-montserrat">98%</div>
              <div className="text-sage font-medium font-manrope">довольных</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-mint-500 font-montserrat">5000+</div>
              <div className="text-sage font-medium font-manrope">покупателей</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-500 font-montserrat">200+</div>
              <div className="text-sage font-medium font-manrope">рецептов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;