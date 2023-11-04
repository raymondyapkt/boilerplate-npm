


const hostname = "www.freecodecamp.org";

const dns = require('dns');
const readline = require('readline');
dns.lookup(hostname, (err, address, family) => {
  if (err) {
    console.log(1);
  } else {
    console.log(`The IP address is ${address} and the IP version is ${family}`);
  }

  // Prompt the user to press a key to exit
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Press any key to exit...', () => {
    rl.close();
    process.exit();
  });
});
