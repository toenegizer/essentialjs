const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log("0 || 1 = "+(0 || 1));
const currentDate = () => new Date().toLocaleDateString('en-US');
const flattenedArray = arr => [].concat(...arr);