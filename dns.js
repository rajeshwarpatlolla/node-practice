const dns = require('dns');

dns.lookup('www.google.com', (err, addresses, family) => {
  if (err) {
    console.error('Error resolving DNS:', err);
  } else {
    console.log('IP Addresses:', addresses, 'family: IPV', family);
  }
});

dns.resolve('www.google.com', (err, addresses) => {
  console.log('IPv4 addresses:', addresses);
});

dns.resolve4('google.com', (err, addresses) => {
  console.log('IPv4:', addresses);
});

dns.reverse('142.250.71.110', (err, hostnames) => {
  console.log('Hostnames:', hostnames);
});

dns.resolveMx('bookguruonline.com', (err, addresses) => {
  console.log('MX records:', addresses);
});
