'use strict';

//var gruntLicenseBower = require('../lib/grunt-license-bower.js');

var colors = require('colors'),
fs = require('fs'),
license = require('bower-license');
// gruntLicenseBower.awesome();
// // => awesome

license.init('', function(licenseMap){
	console.log(licenseMap);
});