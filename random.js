var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;