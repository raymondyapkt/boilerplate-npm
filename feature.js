// import dns module

 //const hostname = "john-doe.invalidtld"



const dns = require("dns");
const hostname = "www.freecodecamp.org";

try {
  dns.lookup(hostname, (err, address, family) => {
    if (err) {
      console.error("An error occurred:", err);
    } else {
      console.log(`The IP address is ${address} and the IP version is ${family}`);
    }
  });
} catch (err) {
  console.error("An error occurred:", err);
}



/*
try {
  dns.lookup(hostname, (error, address, family) => {
    if (error) {
      console.error(error);
    } else {
      console.log(
        `The ip address is ${address} and the ip version is ${family}`
      );
    }
  });
} catch (err) {
  console.error("An error occurred:", err);
}



const dns = require("dns");
const hostname = "www.freecodecamp.org"
dns.lookup(hostname, (error, address, family) => {
  if (error) {
    console.error(error);
  } else {

    console.log(
      `The ip address is ${address} and the ip version is ${family}`
    );
  }
}); 

/*/