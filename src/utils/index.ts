export const formatPrice = (price: number): string => {
  return price.toLocaleString('ru-RU') + ' ₽';
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('ru-RU');
};
