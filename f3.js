

const dns = require("dns");
const hostname =  "john-doe.invalidtld";


try {
    const addresses = dns.lookup(hostname);
    console.log(`addresses: ${JSON.stringify(addresses)}`);
  } catch (e) {
    
    console.error(e); }