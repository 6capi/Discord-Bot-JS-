// ALL THIS SHIT HAS BEEN DEVELOPED BY CAPI .
// I dont need help of nobody ! 227Glocks#7926 for support :)

// Const
const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const { Client } = require('discord.js');

// Rich presence

function presence(){
   client.user.setPresence({
      status: "online",
      activity: {
         name: "Developed by capi!",
         type: "PLAYING"
      }
   });
}

// Console.logs , you can deleted this. Is shit xD
console.log("Bot discord / Loading..")

client.on('ready', () => {
  console.log(`-------------------------------\nWelcome to the bot \nCreator / Developer : 227Glocks#7926\nConnected to ${client.user.tag}!\n-------------------------------`);
  presence()
}); 

console.log("------------")
console.log("BOT STARTED / Loading..")
console.log("------------")

console.log("Dm 227Glocks#7926 on Discord to get more source codes :) This bot has been developed by me without help of nobody ! ")
console.log("------------")


// Shit commands : !nitro, !stresser , !comandos, *register, *download, AND !verify 
 client.on("message", (message) => {

   if(message.content.startsWith("!source-code")) {
    message.channel.send("Here is the source code ;) https://github.com/capisms/Discord-Bot-JS-");
  }
    
   if(message.content.startsWith("!verify")) {
     message.channel.send("`🤡 You get verified !`");
   }

   if(message.content.startsWith("!asd")) {
    message.channel.send("[@here]`🤡 - Para verificarse hay que escribir !verify en el canal #verify - 🤡`[@here]")
  }
 });


//Avatar Code // Command : dev-capi-avatar

 client.on("message", msg => {
          let user = msg.mentions.users.first(); 
          if(!user) user = msg.author; 
          const embed = new Discord.MessageEmbed() 
          .setTitle("🤡 **Your photo**") 
          .setImage(user.displayAvatarURL()) 
          .setTimestamp() 
          if(msg.content.startsWith("dev-capi-avatar")){ 
            msg.reply(embed) 
          } 
        });

 // Rules of the server // command !embed
        
        client.on("message", msg => {
          let user = msg.mentions.users.first(); 
          if(!user) user = msg.author; 
          const embed = new Discord.MessageEmbed() 
          .setTitle("**Reglas del discord**")
          .setFooter("Discord Bot By Capi ! I dont need help of nobody!")
          .setThumbnail('INSERT PHOTO')
          .addFields(
            {
              name: 'Regla 1',
              value: '• RULE',
              inline: false,
            },

            {
              name: 'Regla 2',
              value: '• RULE',
              inline: false,
            },

            {
              name: 'Regla 3',
              value: '• RULE.',
              inline: false,
            },

            {
              name: 'Regla 4',
              value: '• RULE',
              inline: false,
            },

            {
              name: 'Regla 5',
              value: '• RULE',
              inline: false,
            },
          )  
          .setTimestamp() 
          if(msg.content.startsWith("!embed")){ 
            msg.reply(embed) 
          } 
        });

// Clear code // Command : dev-capi-clear 10 , you can change the bulkDelete        

 client.on("message", message => {
  if(message.content === "dev-capi-clear 10") {
    message.channel.bulkDelete(10)
    .then(messages => console.log(`Deleted ${messages.size} messages`))
    .catch(console.error);
 message.channel.send("Chat limpio");
  }
})


// Ban code // Command : !ban {user}

 client.on("message", async message => {
   prefix = '!'
  if (!message.guild) return;
   if (message.content.startsWith(prefix + 'ban')) {
     if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("\ **JAJAJ no sos admin pa**")
    
     const user = message.mentions.users.first();
     if (user) {
      const member = message.guild.member(user);
      if(member.hasPermission('ADMINISTRATOR')) return message.channel.send("\ **Este usuario es un administrador**")
  
    if (member) {
  
       member
          .ban({
          reason: `Banned by : ${message.author.username}`,
          })
      .then(() => {
  
       message.channel.send(`\  **${user.tag}** fue baneado del servidor!`);
       })
       .catch(err => {
  
 message.reply('\ **Este usuario no puede ser baneado (Administrador)**');
   console.log;
    });
} else{
    message.reply("\ **Este usuario no está en este servidor!**")
}
} else {
message.reply('\**Usuario?**')

}}
})


//Verify code // Command: !verify 

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === 'channel id')
        await message.delete();
    if(message.content.toLowerCase() === '!verify' && message.channel.id === 'channel id')
    {   
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('role id');
        if(role) {
            try {
                await message.member.roles.add(role);
                console.log("Role agregado!");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
});

// Template of rules-embed // You can deleted if u want

        client.on("message", msg => {
          let user = msg.mentions.users.first(); 
          if(!user) user = msg.author; 
          const embed = new Discord.MessageEmbed() 

          .setTitle("**Template**")
          .setFooter("Discord Embed Message Template by Capi !")
          .setThumbnail('insert photo if you want')
          .addFields(
            {
              name: 'Template',
              value: '• Template',
              inline: false,
            },

            {
              name: 'Template',
              value: '• Template',
              inline: false,
            },

            {
              name: 'Template',
              value: '• Template',
              inline: false,
            },

            {
              name: 'Template',
              value: '• Template',
              inline: false,
            },

            {
              name: 'Regla 5',
              value: '• Template',
              inline: false,
            },
          )  
          .setTimestamp() 
          if(msg.content.startsWith("!template")){ 
            msg.reply(embed) 
          } 
        });

client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});

// Token login !

client.login("insert your token :)");
