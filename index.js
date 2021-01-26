const crypto = require('crypto');


function urlShaEncode(url,algo) {
  return crypto.createHash(algo).update(url).digest('hex');
}


const readLineSync = require('readline-sync');

const selectedUtilityOption = parseInt(readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use?\n1.sha1 \n2. sha256\n3.sha512\n'));

console.log(`You selected ${selectedUtilityOption}`);
const urlToEncode = readLineSync.question('Please enter the url to be encoded\n');


switch(selectedUtilityOption) {
  case 1:
    const encodedURL = urlShaEncode(urlToEncode,"sha1");
    console.log(encodedURL);
    break;
  case 2:
    const sha256EncodedUrl = urlShaEncode(urlToEncode,"sha256");
    console.log(sha256EncodedUrl);
    break;
  case 3:
    const sha512EncodedUrl = urlShaEncode(urlToEncode,"sha512");
    console.log(sha512EncodedUrl);
    break;
  default:
    console.log('Invalid URL\n');
    break;
}