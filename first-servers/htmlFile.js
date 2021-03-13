const http = require('http');
const host = 'localhost';
const port = 8000;

const fs = require('fs').promises;

const requestListener = function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(home);
};

const server = http.createServer(requestListener);

var home = fs.readFile(`${__dirname}/index.html`)
  .then(markup => {
    home = markup;
    server.listen(port, host, () => {
      console.log(`Server is running on http://${host}:${port}`);
    });
  })
  .catch(err => {
    console.error(`Could not read index.html file: ${err}`);
    process.exit(1); 
  });

