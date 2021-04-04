const https = require('https');

const options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users?_limit=2',
  method: 'GET',
  headers: {
    Accept: 'application/json'
  }
};

var request = https.request(options, (res) => {
  if (res.statusCode != 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  var data = ''; // or an arr of bytes as nums
  res.on('data', chunk => data += chunk);
  res.on('close', () => {
    console.log('Retrieved all data');
    console.log(JSON.parse(data));
  })
});
request.end();
request.on('error', (err) => {
  console.error(`Encounterd an error trying to make a request: ${err.message}`);
});