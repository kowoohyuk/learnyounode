const http = require('http');
const url = process.argv[2];

const cb = res => {
  let collect = '';
  res.setEncoding('utf8');
  res.on('data', data => collect += data);
  res.on('end', () => console.log(collect.length + '\r\n' + collect));
}

http.get(url, cb);