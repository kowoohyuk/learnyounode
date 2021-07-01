const http = require('http');
const fs = require('fs');
const [_, __, port, file] = process.argv;

const server = http.createServer((req, res) => {
  const str = fs.createReadStream(file);
  str.pipe(res);
});

server.listen(port);