import React from 'react';
import { ArrowRight, Shield, CreditCard, Smartphone, Download, CheckCircle, Star, Users } from 'lucide-react';

const FinalBlock = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-graphite-900 to-graphite-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-coral-500/10 to-terracotta-500/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Повтор основного оффера */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-coral-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-coral-400" />
            <span className="text-coral-300 font-semibold font-montserrat">ВСЁ В ОДНОМ МЕСТЕ</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-montserrat">
            Все секреты здорового питания и ухода за собой –
            <span className="block text-transparent bg-gradient-to-r from-coral-400 to-terracotta-400 bg-clip-text">
              в одном клике от тебя
            </span>
          </h2>
          
          {/* Что получит пользователь */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">200+ рецептов</h3>
              <p className="text-gray-300 text-sm font-manrope">Завтраки, обеды, ужины, десерты с КБЖУ</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-mint-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">Комьюнити</h3>
              <p className="text-gray-300 text-sm font-manrope">Поддержка единомышленников 24/7</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="w-12 h-12 bg-lime-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2 font-montserrat">Бонусы</h3>
              <p className="text-gray-300 text-sm font-manrope">Гайды, МФР, уход за кожей</p>
            </div>
          </div>
        </div>

        {/* Финальный призыв */}
        <div className="text-center mb-8">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-montserrat text-transparent bg-gradient-to-r from-lime-400 to-mint-400 bg-clip-text">
            Присоединяйся к нам и начни превращать своё тело и образ жизни уже сегодня!
          </h3>
        </div>

        {/* Цена */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto mb-6">
            <div className="text-6xl font-bold mb-4 font-montserrat">
              <span className="line-through text-gray-500">19 €</span>
              <span className="text-coral-400 ml-4">12 €</span>
            </div>
            <p className="text-yellow-300 text-xl font-semibold font-montserrat">Экономия 7 € только сегодня!</p>
          </div>
        </div>

        {/* Финальная CTA кнопка */}
        <div className="text-center mb-8">
          <button className="group bg-gradient-to-r from-coral-500 to-terracotta-400 text-white px-12 py-6 rounded-full font-bold text-2xl hover:from-coral-600 hover:to-terracotta-500 transition-all duration-300 hover:scale-110 hover:shadow-2xl font-montserrat flex items-center justify-center gap-3 mx-auto animate-pulse-gentle">
            <Download className="w-6 h-6" />
            КУПИТЬ ДОСТУП И ВОЙТИ В КАНАЛ
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Гарантии и доверие */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-mint-400" />
              <span className="text-gray-300 text-sm font-manrope">Оплата 100% безопасна</span>
            </div>
            <div className="flex items-center gap-4">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <Smartphone className="w-8 h-8 text-gray-400" />
              <span className="text-gray-400 text-sm font-manrope">Visa • Mastercard</span>
            </div>
          </div>
          
          <p className="text-gray-400 text-xs font-manrope">
            ✓ Мгновенный доступ после оплаты • ✓ Пожизненный доступ • ✓ Техническая поддержка
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-400 text-xs font-manrope">
          © 2024 Здоровое питание. Все права защищены.
          {' • '}
          <a href="#" className="hover:text-coral-400 transition-colors">Политика конфиденциальности</a>
          {' • '}
          <a href="#" className="hover:text-coral-400 transition-colors">Условия использования</a>
          {' • '}
          <a href="#" className="hover:text-coral-400 transition-colors">Публичная оферта</a>
        </p>
      </footer>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-coral-400/20 to-terracotta-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-mint-400/20 to-teal-400/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default FinalBlock;