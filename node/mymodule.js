const fs = require('fs');

module.exports = function (dic, fileExtension, cb) {
  fs.readdir(dic, 'utf8', (err, files) => {
    if (err) return cb(err);
    cb(null, files.filter(file => file.includes('.' + fileExtension)));
  });
};
