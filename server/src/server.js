var express = require('express');
var app = express();
var testModule = require('./util.js');
var reverseString = testModule.reverseString;
var bodyParser = require('body-parser');

app.use(bodyParser.text());

app.use(express.static('../client/build'));

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
