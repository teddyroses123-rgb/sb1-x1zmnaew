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
      answer: "Нет, все рецепты адаптированы под обычные продукты и простые способы измерения.",
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
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
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

        {/* FAQ Cards Grid */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`${faq.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                {faq.question}
              </h3>
              <p className="leading-relaxed font-manrope text-sm opacity-90">
                {faq.answer}
              </p>
            </div>
          ))}
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