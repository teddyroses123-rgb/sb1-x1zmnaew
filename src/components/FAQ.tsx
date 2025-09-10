import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Дорого",
      answer: "Нет 🙂 Вы берёте не файл, а живой канал + комьюнити + бонусы + мою поддержку и готовые решения «что готовить сегодня». Экономия времени и денег: меньше заказов доставки, меньше «пустых» покупок → Поэтому это выгоднее, чем разовая книга."
    },
    {
      question: "Я — вегетарианка/у меня ограничения",
      answer: "У меня в канале теги и простые замены в каждом рецепте. Если укажете свой профиль, помогу подобрать подборку под вас."
    },
    {
      question: "А если я на ГВ?",
      answer: "Канал — про общие идеи сбалансированного питания. На ГВ всё индивидуально — ориентируемся на переносимость и рекомендации вашего педиатра."
    },
    {
      question: "Нужны ли кухонные весы и супер-ингредиенты?",
      answer: "Нет. Все рецепты максимально «из магазина у дома». Весы помогают точности, но не обязательны."
    },
    {
      question: "Почему канал, а не PDF?",
      answer: "Потому что живой формат: удобный поиск по тегам, обсуждения, постоянные обновления. Это «с вами каждый день», а не файл, который «лежит мёртвым»."
    },
    {
      question: "Что за бонусы?",
      answer: "Я не выкладываю их в открытый доступ, потому что это мой личный «секретный раздел»: быстрые схемы, мини-рутины и проверенные решения. Зайдёте в канал — получите доступ к закрытому набору, который я все время пополняю. Именно ради него девчонки остаются надолго. 💛"
    },
    {
      question: "Сколько действует доступ?",
      answer: "Доступ дается навсегда. Вход один раз — польза надолго. ✨"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 z-10">
            <img 
              src="https://i.ibb.co/MDnPRNFr/image.png" 
              alt="Здоровая еда"
              className="w-full h-full object-contain"
            />
          </div>

          {/* FAQ Items positioned around the bowl */}
          <div className="relative min-h-[800px]">
            {/* Top questions */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-80">
              <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 animate-fade-in-up">
                <button
                  onClick={() => toggleFAQ(0)}
                  className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-graphite font-montserrat">
                    {faqs[0].question}
                  </h3>
                  {openIndex === 0 ? (
                    <ChevronUp className="w-5 h-5 text-coral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                      {faqs[0].answer}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Left side questions */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-72 space-y-4">
              {[1, 2].map((index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-graphite font-montserrat">
                      {faqs[index].question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-coral-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                        {faqs[index].answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side questions */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-72 space-y-4">
              {[3, 4].map((index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-graphite font-montserrat">
                      {faqs[index].question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-coral-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                        {faqs[index].answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom questions */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 space-y-4">
              {[5, 6].map((index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-graphite font-montserrat">
                      {faqs[index].question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-coral-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed font-manrope text-sm">
                        {faqs[index].answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
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