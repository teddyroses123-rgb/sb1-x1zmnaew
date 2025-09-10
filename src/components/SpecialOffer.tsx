import React from 'react';
import { Award, Target, Heart, CheckCircle, ArrowRight, Shield, Euro, Dumbbell, User, BookOpen, Zap, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SpecialOffer = () => {
  const headerRef = useScrollAnimation();
  const contentRef = useScrollAnimation();

  return (
    <section id="about-author" className="py-20 relative overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/zWfZWLfH/image.png" 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>
      
      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 w-8 h-8 text-lime-400 transform rotate-45 opacity-60">🍃</div>
      <div className="absolute top-40 right-20 w-6 h-6 text-green-400 transform -rotate-12 opacity-50">🍃</div>
      <div className="absolute bottom-32 left-16 w-10 h-10 text-mint-400 transform rotate-12 opacity-40">🍃</div>
      <div className="absolute bottom-20 right-32 w-8 h-8 text-lime-500 transform -rotate-45 opacity-60">🍃</div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-green-500 text-white px-8 py-3 rounded-full shadow-lg mb-6">
            <span className="font-bold text-lg font-montserrat">ОБ АВТОРЕ / ЭКСПЕРТЕ</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
            {/* Left Side - Photo */}
            <div className="relative -ml-12">
              <img 
                src="https://i.ibb.co/cX898gTf/image.jpg"
                alt="Ася - автор рецептов"
                className="w-full h-auto max-w-xl mx-auto"
                style={{ height: '600px', objectFit: 'contain' }}
              />
              
              {/* Caption under photo */}
              <div className="mt-6 text-center max-w-lg mx-auto">
                <h3 className="text-2xl font-bold text-graphite mb-4 font-montserrat">
                  Не диета. Система: баланс, вкус и результат
                </h3>
                <p className="text-lg text-sage font-manrope">
                  Начни питаться правильно уже сегодня!
                </p>
              </div>
            </div>

            {/* Right Side - About Me Text Block */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl min-h-[600px] flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-graphite mb-6 font-montserrat">
                ОБ АВТОРЕ
              </h2>
              
              <div className="space-y-4 text-graphite leading-relaxed font-manrope">
                <p>
                  Меня зовут <strong>Ася</strong> — я сертифицированный фитнес-тренер и сейчас 
                  прохожу активное обучение на нутрициолога.
                </p>
                
                <p>
                  Готовлюсь к соревнованиям по фитнес-бикини, тренируюсь сама и тренирую людей. 
                  Из личного опыта: минус <strong className="text-lime-500">20 кг</strong>, плюс 
                  подтянутое тело, пресс, уверенность в себе и огромная любовь к вкусной еде.
                </p>
                
                <p>
                  Зачем я создала этот канал? Чтобы показать по-новому, без страха и запретов, 
                  что такое сбалансированное правильное питание.
                </p>
                
                <div className="bg-lime-50 rounded-2xl p-6 mt-6">
                  <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat">Цена и условия</h3>
                  <ul className="space-y-2 text-graphite">
                    <li>• Цена запуска — <strong className="text-lime-600">12 €</strong> (первые дни), потом 19 €.</li>
                    <li>• Доступ — навсегда.</li>
                    <li>• Гарантия вкуса и пользы: ты будешь есть вкусно и двигаться к цели без демонизации продуктов.</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-2xl p-6 mt-4">
                  <h3 className="text-xl font-bold text-graphite mb-4 font-montserrat">Как это работает:</h3>
                  <ol className="space-y-2 text-graphite">
                    <li>1. Нажимаешь «Купить доступ» и оплачиваешь.</li>
                    <li>2. Попадаешь внутрь закрытого канала</li>
                    <li>3. Начинаешь челлендж «7 дней завтраков» и выбираешь рецепты под свой день.</li>
                    <li>4. Ловишь бонусы запуска; первым участникам — индивидуальный подсчёт КБЖУ.</li>
                  </ol>
                </div>
              </div>


              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full bg-gradient-to-r from-lime-400 to-green-500 text-white py-4 rounded-2xl font-bold text-xl hover:from-lime-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat flex items-center justify-center gap-2">
                  КУПИТЬ ДОСТУП
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <div className="text-center mt-4">
                  <div className="flex items-center justify-center gap-2 text-sage">
                    <Shield className="w-5 h-5 text-mint-500" />
                    <span className="font-medium font-manrope">Безопасная оплата • Мгновенный доступ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SpecialOffer;