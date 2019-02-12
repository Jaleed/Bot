const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
        bot.user.setStatus('Online')
        bot.user.setPresence({ game: { name: 'Your Party Die', type: 3 } })
});

bot.on('guildMemberAdd', member => {
        
        const welcomechannel = member.guild.channels.find('name','dnd-chat')
         
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription("OH HELLOOOOOOOOO! " + member.user + " has joined the Rousing Bellows campaign.")
        return welcomechannel.send(embed)
        
});

bot.on('guildMemberAdd', member => {
        
        let role = member.guild.roles.get('454396878621114380');
        member.addRole(role).catch(console.error);
        member.sendMessage('Welcome to Rousing Bellows. \nDo not be Tiefling scum. \n \nJust kidding... we do not have prejudice here...');
});

bot.on('guildMemberRemove', member => {
        const leave = member.guild.channels.find('name','dnd-chat')
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user.tag + " has left the server. Tiefling scum.")
        return leave.send(embed)
});

bot.on('message', (message) => {
        
        const msg = message.content.toLowerCase();
        
        if(msg == '!help') {
            message.delete();
            message.channel.send('You can use these commands: \n \n!clanrules - displays clan rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
        }
        
        if(msg == '!ping') {
            message.delete();
            message.channel.send('Pong');
        }
        
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        if (command === "?20") {
            let b = args[0];

            var list = [
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
                '17',
                '18',
                '19',
                '20'
            ];
            
            var rand = Math.floor(Math.random() * 20 + 1);
            var rands = Math.floor(rand + b);

            message.delete()
            message.channel.send(`You rolled a d20 + ${b}. \nYou rolled a ` + rand + `. \nYour result is ` + rands + `.`);
        }
        
        if (command === "jaleed") {

            var list = [
                'OH HELLO!'
                'OH HELLOOO!'
                'OH HELLOOOOOO!'
                'OH HELLOOOOOOOOO!'
                'OH HELLOOOOOOOOOOOOOOOOOO!'
                'Wassup homie?',
                'How you doin?',
                'Yo.',
                'Hey there.',
                'What you need my dude?',
            ];
            
            var rand = Math.floor(Math.random() * list.length);

            message.channel.send(list[rand]);
        }
        
});

bot.login(process.env.BOT_TOKEN);
