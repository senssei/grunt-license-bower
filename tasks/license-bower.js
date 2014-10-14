/*
 * grunt-license-bower
 * https://github.com/senssei/grunt-license-bower
 *
 * Copyright (c) 2014 Rafał Warzycha
 * Licensed under the MIT license.
 */

 'use strict';

 var fs = require('fs'),
 license = require('bower-license'),
 colors = require('colors'),
 _ = require('lodash');

 module.exports = function(grunt){

    grunt.registerMultiTask('license', 'Generates list of bower licenses for your project', function() {
    	var done = this.async();

    	var defaults = {
    		directory: 'bower_components',
    		output: 'LICENSES'
    	};
        
    	var options = _.extend(defaults, this.data);

    	license.init(options, function(data){
            if (options.output) {
                fs.writeFileSync(options.output, JSON.stringify(data, null, 4));
                console.log('Successfully written '.green + options.output.grey);
            }
            done();
        });	
    });

};
