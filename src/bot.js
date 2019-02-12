var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var whisper = require('./whisper/whisper.js');
var remindme = require('./remindme/remindme.js');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: CHI3F');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];


        args = args.splice(1);
        switch(cmd) {
		case 'help':
                	bot.sendMessage({
                    	to: channelID,
                    	message: '!whisper <username> <string> \n!remindme <string> \n!iforgot'
                });
		break;
		case 'test':
                	bot.sendMessage({
			to: channelID,
                    	message: 'Works! :champagne:'
                });
            	break;
		case 'why':
                	bot.sendMessage({
                    	to: channelID,
                    	message: 'Why not? :smiley_cat:'
                });
		break;
		case 'stop':
                	bot.sendMessage({
                    	to: channelID,
                    	message: ':crying_cat_face:'
                });
		break;
		case 'hello':
                	bot.sendMessage({
                    	to: channelID,
                    	message: 'Meow :smiley_cat:'
                });
		break;
            	case 'whisper':
                	whisper.whisper({
                    		Client: bot,
                    		Listener: args[0],
                    		Message: args.splice(1).join(' '),
                    		Whisperer: channelID
                	});
			bot.sendMessage({
                    		to: channelID,
                    		message: 'I heard you... Meow :smiley_cat:'
                	});
            	break;
		case 'remindme':
			remindme.remindme({
                    		Client: bot,
                    		Listener: args[0],
                    		Message: args.splice(1).join(' '),
                	});
			bot.sendMessage({
                    		to: channelID,
                    		message: 'I\'ll remember! :smiley_cat:'
                	});
            	break;
            	// Add whatever we want here
         }
     }
});
