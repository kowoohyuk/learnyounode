const mymodule = require('./mymodule.js');
const [folderPath, fileExtension] = process.argv.slice(2);

const cb = (err, files) => {
  if(err) console.error(err);
  files.forEach(file => console.log(file));
}

mymodule(folderPath, fileExtension, cb);