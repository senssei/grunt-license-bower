/*
 * grunt-license-bower
 * https://github.com/senssei/grunt-license-bower
 *
 * Copyright (c) 2014 Rafał Warzycha
 * Licensed under the MIT license.
 */

 'use strict';

 var fs = require('fs'),
 license = require('bower-license');

 module.exports = function(grunt){

	// Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('license', 'Generates list of bower licenses for your project', function() {
    	var done = this.async();

    	var defaults = {
    		start: '.',
    		unknown: false,
    		depth: 1,
    		include: 'all',
    		output: 'LICENSES'
    	};
    	var options = grunt.util._.extend(defaults, this.data);

    	license.init(options, function(data){
            if (options.output) {
                fs.writeFileSync(options.output, JSON.stringify(data, null, 4));
                console.log('Successfully written '.green + options.output.grey);
            }
            done();
    	});	
    });

};
