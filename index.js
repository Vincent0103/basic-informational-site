import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello, World!');
  return res.end();
});

server.listen(3000);
