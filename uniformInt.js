const merge = [...new Set(a.concat(b))];
const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = Object.assign({}, obj1, obj2);
const merge = (a, b) => [...a, ...b];
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const isWeekday = (date) => date.getDay() % 6 !== 0;