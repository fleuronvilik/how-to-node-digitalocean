const https = require('https');

const options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users/1',
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

var request = https.request(options, (res) => {
  if (res.statusCode != 200) {
    console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  var data = '';
  res.on('data', chunk => data += chunk);
  res.on('close', () => {
    console.log('Updated data');
    console.log(JSON.parse(data));
  })
});

const requestData = {
  username: 'digitalocean',
};
request.write(JSON.stringify(requestData));
request.end();

request.on('error', (err) => {
  console.error(`Encounterd an error trying to make a request: ${err.message}`);
});