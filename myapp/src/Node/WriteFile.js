var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'i AM writing new file ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});