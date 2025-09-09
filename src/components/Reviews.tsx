import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Анна Петрова",
      age: "29 лет",
      text: "За 2 месяца похудела на 8 кг, готовя по этим рецептам! Еда вкусная, сытная, а главное - полезная. Семья в восторге!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Мария Сидорова",
      age: "35 лет",
      text: "Наконец-то нашла рецепты, которые подходят всей семье! Дети едят с удовольствием, а я худею. Рекомендую всем мамам!",
      rating: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Елена Козлова",
      age: "42 года",
      text: "Больше не мучаюсь вопросом 'что приготовить'. Рецепты простые, продукты доступные. За месяц -5 кг без диет!",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage-50 via-powder-50 to-mint-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-graphite mb-6 font-montserrat">
            Отзывы покупателей
          </h2>
          <p className="text-xl text-sage max-w-3xl mx-auto font-manrope">
            Более 5000 человек уже изменили свою жизнь с помощью наших рецептов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-graphite text-lg font-montserrat">{review.name}</h4>
                  <p className="text-sage font-manrope">{review.age}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-coral-300 absolute -top-2 -left-2" />
                <p className="text-graphite leading-relaxed pl-6 font-manrope">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-graphite font-montserrat">4.9</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-coral-500 font-montserrat">5247+</div>
              <div className="text-sage font-manrope">довольных покупателей</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;