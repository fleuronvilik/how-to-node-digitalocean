const https = require('https');

var request = https.get('https://jsonplaceholder.typicode.com/users?_limit=2', (res) => {
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
request.on('error', (err) => {
  console.error(`Encounterd an error trying to make a request: ${err.message}`);
});