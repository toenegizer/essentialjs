const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const resultingPromises = urls.map((url) => makHttpRequest(url));