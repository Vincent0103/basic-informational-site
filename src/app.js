import fs from 'fs';
import express from 'express';

const app = express();
let errorDataHtml;

fs.readFile('./src/404.html', (err, data) => {
  errorDataHtml = err ? '404 Not Found' : data;
});

app.get('/', (_, res) => {
  fs.readFile('./src/index.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write(errorDataHtml);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
    }
    return res.end();
  });
});

app.get('/about', (_, res) => {
  fs.readFile('./src/about.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write(errorDataHtml);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
    }
    return res.end();
  });
});

app.get('/contact-me', (_, res) => {
  fs.readFile('./src/contact-me.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/html' });
      res.write(errorDataHtml);
    } else {
      res.writeHead(200, { 'content-type': 'text/html' });
      res.write(data);
    }
    return res.end();
  });
});

app.get('*name', (_, res) => {
  res.writeHead(404, { 'content-type': 'text/html' });
  res.write(errorDataHtml);
  return res.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
