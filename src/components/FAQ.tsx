import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "В каком формате предоставляются рецепты?",
      answer: "Все рецепты предоставляются в удобном PDF-формате, который можно скачать на любое устройство, распечатать или читать с экрана. Файл содержит красочные фотографии блюд и пошаговые инструкции."
    },
    {
      question: "Подходят ли рецепты для вегетарианцев?",
      answer: "Да! В рецептбуке есть большой раздел вегетарианских и веганских блюд. Каждый рецепт помечен соответствующими значками, так что вы легко найдете подходящие варианты."
    },
    {
      question: "Сложно ли готовить по этим рецептам?",
      answer: "Все рецепты адаптированы для домашней кухни и не требуют профессиональных навыков. Большинство блюд готовится за 15-45 минут из доступных продуктов."
    },
    {
      question: "Есть ли рецепты для детей?",
      answer: "Конечно! Многие рецепты подходят для всей семьи, включая детей. Есть специальный раздел с детскими завтраками, полдниками и полезными сладостями без сахара."
    },
    {
      question: "Можно ли вернуть деньги, если рецепты не понравятся?",
      answer: "Да, мы предоставляем гарантию возврата денег в течение 14 дней после покупки, если рецептбук вам не подошел по любой причине."
    },
    {
      question: "Как быстро я получу доступ к рецептам?",
      answer: "Сразу после оплаты! Ссылка на скачивание придет на вашу электронную почту в течение 2-3 минут. Также вы сможете скачать файл прямо со страницы благодарности."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-sage-50 to-powder-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg mb-6">
            <HelpCircle className="w-6 h-6 text-coral-500" />
            <span className="text-coral-600 font-semibold font-montserrat">Частые вопросы</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Ответы на ваши вопросы
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Собрали самые популярные вопросы от наших покупателей
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-sage-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-terracotta-400 rounded-full flex items-center justify-center text-white font-bold text-sm font-montserrat">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-graphite pr-4 font-montserrat">
                    {faq.question}
                  </h3>
                </div>
                
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-coral-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-sage-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-slide-down">
                  <div className="pl-12">
                    <p className="text-sage leading-relaxed font-manrope">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
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