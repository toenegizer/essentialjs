const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
console.log( "A" - "B" + 2);