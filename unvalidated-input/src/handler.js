const fs = require('fs');
const path = require('path');
const database = require('./database.json');

const handleHomePage = (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'public', 'html', 'index.html'), (err, homePage) => {
    if (err) throw new Error(err);
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(homePage);
  });
};

const handleUserLookup = (req, res) => {
  let body = '';
  req.on('data', (chunk) => { body += chunk; })
    .on('end', () => {
      body = body.toString();
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(database.users.slice(-1 * Number(body.split('=')[1]))));
    });
};

module.exports = {
  handleHomePage,
  handleUserLookup,
};
