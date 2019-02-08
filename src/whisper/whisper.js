var Discord = require('discord.io');
var logger = require('winston');

function whisper(Client, Args) {
	var listener = Args[0];
	Args = Args.splice(1);

	var guild = Client.servers;
	for (member in guild.members) {
		var check = Client.getUser({
			userID: member.id
		});

		if((check.username).includes(listener)) {
			Client.sendMessage({
				to: member.id,
				message: Args.join(' ')
			});
		}
	}
	
}