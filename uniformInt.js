const repositoryRootPath = path.resolve(__dirname, '..');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;