const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const uniqueArr = (arr) => [...new Set(arr)];
const randomString = () => Math.random().toString(36).slice(2);