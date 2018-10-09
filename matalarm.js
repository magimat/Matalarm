var express = require('express');
var app = express();
app.listen(80);

var Alarm = require('./ad2usb');

hostIp = require('child_process').execSync("ip route show | awk '/default/ {print $3}'").toString('utf8');

var mqtt = require('mqtt')

var clientMQTT  = mqtt.connect('mqtt://' + hostIp)



var alarm = Alarm.connect(hostIp, 10000, function() {

	alarm.on('fault', function(zone) {

    	//motion
    	if(zone == 3 || zone == 4) {
	    	clientMQTT.publish('smartthings/zone' + zone + '/motion', 'active')

    	}
    	else {
    	// contact
			clientMQTT.publish('smartthings/zone' + zone + '/contact', 'open')
		}
  	});


	alarm.on('ready', function() {
	    clientMQTT.publish('smartthings/zone1/contact', 'closed')
	    clientMQTT.publish('smartthings/zone2/contact', 'closed')
	    clientMQTT.publish('smartthings/zone3/motion', 'inactive')
	    clientMQTT.publish('smartthings/zone4/motion', 'inactive')

  	});


	app.get('/disarm', function(req, res){
	      alarm.disarm(process.env.PIN);
	      res.sendStatus(200);
	});


	app.get('/arm/full', function(req, res){
	      alarm.armAway(process.env.PIN);
	      res.sendStatus(200);
	});


	app.get('/arm/nuit', function(req, res){
	      alarm.armStay(process.env.PIN);
	      res.sendStatus(200);
	});

	app.get('/status', function(req, res){
	      res.send(alarm.isArmed());
	});

});
