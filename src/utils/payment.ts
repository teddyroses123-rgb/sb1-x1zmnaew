// Простая интеграция с Monobank через готовую ссылку или форму
export const handlePayment = () => {
  try {
    // Вариант 1: Если у вас есть готовая ссылка на оплату от Monobank
    // window.open('https://send.monobank.ua/jar/ваша-ссылка', '_blank');
    
    // Вариант 2: Создаем форму для отправки данных
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://api.monobank.ua/api/merchant/invoice/create';
    form.target = '_blank';
    
    // Добавляем поля
    const tokenField = document.createElement('input');
    tokenField.type = 'hidden';
    tokenField.name = 'token';
    tokenField.value = 'mfN60xiyd7wUiESlEDZYYqA';
    form.appendChild(tokenField);
    
    const amountField = document.createElement('input');
    amountField.type = 'hidden';
    amountField.name = 'amount';
    amountField.value = '60000'; // 600 грн в копейках
    form.appendChild(amountField);
    
    const ccyField = document.createElement('input');
    ccyField.type = 'hidden';
    ccyField.name = 'ccy';
    ccyField.value = '980'; // UAH
    form.appendChild(ccyField);
    
    const referenceField = document.createElement('input');
    referenceField.type = 'hidden';
    referenceField.name = 'reference';
    referenceField.value = `order_${Date.now()}`;
    form.appendChild(referenceField);
    
    const destinationField = document.createElement('input');
    destinationField.type = 'hidden';
    destinationField.name = 'destination';
    destinationField.value = 'Доступ к рецептбуку EAT&FIT';
    form.appendChild(destinationField);
    
    // Добавляем форму в DOM и отправляем
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
  } catch (error) {
    console.error('Ошибка при инициации платежа:', error);
    
    // Fallback - показываем alert с инструкциями
    alert(`
Для оплаты доступа к рецептбуку (600 грн):

1. Переведите 600 грн на карту Monobank
2. В комментарии укажите ваш email
3. После оплаты вам придет ссылка на канал

Или свяжитесь с нами в Instagram: @artassya
    `);
  }
};