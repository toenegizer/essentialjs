const value = ( 5 < 7 ) ? "True" : "False" ;
const scriptRootPath = path.join(repositoryRootPath, 'script');
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');