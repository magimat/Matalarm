const ALARM_PORT = "/dev/ttyUSB0"
const API_PORT = 4000
const ALARM_PIN = 12345

var express = require('express');
var app = express();
app.listen(API_PORT);

var Alarm = require('ad2usb');

var alarm = Alarm.connect('127.0.0.1', 10001, function() {

	app.get('/disarm', function(req, res){
	      alarm.disarm(ALARM_PIN);
	      res.sendStatus(200);
	});


	app.get('/arm/full', function(req, res){
	      alarm.armAway(ALARM_PIN);
	      res.sendStatus(200);
	});


	app.get('/arm/nuit', function(req, res){
	      alarm.armStay(ALARM_PIN);
	      res.sendStatus(200);
	});

	app.get('/status', function(req, res){
	      res.send(alarm.isArmed());
	});

});
