const merge = [...new Set([...a, ...b])];
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);