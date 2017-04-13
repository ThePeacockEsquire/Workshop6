var express = require('express');
var app = express();
var testModule = require('./util.js');
var reverseString = testModule.reverseString;
var bodyParser = require('body-parser');

app.get('/', function(req, res){
  res.send("Hello World!");
}
);
app.use(bodyParser.text());

app.post('/reverse', function(req,res){
  if(typeof(req.body) === 'string'){
    var reveresed = reverseString(req.body);
    res.send(reveresed);
  } else {
    res.status(400).end();
  }
});

app.listen(3000, function(){
  console.log('Example app listening on port 3000!');
});
