const os = require('os');
const user = os.userInfo();

// User info
console.log(user);

// OS uptime
console.log(os.uptime());

// current OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
