const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 4000;

http.createServer(router).listen(PORT, () => console.log(`Server running on port ${PORT}`));
