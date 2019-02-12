var Discord = require('discord.io');
var logger = require('winston');

exports.whisper = function(Client, Listener, Message, Whisperer) {

	var guilds = Client.servers;
	for(guild in guilds){
		logger.info(guild.name);
		for (member in guild.members) {
			logger.info(member.id);
			var listening = Client.getUser({
				userID: member.id
			});
			logger.info(listening.username);
			if((listening.username).includes(Listener)) {
				Client.sendMessage({
					to: listening.id,
					message: Message
				});
			var debug = (guild.name).concat(' ', listening.username, ' ', Listener, ' ', Whisperer);

			logger.info(debug);
			Client.sendMessage({
                to: Whisperer,
                message: debug
            });
			}
		}
	}
}