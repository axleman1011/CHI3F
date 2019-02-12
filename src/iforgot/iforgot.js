var Discord = require('discord.io');
var logger = require('winston');
var fs = require('fs');

exports.iforgot = function(Client, Listener, Message, Reminder){
		logger.info('works');
		
		//Chi3f will read the file with the name of the person who called him
		//If no file exists he'll hiss like an asshole

		fs.readFile('temp.txt', function(err, buf) {
    console.log(buf.toString());
    });
		
};
