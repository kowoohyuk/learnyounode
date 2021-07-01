const http = require('http');
const url = process.argv[2];

const cb = res => {
  res.setEncoding('utf8');
  res.on('data', data => console.log(data));
};

http.get(url, cb);