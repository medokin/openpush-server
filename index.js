var express = require('express');
require('express-namespace');
var passport = require('passport');

var app = express();

require ('./config/mongoose');
require ('./config/passport');

app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());



require ('./routes')(app);




app.listen(3000);
console.log('Server started on 3000');