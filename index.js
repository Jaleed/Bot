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
            message.channel.send('You can use these commands: \n \n!clanrules - displays clan rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
        }
        
        if(msg == '!ping') {
            message.delete();
            message.channel.send('Pong');
        }
        
        if(msg == '!clanrules') {
            message.channel.send('1. At the end of the game of a formal clan activity, do not move. \n2. Do not disrespect dead bodies during clan activities, or whenever you represent the clan. \n3. During a clan activity, do not pick up a power weapon or press a switch unless you are authorized to do so.');
        }
        
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        if (command === "?how") {
            let a = args[0];
            let b = args[1];
            let name = args[2];

            var list = [
                '1, Not Really Dumb At All',
                '2, Not The Brightest Dude On The Block',
                '3, Pretty Goddamn Stupid',
                '4, Incompetent Fool',
                '5, Born And Raised In Texas',
                '6, Invested In Cryptocurrency',
                '7, Cannot Tell The Difference Between Tomatoes and Dildos',
                '8, Suffering From The Jslayer Disease',
                '9, Promoted Dreamz To Sector Leader',
                '10, Has Already Pre-Ordered Battlefront III'
            ];
            
            var rand = Math.floor(Math.random() * list.length);

            message.channel.send(`On a scale of 1-10, ${name} has received a dumbass score of ` + list[rand]);
        }
        
        if (command === "jenkins") {

            var list = [
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
