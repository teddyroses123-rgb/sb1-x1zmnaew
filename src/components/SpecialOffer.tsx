import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, Dumbbell, User, BookOpen, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpecialOffer = () => {
  const headerRef = useScrollAnimation();
  const leftContentRef = useScrollAnimation();
  const sloganRef = useScrollAnimation();

  const articles = [
    {
      icon: User,
      title: "Кто такая Ася?",
      content: "Сертифицированный фитнес-тренер, в процессе активного обучения на нутрициолога. Готовится к фитнес-бикини, тренируется сама и тренирует людей.",
      color: "from-coral-400 to-terracotta-400"
    },
    {
      icon: Target,
      title: "Личные результаты",
      content: "–20 кг, подтянутое тело, пресс, уверенность в себе и большая любовь к вкусной еде.",
      color: "from-lime-400 to-green-400"
    },
    {
      icon: Heart,
      title: "Миссия канала",
      content: "По-новому, без страха и запретов показать, что такое сбалансированное правильное питание.",
      color: "from-pink-400 to-rose-400"
    },
    {
      icon: BookOpen,
      title: "Как это работает",
      content: "Нажимаешь «Купить доступ» → попадаешь в закрытый канал → начинаешь челлендж «7 дней завтраков» → получаешь бонусы.",
      color: "from-blue-400 to-indigo-400"
    },
    {
      icon: Euro,
      title: "Специальная цена",
      content: "Вместо 19 € только 12 € (скидка 37%). Пожизненный доступ ко всем материалам и обновлениям.",
      color: "from-amber-400 to-orange-400"
    },
    {
      icon: Shield,
      title: "Гарантии",
      content: "Безопасная оплата, мгновенный доступ после покупки, возврат средств в течение 14 дней.",
      color: "from-emerald-400 to-teal-400"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 to-vanilla-100"></div>
      
      <div className="container mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-terracotta-500 text-white px-8 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Articles */}
            <div ref={leftContentRef} className="animate-on-scroll space-y-6">
              {articles.map((article, index) => (
                <div 
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <article.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-graphite mb-3 font-montserrat">
                        {article.title}
                      </h3>
                      <p className="text-graphite leading-relaxed font-manrope">
                        {article.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-coral-500 to-terracotta-400 text-white py-4 rounded-2xl font-bold text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4 font-montserrat flex items-center justify-center gap-2">
                  КУПИТЬ ДОСТУП ЗА 12 €
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

            {/* Right Side - Photo like in attachment */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Photo */}
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                    alt="Ася - фитнес-тренер"
                    className="w-full h-[600px] object-cover"
                  />
                  
                  {/* Overlay with handwritten style text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Handwritten style notes */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform rotate-2">
                    <div className="text-graphite font-handwriting text-lg">
                      <div className="mb-2">Ася ✨</div>
                      <div className="text-sm text-coral-600">Фитнес-тренер</div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg transform -rotate-1">
                    <div className="text-graphite font-handwriting">
                      <div className="text-lg font-bold mb-1">-20 кг</div>
                      <div className="text-sm">личный результат</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 left-6 bg-lime-400 text-white rounded-full p-3 shadow-lg transform -rotate-12 animate-bounce-subtle">
                    <Star className="w-6 h-6" />
                  </div>
                </div>

                {/* Bottom section with key info */}
                <div className="p-6 bg-gradient-to-r from-coral-50 to-terracotta-50">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-graphite mb-2 font-montserrat">
                      Система: баланс, вкус и результат
                    </h3>
                    <p className="text-sage font-manrope">
                      Не диета — образ жизни
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slogan */}
        <div ref={sloganRef} className="text-center mt-20 animate-on-scroll relative z-10">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-coral-400 to-terracotta-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-coral-500 to-terracotta-400 text-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 left-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-6 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
              
              <h3 className="text-3xl lg:text-4xl font-bold font-montserrat leading-tight">
                Начни менять свою жизнь уже сегодня!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;