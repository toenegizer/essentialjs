const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const channelName = getChannelName(channel);