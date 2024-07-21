const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const executableName = getExecutableName(channel, appName);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');