const fs = require('fs');

fs.readdir(
  process.argv[2], 
  'utf8', 
  (err, files) => {
    files.forEach(file => file.includes('.' + process.argv[3]) && console.log(file));
  }
);
