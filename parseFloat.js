const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const appName = getAppName(channel);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);