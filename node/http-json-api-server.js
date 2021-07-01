const http = require('http');
const { URL } = require('url');
const port = process.argv[2];

const handleTimes = (url) => {
  const date = new Date(url.searchParams.get('iso'));
  switch (url.pathname) {
    case '/api/parsetime': return getTime(date);
    case '/api/unixtime': return getUnixTime(date);
  }
};

const getTime = time => (
  {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds(),
  }
);

const getUnixTime = time => (
  { unixtime: time.getTime() }
);

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const baseURL = 'http://' + req.headers.host + '/';
    const url = new URL(req.url, baseURL);
    res.end(JSON.stringify(handleTimes(url)));
  }
});

server.listen(port);