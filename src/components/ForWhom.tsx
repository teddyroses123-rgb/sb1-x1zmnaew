import React from 'react';

const FAQ = () => {
  const faqItems = [
    {
      question: "Дорого",
      answer: "Нет 😊 Вы берёте не файл, а живой канал + комьюнити + бонусы + мою поддержку и готовые решения + что готовить сегодня. Экономия времени и денег: меньше заказов доставки, меньше «пустых» покупок — Поэтому это выгоднее, чем развозная книга.",
      bgColor: "bg-gradient-to-br from-coral-400 to-red-400",
      textColor: "text-white"
    },
    {
      question: "Я — вегетарианка/у меня ограничения",
      answer: "У меня в канале тегн и простые замены в каждом рецепте. Если укажете свой профиль, помогу подобрать подборку под вас.",
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
      textColor: "text-white"
    },
    {
      question: "А если я на ГВ?",
      answer: "Канал — про общие идеи сбалансированного питания. На ГВ всё индивидуально — рекомендую консультацию с нутрициологом или врачом для персональности и рекомендаций именно вашего педиатра.",
      bgColor: "bg-gradient-to-br from-green-400 to-green-500",
      textColor: "text-white"
    },
    {
      question: "Нужны ли кухонные весы и супер-ингредиенты?",
      answer: "Нет. Все рецепты максимально из магазина у дома. Весы помогают точности, но не обязательны.",
      bgColor: "bg-gradient-to-br from-purple-400 to-purple-500",
      textColor: "text-white"
    },
    {
      question: "Почему канал, а не PDF?",
      answer: "Потому что живой формат: удобный поиск по тегам, обсуждения, постоянные обновления. Это не файл, который «лежит мёртвым».",
      bgColor: "bg-gradient-to-br from-orange-400 to-orange-500",
      textColor: "text-white"
    },
    {
      question: "Что за бонусы?",
      answer: "Я не выкладываю их в открытый доступ, потому что это мой личный «секретный раздел». Быстрые схемы, мини-гутаны и проверенные решения. Зайдёте в канал — получите доступ к закрытому набору, который я всё время пополняю. Именно ради него девочки остаются надолго. 💜",
      bgColor: "bg-gradient-to-br from-pink-400 to-pink-500",
      textColor: "text-white"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite-800 mb-6 font-montserrat">
            Ответы на ваши вопросы
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`${item.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-bold mb-4 font-montserrat ${item.textColor}`}>
                {item.question}
              </h3>
              <p className={`leading-relaxed font-manrope ${item.textColor} opacity-90`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-graphite-600 text-lg mb-6 font-manrope">
            Не нашли ответ на свой вопрос?
          </p>
          <button className="bg-gradient-to-r from-mint-400 to-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-mint-500 hover:to-green-600 transition-all duration-300 hover:scale-105 hover:shadow-xl font-montserrat">
            Написать в поддержку
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;