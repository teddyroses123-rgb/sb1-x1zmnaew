import React from 'react';
import { ArrowRight, Shield, CreditCard, Smartphone, Download } from 'lucide-react';

const FinalBlock = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-graphite-900 to-graphite-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 to-terracotta-500/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 font-montserrat">
            Последний шанс получить 
            <span className="block text-transparent bg-gradient-to-r from-coral-400 to-terracotta-400 bg-clip-text">
              рецептбук со скидкой 50%
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-manrope">
            Не упустите возможность изменить свое питание и жизнь уже сегодня. 
            Начните готовить вкусно и полезно прямо сейчас!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-mint-300">✓ 200+ проверенных рецептов</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-lime-300">✓ Мгновенный доступ</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-coral-300">✓ Бонусы в подарок</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="text-6xl font-bold mb-4 font-montserrat">
              <span className="line-through text-gray-500">19 €</span>
              <span className="text-coral-400 ml-4">12 €</span>
            </div>
            <p className="text-yellow-300 text-xl font-semibold font-montserrat">Экономия 7 € только сегодня!</p>
          </div>

          <button className="group bg-gradient-to-r from-coral-500 to-terracotta-400 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl mb-8 font-montserrat flex items-center justify-center gap-2 mx-auto">
            <Download className="w-6 h-6" />
            КУПИТЬ ДОСТУП И ВОЙТИ
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint-400" />
              <span className="text-gray-300 font-manrope">Безопасная оплата</span>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <Smartphone className="w-8 h-8 text-gray-400" />
              <span className="text-gray-400 font-manrope">Visa • Mastercard • МИР • СБП</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              Ваша новая жизнь начинается сегодня!
            </h3>
            <p className="text-gray-300 font-manrope">
              Каждый день без правильного питания — это упущенная возможность 
              стать здоровее, стройнее и энергичнее. Не откладывайте на завтра!
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="text-3xl font-bold text-coral-400 mb-2 font-montserrat">5247+</div>
            <div className="text-gray-400 font-manrope">Довольных покупателей</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-mint-400 mb-2 font-montserrat">98%</div>
            <div className="text-gray-400 font-manrope">Положительных отзывов</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-lime-400 mb-2 font-montserrat">200+</div>
            <div className="text-gray-400 font-manrope">Проверенных рецептов</div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-terracotta-400 mb-2 font-montserrat">24/7</div>
            <div className="text-gray-400 font-manrope">Доступ к рецептам</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
        <p className="font-manrope">&copy; 2024 РЕЦЕПТБУК EAT&FIT. Все права защищены.</p>
        <p className="mt-2 font-manrope">
          <a href="#" className="hover:text-coral-400 transition-colors">Политика конфиденциальности</a>
          {' • '}
          <a href="#" className="hover:text-coral-400 transition-colors">Условия использования</a>
        </p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-coral-400/20 to-terracotta-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-mint-400/20 to-teal-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalBlock;