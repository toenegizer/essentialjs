const intermediateAppPath = path.join(buildOutputPath, 'app');
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);