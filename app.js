var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var That = require('./models/That');


var port = 8000;

app.get('/', function(req,res){
  res.send('HI lo');
});

app.get('/that', function(req, res){
  console.log('That is how it goes');
  That.find({})
  .exec(function(err, items){
    if(err){
      res.send('Error, Error, Gearoar');
    } else {
      // console.log(items);
      res.json(items);
    }
  });
});

app.listen(port, function(){
  console.log('app listening on port' + port);
});
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/test');
