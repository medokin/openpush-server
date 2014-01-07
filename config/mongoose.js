var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin@linus.mongohq.com:10075/openpush', function (err, res) {
  if (err) {
    console.log('ERROR connecting to database: ' + err);
  } else {
    console.log('Succeeded connected to database');
  }
});
