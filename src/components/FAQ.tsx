import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Дорого",
      answer: "Нет 🙂 Вы берёте не файл, а живой канал + комьюнити + бонусы + мою поддержку и готовые решения «что готовить сегодня». Экономия времени и денег: меньше заказов доставки, меньше «пустых» покупок → Поэтому это выгоднее, чем разовая книга.",
      color: "bg-gradient-to-br from-coral-400 to-red-400 text-white"
    },
    {
      question: "Я — вегетарианка/у меня ограничения",
      answer: "У меня в канале теги и простые замены в каждом рецепте. Если укажете свой профиль, помогу подобрать подборку под вас.",
      color: "bg-gradient-to-br from-blue-400 to-blue-500 text-white"
    },
    {
      question: "А если я на ГВ?",
      answer: "Канал — про общие идеи сбалансированного питания. На ГВ всё индивидуально — ориентируемся на переносимость и рекомендации вашего педиатра.",
      color: "bg-gradient-to-br from-green-400 to-green-500 text-white"
    },
    {
      question: "Нужны ли кухонные весы и супер-ингредиенты?",
      answer: "Нет. Все рецепты максимально «из магазина у дома». Весы помогают точности, но не обязательны.",
      color: "bg-gradient-to-br from-purple-400 to-purple-500 text-white"
    },
    {
      question: "Почему канал, а не PDF?",
      answer: "Потому что живой формат: удобный поиск по тегам, обсуждения, постоянные обновления. Это «с вами каждый день», а не файл, который «лежит мёртвым».",
      color: "bg-gradient-to-br from-orange-400 to-orange-500 text-white"
    },
    {
      question: "Что за бонусы?",
      answer: "Я не выкладываю их в открытый доступ, потому что это мой личный «секретный раздел»: быстрые схемы, мини-рутины и проверенные решения. Зайдёте в канал — получите доступ к закрытому набору, который я все время пополняю. Именно ради него девчонки остаются надолго. 💛",
      color: "bg-gradient-to-br from-pink-400 to-pink-500 text-white"
    },
    {
      question: "Сколько действует доступ?",
      answer: "Доступ дается навсегда. Вход один раз — польза надолго. ✨",
      color: "bg-gradient-to-br from-teal-400 to-teal-500 text-white"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <HelpCircle className="w-6 h-6 text-coral-500" />
            <span className="text-coral-600 font-semibold font-montserrat">Частые вопросы</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Ответы на ваши вопросы
          </h2>
        </div>

        {/* Layout inspired by the reference image */}
        <div className="relative max-w-7xl mx-auto">
          {/* Central Bowl Image */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-10">
            <img 
              src="https://i.ibb.co/MDnPRNFr/image.png" 
              alt="Здоровая еда"
              className="w-full h-full object-contain"
            />
          </div>

          {/* FAQ Items positioned around the bowl */}
          <div className="relative min-h-[1000px]">
            {/* Top questions */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80">
              <div className={`rounded-2xl shadow-lg p-6 mb-4 animate-fade-in-up ${faqs[0].color}`}>
                <h3 className="text-lg font-bold mb-3 font-montserrat">
                  {faqs[0].question}
                </h3>
                <p className="leading-relaxed font-manrope text-sm opacity-90">
                  {faqs[0].answer}
                </p>
              </div>
            </div>

            {/* Left side questions */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 space-y-6">
              {[1, 2].map((index) => (
                <div key={index} className={`rounded-2xl shadow-lg p-6 animate-fade-in-up ${faqs[index].color}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold mb-3 font-montserrat">
                    {faqs[index].question}
                  </h3>
                  <p className="leading-relaxed font-manrope text-sm opacity-90">
                    {faqs[index].answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Right side questions */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 space-y-6">
              {[3, 4].map((index) => (
                <div key={index} className={`rounded-2xl shadow-lg p-6 animate-fade-in-up ${faqs[index].color}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold mb-3 font-montserrat">
                    {faqs[index].question}
                  </h3>
                  <p className="leading-relaxed font-manrope text-sm opacity-90">
                    {faqs[index].answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom questions */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 space-y-6">
              {[5, 6].map((index) => (
                <div key={index} className={`rounded-2xl shadow-lg p-6 animate-fade-in-up ${faqs[index].color}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-lg font-bold mb-3 font-montserrat">
                    {faqs[index].question}
                  </h3>
                  <p className="leading-relaxed font-manrope text-sm opacity-90">
                    {faqs[index].answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-sage mb-4 font-manrope">Не нашли ответ на свой вопрос?</p>
          <button className="bg-gradient-to-r from-mint-400 to-teal-400 text-white px-8 py-3 rounded-full font-semibold hover:from-mint-500 hover:to-teal-500 transition-all duration-300 hover:scale-105 font-montserrat">
            Написать в поддержку
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;