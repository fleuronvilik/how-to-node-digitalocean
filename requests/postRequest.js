const https = require('https');

const options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/users',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

var request = https.request(options, (res) => {
  if (res.statusCode != 201) {
    console.error(`Did not get a Created from the server. Code: ${res.statusCode}`);
    res.resume();
    return;
  }

  var data = '';
  res.on('data', chunk => data += chunk);
  res.on('close', () => {
    console.log('Added new user');
    console.log(JSON.parse(data));
  })
});

const requestData = {
  name: 'New User',
  username: 'digitalocean',
  email: 'user@digitalocean.com',
  address: {
    street: 'North Pole',
    city: 'Murmansk',
    zipcode: '12345-6789',
  },
  phone: '555-1212',
  website: 'digitalocean.com',
  company: {
    name: 'DigitalOcean',
    catchPhrase: 'Welcome to the developer cloud',
    bs: 'cloud scale security'
  }
};
request.write(JSON.stringify(requestData));
request.end();

request.on('error', (err) => {
  console.error(`Encounterd an error trying to make a request: ${err.message}`);
});