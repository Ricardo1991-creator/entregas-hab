const today = function today() {
  return new Date();
};
const add = function (a, b) {
  return a + b;
};

const multiply = function (a, b) {
  return a * b;
};

const substract = (a, b) => a - b;

const PI = 3.14;

const randomNumber = (max) => Math.random() * random() * max;
//EXPORTS
export default today;

export { add, multiply, substract, PI };
