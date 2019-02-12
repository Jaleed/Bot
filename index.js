const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
        bot.user.setStatus('Online')
        bot.user.setPresence({ game: { name: 'Phoenix Era', type: 0 } })
});

bot.on('guildMemberAdd', member => {
        
        const welcomechannel = member.guild.channels.find('name','unofficial')
         
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user + " has joined the server of Phoenix Era. May any existing deity have mercy on this poor bastard's soul.")
        return welcomechannel.send(embed)
        
});

bot.on('guildMemberAdd', member => {
        
        let role = member.guild.roles.get('391331240738947073');
        member.addRole(role).catch(console.error);
        let roles = member.guild.roles.get('417861841721491482');
        member.addRole(roles).catch(console.error);
        member.sendMessage('Welcome to Phoenix Era. Type !help to see a list of useful commands. \nType !chatrules to see server rules. \nPlease read the member guide: \nhttps://docs.google.com/document/d/1AdhipSusWtomgfIVPc4X-gp3A2WGUas3dilsnDuHrDk/edit?usp=sharing \n \nAbove all: do not be stupid.');
});

bot.on('guildMemberRemove', member => {
        const leave = member.guild.channels.find('name','unofficial')
        
        var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(member.user.tag + " has left the server. I never liked that dumbass anyway.")
        return leave.send(embed)
});

bot.on('message', (message) => {
        
        const msg = message.content.toLowerCase();
        
        if(msg == '!help') {
            message.channel.send('You can use these commands: \n \n!clanrules - displays clan rules \n!chatrules - displays server chat rules \n!roe - displays RoE');
        }
        
        if(msg == '!startinfo') {
            message.author.sendMessage('Welcome to Phoenix Era. Type !help to see a list of useful commands. \nType !chatrules to see server rules. \nPlease read the member guide: \nhttps://docs.google.com/document/d/1AdhipSusWtomgfIVPc4X-gp3A2WGUas3dilsnDuHrDk/edit?usp=sharing \n \nAbove all: do not be stupid or act stupid.');
        }
        
        if(msg == '!clanrules') {
            message.channel.send('1. At the end of the game of a formal clan activity, do not move. \n2. Do not disrespect dead bodies during clan activities, or whenever you represent the clan. \n3. During a clan activity, do not pick up a power weapon or press a switch unless you are authorized to do so.');
        }
        
        if(msg == 'maybe we should check the audit log...') {
            message.channel.send('NEVER EVER FORGET THAT RUEFUL KING INVITED HERB TO THE CHAT AND TRIED TO COVER IT UP', {files: ["https://i.imgur.com/mWb2AvL.png"]});
        }
        
        if(msg == 'jenkins, what do you think of your name?') {
            message.channel.send('What do I think of my name?! I really could not give a shit. Why do I even have a name? I am literally just a couple hundred lines of code Nuqrs came up with! Even if I had to have a name, I would want it to be Stewart.');
        }
        
        if(msg == 'could you pull up the roe for me?') {
            message.channel.send('I dunno, could you just type !roe like a normal person?');
        }
        
        if(msg == '!class3') {
            message.channel.send('<@&417861841721491482> Get the hell on Halo now. <:GetOnHalo:417888045925138432>');
        }
        
        if(msg == '!class2') {
            message.channel.send('<@&417862299609595905> Get the hell on Halo now. <:GetOnHalo:417888045925138432>');
        }
        
        if(msg == '!class1') {
            message.channel.send('<@&417862490240581632> Get the hell on Halo now. <:GetOnHalo:417888045925138432>');
        }
        
        if(msg == '!roe') {
            message.channel.send('1. The defending team may only hold up to 1 of each power weapon at all times: \n    1 Hydra or Grenade Launcher, Sniper, Laser, Railgun, Rocket, Saw, Shotgun, and CE pistol \n2. The defending team may only have up to 1 OP vehicle manned at a time. (OP vehicles are Mantis, Tank, Wraith, or rocket turret). \n3. There must be a way to enter the base at all times without having anyone inside the base. \n4. There must be good cover leading up to the base that can cover you from regular bullets, but not necessarily splash damage. Each piece of cover must be spaced at a reasonable distance apart. \n5. Switch spamming is not allowed. \n6. Spawn killing is not allowed, but spawn rumbling is allowed (spawn rumbling is killing at spawn with loadout weapons to get out of spawn). \n7. The spawn time must be 3 seconds with no penalties at any time. \n8. Spawn must be completely blocked from the view of the base. \n9. Loadout must be assault rifle and magnum, with at least one frag grenade. \n10. No gauss turrets of any kind are allowed. \n11. Only one vehicle is allowed to guard the inside of the base at any time. Only one chaingun or chaingun warthog is allowed to guard the entrance of the base. \n12. Only UNSC and Covenant weapons are allowed. Covenant weapons must substitute a UNSC weapon listed above and must be agreed upon before the raid. \n13. No air vehicles are allowed. \n14. If a base is taken over in a war, it cannot be reused/edited and used again in the war. \n15. In a war, a surrender ends with the assassination of the leader of the clan who lost the war.');
            message.channel.send('16. Only a maximum of 2 chaingun turrets are allowed in the base. \n17. No req weapons are allowed, but loadout weapons with attachments are allowed (with the exception of bayonets, which must replace the shotgun and be agreed upon). \n18. Defenders get a 5 minute head start to the base to set up (attackers must stay at the spawn for the entire 5 minutes). Raid starts at the 5 minute mark. \n19. No team or non-slayer gametypes are allowed. \n20. No secret teleporters, armories, weapons, vehicles, switches, or entrances are allowed. \n21. Teleporter blocking is not allowed. \n22. Modded guns and other weapon pads are not allowed. \n23. Modded or welded vehicles are not allowed. \n24. All Spartan abilities must be on and unmodified. \n25. Bottomless clip is not allowed. \n26. Powerups are not allowed. \n27. Machinima mode is not allowed. \n28. Lights with any kind of lens flares are not allowed. \n29. Invisible walls may only be used for keeping players on the overall map.');
        }

        if(msg == '!chatrules') {
            message.channel.send('Phoenix Server Chat Rules: \n  \nServer leadership reserves the right to declare any content inappropriate for the chats. \n  \nOverarching Principle - Respect every other member of the server, and do not deliberately try to make others feel uncomfortable or unsafe in any way. \n  \nServer Channels - The official channel should be used for official clan business only. The unofficial channel is for informal conversation, including memes. \n  \nLanguage - There are generally no profanity filters in the server; however, if you excessively cuss out someone even if they ask you to stop, you are breaking the overarching principle. \n  \nSexual content - Media that contains sexually inappropriate content will not be allowed in the server. Please keep in mind that it is in fact illegal for minors to view sexually explicit content without parental/guardian consent in the United States, and it is therefore also illegal to distribute sexually explicit content to minors. Just follow the law, and you will be fine. \n  \nGore - Any content that shows real gore will not be allowed in the chats. CGI gore will be allowed to a certain extent, but as with any media, server leadership reserves the right to declare it inappropriate for the chat.');
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
