export const getPriceValue = (value) => {
  return `${value} ${Number.isInteger(parseInt(value)) ? '₽' : ''}`
};
