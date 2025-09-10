import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, Dumbbell } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpecialOffer = () => {
  const headerRef = useScrollAnimation();
  const leftContentRef = useScrollAnimation();
  const rightContentRef = useScrollAnimation();
  const sloganRef = useScrollAnimation();

  const achievements = [
    { icon: Target, text: "–20 кг личный результат", color: "from-lime-400 to-green-400" },
    { icon: Dumbbell, text: "Подтянутое тело и пресс", color: "from-lime-400 to-green-400" },
    { icon: Award, text: "Уверенность в себе", color: "from-lime-400 to-green-400" },
    { icon: Heart, text: "Большая любовь к вкусной еде", color: "from-lime-400 to-green-400" }
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
    <section className="py-12 relative overflow-hidden">
      {/* Background Image with 40% opacity */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/xq6XmhJq/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-8 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-lime-500 text-white px-4 py-2 rounded-full shadow-lg mb-4">
            <span className="font-bold text-base font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Side - About Author */}
          <div ref={leftContentRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-on-scroll">
            {/* Photo Placeholder */}
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <img 
                  src="https://i.ibb.co/Pst5ZD74/IMG-20250910-181202-380.jpg"
                  alt="Ася - автор рецептбука"
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-lime-400"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-graphite mb-1 font-montserrat">Ася</h3>
              <p className="text-lime-600 font-medium text-sm font-manrope">Сертифицированный фитнес-тренер</p>
            </div>

            <div className="text-center mb-6">
              <p className="text-graphite leading-relaxed text-sm font-manrope">
                <strong>Ася</strong> — сертифицированный фитнес-тренер, в процессе активного обучения на нутрициолога.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <p className="text-graphite leading-relaxed text-sm font-manrope">
                Готовится к фитнес-бикини, тренируется сама и тренирует людей. Из личного опыта: –20 кг, + подтянутое тело, +пресс + уверенность в себе и большая любовь к вкусной еде.
              </p>

              <div className="bg-gradient-to-r from-lime-100 to-green-100 rounded-xl p-4">
                <p className="text-graphite font-medium italic text-sm font-manrope">
                  <strong>Зачем я создала канал:</strong> чтобы по-новому, без страха и запретов показать, что такое сбалансированное ПП.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-br ${achievement.color} rounded-lg flex items-center justify-center`}>
                    <achievement.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-graphite font-medium text-xs font-manrope">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Price & How it Works */}
          <div className="space-y-6">
            {/* Price and Conditions */}
            <div ref={rightContentRef} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl animate-on-scroll">
              <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat flex items-center gap-2">
                <Euro className="w-5 h-5 text-lime-500" />
                Цена и условия
              </h3>
              
              <div className="space-y-3 mb-4">
                {priceConditions.map((condition, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-lime-500 flex-shrink-0 mt-0.5" />
                    <span className="text-graphite text-sm font-manrope">{condition}</span>
                  </div>
                ))}
              </div>

              <div className="text-center bg-gradient-to-r from-lime-100 to-green-100 rounded-xl p-4">
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-xl text-sage line-through font-montserrat">19 €</span>
                  <span className="text-3xl font-bold text-lime-500 font-montserrat">12 €</span>
                  <div className="bg-lime-400 text-white px-2 py-1 rounded-full font-bold text-xs font-montserrat">-37%</div>
                </div>
                <p className="text-sage text-xs font-manrope">Цена запуска первые дни</p>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat">Как это работает:</h3>
              
              <div className="space-y-3 mb-6">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-lime-400 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xs font-montserrat flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-graphite text-sm font-manrope pt-0.5">{step}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-lime-500 to-green-400 text-white py-3 rounded-xl font-bold text-lg hover:from-lime-600 hover:to-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-3 font-montserrat flex items-center justify-center gap-2">
                КУПИТЬ ДОСТУП
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4 text-lime-500" />
                  <span className="text-graphite font-medium text-xs font-manrope">Безопасная оплата</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div ref={sloganRef} className="text-center mt-10 animate-on-scroll">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-lime-500 to-green-400 text-white rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-3 left-3 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
              
              <h3 className="text-2xl lg:text-3xl font-bold font-montserrat leading-tight">
              Не диета. Система: баланс, вкус и результат
            </h3>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;