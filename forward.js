console.log(1 +  -"1" + "2");
const getRandomBoolean = () => Math.random() >= 0.5;
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
var arr1 = "john".split('');
const isEmptyArray = arr => !arr.length;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);