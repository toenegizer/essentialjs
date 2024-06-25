const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const randomBoolean = () => Math.random() >= 0.5;