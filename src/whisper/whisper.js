var Discord = require('discord.io');
var logger = require('winston');

function whisper(Client, args) {
	var reciever = args[0];

	args = args.splice(1);

	bot.sendMessage({
		to: reciever,
		message: args.join(' ')
	});
}