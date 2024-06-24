console.log(false === '0');
const randomString = () => Math.random().toString(36).slice(2);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);