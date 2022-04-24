console.log(__dirname);
console.log(__filename);

// Modules
const { john, piter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade');
sayHi(john);
sayHi(piter);
console.log(data);
