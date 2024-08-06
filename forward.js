const toggleBool = () => (bool = !bool);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());