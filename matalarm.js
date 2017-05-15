const ALARM_PORT = "/dev/ttyUSB0"
const API_PORT = 4000

var express = require('express');

var app = express();


app.get('/disarm', function(req, res){
      res.send('disarm');
});


app.get('/arm/full', function(req, res){
      res.send('armfull');
});


app.get('/arm/nuit', function(req, res){
      res.send('armnuit');
});

app.get('/status', function(req, res){
      res.send('status');
});

