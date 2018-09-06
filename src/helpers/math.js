export const transformOperation = {
  '-': 'minus',
  '+': 'plus',
  '*': 'multiply',
  '/': 'divide',
};

export const operations = {
  plus: (x, y) => x + y,
  minus: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
};

export const isNumber = (number) => {
  return true; // TODO: regex101
};

export default '';
