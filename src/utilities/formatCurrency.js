export function formatCurrency(number) {
  const CURRENCY_FORMATTER = new Intl.NumberFormat('pt-br', { 
    currency: 'BRL', 
    style: 'currency' 
  });

  return CURRENCY_FORMATTER.format(number);
}