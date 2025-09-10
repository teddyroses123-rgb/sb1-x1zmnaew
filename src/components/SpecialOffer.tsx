import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, User, Dumbbell } from 'lucide-react';

const SpecialOffer = () => {
  const achievements = [
    { icon: Target, text: "–20 кг личный результат", color: "from-coral-400 to-terracotta-400" },
    { icon: Dumbbell, text: "Подтянутое тело и пресс", color: "from-mint-400 to-teal-400" },
    { icon: Award, text: "Уверенность в себе", color: "from-lime-400 to-green-400" },
    { icon: Heart, text: "Большая любовь к вкусной еде", color: "from-sage-400 to-powder-400" }
  ];

  const priceConditions = [
    "Цена запуска — 12 € (первые дни), потом 19 €",
    "Доступ — навсегда",
    "Гарантия вкуса и пользы: ты будешь есть вкусно и двигаться к цели без демонизации продуктов"
  ];

  const howItWorks = [
    "Нажимаешь «Купить доступ» и оплачиваешь",
    "Попадаешь внутрь закрытого канала",
    "Начинаешь челлендж «7 дней завтраков» и выбираешь рецепты под свой день",
    "Ловишь бонусы запуска; первым участникам — индивидуальный подсчёт КБЖУ"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image with 40% opacity */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/xq6XmhJq/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-500 text-white px-6 py-3 rounded-full shadow-lg mb-6">
            <User className="w-6 h-6" />
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - About Author */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-graphite mb-2 font-montserrat">Ася</h3>
              <p className="text-coral-600 font-semibold font-manrope">Сертифицированный фитнес-тренер</p>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-graphite leading-relaxed font-manrope">
                <strong>Ася</strong> — сертифицированный фитнес-тренер, в процессе активного обучения на нутрициолога.
              </p>
              
              <p className="text-graphite leading-relaxed font-manrope">
                Готовится к фитнес-бикини, тренируется сама и тренирует людей. Из личного опыта: –20 кг, + подтянутое тело, +пресс + уверенность в себе и большая любовь к вкусной еде.
              </p>

              <div className="bg-gradient-to-r from-mint-100 to-sage-100 rounded-2xl p-6">
                <p className="text-graphite font-medium italic font-manrope">
                  <strong>Зачем я создала канал:</strong> чтобы по-новому, без страха и запретов показать, что такое сбалансированное ПП.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center`}>
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-graphite font-medium text-sm font-manrope">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Price & How it Works */}
          <div className="space-y-8">
            {/* Price and Conditions */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-graphite mb-6 font-montserrat flex items-center gap-2">
                <Euro className="w-6 h-6 text-coral-500" />
                Цена и условия
              </h3>
              
              <div className="space-y-4 mb-6">
                {priceConditions.map((condition, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-mint-500 flex-shrink-0 mt-0.5" />
                    <span className="text-graphite font-manrope">{condition}</span>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-coral-100 to-terracotta-100 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-sage line-through font-montserrat">19 €</span>
                  <span className="text-4xl font-bold text-coral-500 font-montserrat">12 €</span>
                  <div className="bg-lime-400 text-white px-3 py-1 rounded-full font-bold text-sm font-montserrat">-37%</div>
                </div>
                <p className="text-sage text-sm font-manrope">Цена запуска первые дни</p>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-graphite mb-6 font-montserrat">Как это работает:</h3>
              
              <div className="space-y-4 mb-8">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-graphite font-manrope pt-1">{step}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-coral-500 to-terracotta-400 text-white py-4 rounded-2xl font-bold text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4 font-montserrat flex items-center justify-center gap-2">
                КУПИТЬ ДОСТУП
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-mint-500" />
                  <span className="text-graphite font-medium text-sm font-manrope">Безопасная оплата</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-coral-500 to-terracotta-400 text-white rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-montserrat">
              Не диета. Система: баланс, вкус и результат
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;