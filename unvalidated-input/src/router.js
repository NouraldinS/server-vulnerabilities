const { handleHomePage, handleUserLookup } = require('./handler');

module.exports = (req, res) => {
  const { url } = req;
  console.log('>>>>>', url, '<<<<<');
  if (url === '/') {
    handleHomePage(req, res);
  } else if (url === '/UserLookup') {
    handleUserLookup(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.end('<h1>Error 404 Page Not Found</h1>');
  }
};
