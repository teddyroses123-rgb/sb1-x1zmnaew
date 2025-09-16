// Интеграция с Monobank для оплаты
export const handlePayment = () => {
  try {
    // Создаем запрос к Monobank API с правильными заголовками
    const paymentData = {
      amount: 60000, // 600 грн в копейках
      ccy: 980, // UAH
      merchantPaymInfo: {
        reference: `order_${Date.now()}`,
        destination: 'Доступ к рецептбуку EAT&FIT',
        comment: 'Покупка доступа к закрытому каналу с рецептами'
      },
      redirectUrl: window.location.href,
      webHookUrl: `${window.location.origin}/webhook`
    };

    // Отправляем запрос с правильными заголовками
    fetch('https://api.monobank.ua/api/merchant/invoice/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': 'mfN60xiyd7wUiESlEDZYYqA'
      },
      body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.invoiceId && data.pageUrl) {
        // Перенаправляем на страницу оплаты
        window.open(data.pageUrl, '_blank');
      } else {
        throw new Error('Не удалось создать инвойс');
      }
    })
    .catch(error => {
      console.error('Ошибка создания инвойса:', error);
      showFallbackPayment();
    });
    
  } catch (error) {
    console.error('Ошибка при инициации платежа:', error);
    showFallbackPayment();
  }
};

// Fallback метод оплаты
const showFallbackPayment = () => {
  alert(`
Для оплаты доступа к рецептбуку (600 грн):

1. Переведите 600 грн на карту Monobank
2. В комментарии укажите ваш email или Telegram
3. После оплаты вам придет ссылка на канал

Или свяжитесь с нами в Instagram: @artassya

Спасибо за покупку! 💚
  `);
};