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
    <section className="py-16 relative overflow-hidden">
      {/* Curved background with gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 relative">
          {/* Curved shape */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 1200 800" className="w-full h-full">
              <path
                d="M0,0 L1200,0 L1200,600 Q900,700 600,650 Q300,600 0,700 Z"
                fill="url(#gradient)"
                className="drop-shadow-lg"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FED7AA" />
                  <stop offset="50%" stopColor="#FDBA74" />
                  <stop offset="100%" stopColor="#FB923C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-orange-600 px-6 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Large Author Photo and Info */}
          <div ref={leftContentRef} className="relative animate-on-scroll">
            {/* Main content card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Author Photo - Large and prominent */}
              <div className="text-center mb-8">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img 
                    src="https://i.ibb.co/Pst5ZD74/IMG-20250910-181202-380.jpg"
                    alt="Ася - автор рецептбука"
                    className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-orange-400"
                  />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-graphite mb-3 font-montserrat">Ася</h3>
                <p className="text-orange-600 font-semibold text-xl font-manrope">Сертифицированный фитнес-тренер</p>
              </div>

              {/* About Text */}
              <div className="text-center mb-8">
                <p className="text-graphite leading-relaxed font-manrope mb-4 text-lg">
                  <strong>Ася</strong> — сертифицированный фитнес-тренер, в процессе активного обучения на нутрициолога.
                </p>
                <p className="text-graphite leading-relaxed font-manrope mb-6 text-lg">
                  Готовится к фитнес-бикини, тренируется сама и тренирует людей. Из личного опыта: –20 кг, + подтянутое тело, +пресс + уверенность в себе и большая любовь к вкусной еде.
                </p>
                
                <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl p-6">
                  <p className="text-graphite font-medium italic font-manrope text-lg">
                    <strong>Зачем я создала канал:</strong> чтобы по-новому, без страха и запретов показать, что такое сбалансированное ПП.
                  </p>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 gap-4">
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
            </div>
          </div>

          {/* Right Side - Cards with Price & How it Works */}
          <div className="space-y-6">
            {/* Price and Conditions Cards */}
            <div ref={rightContentRef} className="grid grid-cols-2 gap-4 animate-on-scroll">
              {/* Card 1 - Price */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h4 className="text-lg font-bold text-graphite mb-4 font-montserrat flex items-center gap-2">
                  <Euro className="w-5 h-5 text-orange-500" />
                  Цена
                </h4>
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-sage line-through font-montserrat">19 €</span>
                    <span className="text-2xl font-bold text-orange-500 font-montserrat">12 €</span>
                  </div>
                  <div className="bg-orange-400 text-white px-2 py-1 rounded-full font-bold text-xs font-montserrat">-37%</div>
                </div>
                <p className="text-sage text-sm font-manrope">Цена запуска первые дни</p>
              </div>

              {/* Card 2 - Access */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h4 className="text-lg font-bold text-graphite mb-4 font-montserrat flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  Доступ
                </h4>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500 mb-2 font-montserrat">∞</div>
                  <p className="text-sage text-sm font-manrope">Навсегда</p>
                </div>
              </div>

              {/* Card 3 - Guarantee */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h4 className="text-lg font-bold text-graphite mb-4 font-montserrat flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange-500" />
                  Гарантия
                </h4>
                <p className="text-sage text-sm font-manrope">Вкуса и пользы без демонизации продуктов</p>
              </div>

              {/* Card 4 - Bonus */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h4 className="text-lg font-bold text-graphite mb-4 font-montserrat flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  Бонус
                </h4>
                <p className="text-sage text-sm font-manrope">Индивидуальный подсчёт КБЖУ для первых</p>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-graphite mb-6 font-montserrat">Как это работает:</h3>
              
              <div className="space-y-4 mb-8">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-graphite font-manrope pt-1">{step}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-4 rounded-2xl font-bold text-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4 font-montserrat flex items-center justify-center gap-2">
                КУПИТЬ ДОСТУП
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <span className="text-graphite font-medium font-manrope">Безопасная оплата</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div ref={sloganRef} className="text-center mt-16 animate-on-scroll">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
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