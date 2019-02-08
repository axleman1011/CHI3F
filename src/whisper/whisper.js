var Discord = require('discord.io');
var logger = require('winston');

export function whisper(Client, Args) {
	var listener = Args[0];
	Args = Args.splice(1);

	var guilds = Client.servers;
	for(guild in guilds){
		for (member in guild.members) {
			var listening = Client.getUser({
				userID: member.id
			});

			if((listening.username).includes(listener)) {
				Client.sendMessage({
					to: listening.id,
					message: Args.join(' ')
				});
			}
		}
	}
}