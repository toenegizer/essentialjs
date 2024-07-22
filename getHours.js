console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const isTabInView = () => !document.hidden;
const isWeekday = (date) => date.getDay() % 6 !== 0;