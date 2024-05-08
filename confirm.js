const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const electronDownloadPath = path.join(repositoryRootPath, 'electron');