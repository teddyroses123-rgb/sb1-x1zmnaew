// Monobank payment integration
export const initiateMonobankPayment = () => {
  const token = 'mfN60xiyd7wUiESlEDZYYqA';
  const amount = 600; // 600 грн
  
  // Создаем форму для отправки на Monobank
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://api.monobank.ua/api/merchant/invoice/create';
  form.style.display = 'none';
  
  // Добавляем необходимые поля
  const fields = {
    token: token,
    amount: amount * 100, // Monobank принимает сумму в копейках
    ccy: 980, // Код валюты для гривны
    merchantPaymInfo: {
      reference: `order_${Date.now()}`,
      destination: 'Доступ к рецептбуку EAT&FIT',
      comment: 'Оплата доступа к закрытому каналу с рецептами'
    },
    redirectUrl: window.location.origin + '/success',
    webHookUrl: window.location.origin + '/webhook'
  };
  
  // Создаем скрытые поля формы
  Object.entries(fields).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = typeof value === 'object' ? JSON.stringify(value) : value.toString();
    form.appendChild(input);
  });
  
  // Добавляем форму в DOM и отправляем
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

export const handlePayment = () => {
  try {
    initiateMonobankPayment();
  } catch (error) {
    console.error('Ошибка при инициации платежа:', error);
    alert('Произошла ошибка при переходе к оплате. Попробуйте еще раз.');
  }
};