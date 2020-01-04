var urlExists = require('url-exists');

urlExists(' paste bot url here ', function(err, exists) {
  console.log(exists); // true
});