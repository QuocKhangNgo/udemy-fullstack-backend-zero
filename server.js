const http = require('node:http'); //thu vien nay co trong nodejs
const hostname = 'localhost'; //link nay bang voi localhost
const port = 1234;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n Khang Dev Server');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});