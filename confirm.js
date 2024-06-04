const arrayContains = (arr, element) => arr.includes(element);
console.log( "A" - "B" + 2);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');