var fs = require('fs');
fs.appendFile('mynewfile1.txt', 'Hello Ranjeet this is your append file system!', function (err) {
  if (err) throw err;
  console.log('Appened file system from Demo file ');
});