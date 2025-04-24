import fs from 'fs';
import path from 'path';
import express from 'express';

const app = express();

let errorDataHtml;

fs.readFile('./src/404.html', (err, data) => {
  errorDataHtml = err ? '404 Not Found' : data;
});

const routes = ['', 'about', 'contact-me'];
routes.forEach((route) => {
  app.get(`/${route}`, (_, res) => {
    const filePath = path.join(
      __dirname,
      `${route.length === 0 ? 'index' : route}.html`
    );
    res.sendFile(filePath, (err) => {
      if (err) res.status(404).type('html').send(errorDataHtml);
    });
  });
});

app.use((_, res) => {
  const filePath = path.join(__dirname, '404.html');
  res
    .status(404)
    .type('html')
    .sendFile(filePath, (err) => {
      if (err) {
        res.send('404 Not Found');
      }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
