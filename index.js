const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
        bot.user.setStatus('Online')
        bot.user.setPresence({ game: { name: 'Your Party Die', type: 3 } })
});

bot.on('guildMemberAdd', member => {
        
        const welcomechannel = member.guild.channels.find('name','off-topic')
         
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription("OH HELLOOOOOOOOO! " + member.user + " has joined the Broken Covenant campaign.")
        return welcomechannel.send(embed)
        
});

bot.on('guildMemberAdd', member => {
        
        let role = member.guild.roles.get('454396878621114380');
        member.addRole(role).catch(console.error);
        member.sendMessage('Welcome to Broken Covenant. \nDo not be Tiefling scum. \n \nJust kidding... we do not have prejudice here...');
});

bot.on('guildMemberRemove', member => {
        const leave = member.guild.channels.find('name','off-topic')
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user.tag + " has left the server. Tiefling scum.")
        return leave.send(embed)
});

bot.on('message', (message) => {
        
        const msg = message.content.toLowerCase();
        
        if(msg == '?help') {
            message.delete();
            message.channel.send('In order to roll, type **?[sides of dice] [modifier]**. \nI currently support 2, 4, 6, 8, 10, 12, 20, and 100 sided dice.');
        }
        
        if(msg == '!!!pong') {
        setTimeout(function(){ 
                message.channel.send('!!!ping'); 
        }, 3000);  
        }
        
        if(msg == '?ping') {
            message.delete();
            message.channel.send('Pong, bitch!');
        }
        
        if(msg == '?d&d') {
            message.delete();
            message.channel.send('<@&454396878621114380> D&D time! <:Kayn:510871552225705984> <:Elmar:525967482582859778> <:Kana:542918484175224852> <:Karrus:510871567392047134> <:Zircones:545368422717063192>');
        }
        
        if(msg == '?when') {
            message.delete();
            message.channel.send('Remember everyone, we play D&D at 8pm ET every Saturday!');
        }
        
        if(msg == 'jaleed, who made you?') {
            message.channel.send('<@!216628403921485824>');
        }
        
        const args = message.content.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        
        if (command === "?20") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1** - ***Critical Fail***',
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
                '**20** - ***Critical Hit***'
            ];
            
            var rand = Math.floor(Math.random() * 20 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d20 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?12") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1**',
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
                '**12**'
            ];
            
            var rand = Math.floor(Math.random() * 12 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d12 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?10") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1**',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '**10**'
            ];
            
            var rand = Math.floor(Math.random() * 10 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d10 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?8") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1**',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '**8**'
            ];
            
            var rand = Math.floor(Math.random() * 8 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d8 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?6") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1**',
                '2',
                '3',
                '4',
                '5',
                '**6**'
            ];
            
            var rand = Math.floor(Math.random() * 6 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d6 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?4") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1**',
                '2',
                '3',
                '**4**'
            ];
            
            var rand = Math.floor(Math.random() * 4 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d4 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?2") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '1',
                '2'
            ];
            
            var rand = Math.floor(Math.random() * 2 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d2 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?100") {
            var b = parseInt(args[0],10);
            
            var rand = Math.floor(Math.random() * 100 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d100 + ${b}. \nYou rolled a ` + rand + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?2o") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1** - ***Critical Fail***',
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
                '**20** - ***Critical Hit***'
            ];
            
            var rand = Math.floor(Math.random() * 3 + 18);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d20 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "?2ø") {
            var b = parseInt(args[0],10);
            
            var list = [
                '0 - uh oh that is an error',
                '**1** - ***Critical Fail***',
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
                '**20** - ***Critical Hit***'
            ];
            
            var rand = Math.floor(Math.random() * 3 + 1);
            var rands = Math.floor(rand + b);

            message.delete();
            message.reply(`You rolled a d20 + ${b}. \nYou rolled a ` + list[rand] + `. \nYour result is **` + rands + `**.`);
        }
        
        if (command === "jaleed") {

            var list = [
                'OH HELLO!',
                'OH HELLOOO?',
                'OH HELLOOOOOO?!',
                'OH HELLOOOOOOOOO???',
                'OH HELLOOOOOOOOOOOOOOOOOO!!!',
                'Welcome to my shop, the Enamored Fish! Oh!',
                'How goes the day, friend?',
                'Oy mate.',
                'Greetings to thee, fair maiden.',
                'OH! My back- OOOOH... anyway, you need something?'
            ];
            
            var rand = Math.floor(Math.random() * list.length);

            message.channel.send(list[rand]);
        }
        
        if (command === "?add") {
            let b = args[0];

            message.delete();
            bot.channels.get('454414428801335297').send(`${b}`);
        }
        
});

bot.login(process.env.BOT_TOKEN);
