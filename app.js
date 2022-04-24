const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello my home page');
  } else if (req.url === '/about') {
    res.end('My little story about');
  } else {
    res.end(`
      <h1>You typed sone bullshit</h1>
      `);
  }
});

server.listen(5001);
