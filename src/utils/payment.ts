// Payment utility functions
export const PAYMENT_TOKEN = 'mfN60xiyd7wUiESlEDZYYqA';
export const PAYMENT_AMOUNT = 600; // 600 грн = 12 евро

export const initiatePayment = () => {
  // Создаем форму для отправки платежа
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://secure.wayforpay.com/pay';
  form.style.display = 'none';

  // Добавляем необходимые поля
  const fields = {
    merchantAccount: PAYMENT_TOKEN,
    merchantDomainName: window.location.hostname,
    orderReference: `order_${Date.now()}`,
    orderDate: Math.floor(Date.now() / 1000),
    amount: PAYMENT_AMOUNT,
    currency: 'UAH',
    productName: ['РЕЦЕПТБУК EAT&FIT - Доступ к каналу'],
    productPrice: [PAYMENT_AMOUNT],
    productCount: [1],
    clientFirstName: 'Клиент',
    clientLastName: 'Покупатель',
    clientEmail: 'client@example.com',
    clientPhone: '380000000000',
    language: 'RU'
  };

  // Создаем скрытые поля формы
  Object.entries(fields).forEach(([key, value]) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = Array.isArray(value) ? value.join(';') : value.toString();
    form.appendChild(input);
  });

  // Добавляем форму в DOM и отправляем
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

export const handlePaymentClick = (e: React.MouseEvent) => {
  e.preventDefault();
  initiatePayment();
};