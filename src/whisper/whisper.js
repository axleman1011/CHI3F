var Discord = require('discord.io');
var logger = require('winston');

exports.whisper = function(Client, Listener, Message) {

	var guilds = Client.servers;
	for(guild in guilds){
		for (member in guild.members) {
			var listening = Client.getUser({
				userID: member.id
			});

			if((listening.username).includes(Listener)) {
				Client.sendMessage({
					to: listening.id,
					message: Message)
				});
			}
		}
	}
}