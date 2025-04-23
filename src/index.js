import http from 'http';
import url from 'url';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const errorFilename = './404.html';
  let errorPageData;

  fs.readFile(errorFilename, (err, data) => {
    if (err) errorPageData = '404 Not Found';
    else errorPageData = data;
  });

  const q = url.parse(req.url, true);
  const filename = q.pathname !== '/' ? `.${q.pathname}.html` : './index.html';

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write(errorPageData);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
    }
    return res.end();
  });
});

server.listen(3000);
