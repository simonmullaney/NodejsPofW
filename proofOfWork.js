const crypto = require('crypto');

var difficulty = '000'

function randomString() {
 let longString = '';
 for (let i = 0; i < 1000000; i += 1) {
  longString += Math.random().toString(36).substr(2, 1);
 }
 return longString;
}


(function doWork() {
     const test = randomString();
     let nonce = 0;
     const startDate = new Date();
     let hash = crypto.createHash('sha256').update(test + nonce).digest('hex');


     console.log(difficulty)

     while (hash.substr(0, 3) !== difficulty) {
        hash = crypto.createHash('sha256').update(test + nonce).digest('hex');
        console.log(nonce)
        nonce += 1;
     }
     const endDate = new Date();
     console.log(`The nonce is ${nonce} with a final hash of ${hash}`);
     console.log(`${(endDate - startDate) / 1000} seconds to complete`);
}());
