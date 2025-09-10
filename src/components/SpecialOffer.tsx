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

  const howItWorks = [
    "Нажимаешь «Купить доступ» и оплачиваешь",
    "Попадаешь внутрь закрытого канала",
    "Начинаешь челлендж «7 дней завтраков» и выбираешь рецепты под свой день",
    "Ловишь бонусы запуска; первым участникам — индивидуальный подсчёт КБЖУ"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cream-50 to-vanilla-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Author Info (no photo) */}
          <div ref={leftContentRef} className="animate-on-scroll">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Author Info without photo */}
              <div className="mb-8">
                <h3 className="text-4xl font-bold text-graphite mb-3 font-montserrat">Ася</h3>
                <p className="text-coral-600 font-semibold text-xl font-manrope">Сертифицированный фитнес-тренер</p>
              </div>

              {/* About Text */}
              <div className="mb-8">
                <p className="text-graphite leading-relaxed font-manrope mb-4 text-lg">
                  <strong>Ася</strong> — сертифицированный фитнес-тренер, в процессе активного обучения на нутрициолога.
                </p>
                <p className="text-graphite leading-relaxed font-manrope mb-6 text-lg">
                  Готовится к фитнес-бикини, тренируется сама и тренирует людей. Из личного опыта: –20 кг, + подтянутое тело, +пресс + уверенность в себе и большая любовь к вкусной еде.
                </p>
                
                <div className="bg-gradient-to-r from-coral-100 to-terracotta-100 rounded-2xl p-6">
                  <p className="text-graphite font-medium italic font-manrope text-lg">
                    <strong>Зачем я создала канал:</strong> чтобы по-новому, без страха и запретов показать, что такое сбалансированное ПП.
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-graphite font-medium font-manrope">{achievement.text}</span>
                  </div>
                ))}
              </div>

              {/* Price and Conditions */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {/* Price */}
                <div className="bg-gradient-to-br from-coral-100 to-terracotta-100 rounded-2xl p-4 text-center">
                  <h4 className="text-lg font-bold text-graphite mb-2 font-montserrat flex items-center justify-center gap-2">
                    <Euro className="w-5 h-5 text-coral-500" />
                    Цена
                  </h4>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-sage line-through font-montserrat">19 €</span>
                    <span className="text-2xl font-bold text-coral-500 font-montserrat">12 €</span>
                  </div>
                  <div className="bg-coral-400 text-white px-2 py-1 rounded-full font-bold text-xs font-montserrat">-37%</div>
                </div>

                {/* Access */}
                <div className="bg-gradient-to-br from-mint-100 to-teal-100 rounded-2xl p-4 text-center">
                  <h4 className="text-lg font-bold text-graphite mb-2 font-montserrat flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-mint-500" />
                    Доступ
                  </h4>
                  <div className="text-2xl font-bold text-mint-500 mb-2 font-montserrat">∞</div>
                  <p className="text-sage text-sm font-manrope">Навсегда</p>
                </div>
              </div>

              {/* How it Works */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-graphite mb-6 font-montserrat">Как это работает:</h3>
                
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
                  <div className="flex items-center justify-center gap-2">
                    <Shield className="w-5 h-5 text-mint-500" />
                    <span className="text-graphite font-medium font-manrope">Безопасная оплата</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Full Author Photo */}
          <div ref={rightContentRef} className="animate-on-scroll-right">
            <div className="relative h-[800px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/Pst5ZD74/IMG-20250910-181202-380.jpg"
                alt="Ася - автор рецептбука"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              
              {/* Optional floating badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-graphite font-semibold font-montserrat">Фитнес-тренер</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div ref={sloganRef} className="text-center mt-20 animate-on-scroll">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-terracotta-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-coral-500 to-terracotta-400 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
              
              <h3 className="text-3xl lg:text-4xl font-bold font-montserrat leading-tight">
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