const getPriceValue = value => `${value} ${Number.isInteger(parseInt(value, 10)) ? '₽' : ''}`;

export default getPriceValue;
