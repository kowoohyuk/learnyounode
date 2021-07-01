const net = require('net');
const port = process.argv[2];

const addZero = str => ('0' + str).slice(-2);

const getDateFormat = date => {
  const year = date.getFullYear();
  const month = addZero(date.getMonth() + 1);
  const day = addZero(date.getDate());
  const hour = addZero(date.getHours());
  const minute = addZero(date.getMinutes());
  return `${year}-${month}-${day} ${hour}:${minute}`;
}

const server = net.createServer(socket => {
  socket.end(getDateFormat(new Date()) + '\n');
});

server.listen(port);