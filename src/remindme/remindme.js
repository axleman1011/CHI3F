var Discord = require('discord.io');
var logger = require('winston');
var fs = require('fs');

exports.remindme = function(Client, Listener, Message, Reminder){
		logger.info('works');
		
		//Chi3f will write an incoming string to a file named after the user who called it
		//adding a second reminder will overwrite the first for now
		
		var reminder = "New File Contents";

		fs.writeFile('temp.txt', data, function(err, data){
    		if (err) console.log(err);
    		console.log("file created");
		});
		
};
