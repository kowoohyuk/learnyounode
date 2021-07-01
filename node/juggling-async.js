const http = require('http');
const urls = process.argv.slice(2);

const cb = (res, resolve) => {
  let collect = '';
  res.setEncoding('utf8');
  res.on('data', data => (collect += data));
  res.on('end', () => resolve(collect));
};

const promises = [];
for (const url of urls) {
  promises.push(new Promise(resolve => http.get(url, res => cb(res, resolve))));
}
Promise.all(promises).then(value => console.log(value.join('\r\n')));