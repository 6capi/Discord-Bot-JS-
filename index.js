const Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');


function presence(){
   client.user.setPresence({
      status: "online",
      activity: {
         name: "Developed by Capi",
         type: "PLAYING"
      }
   });
}

console.log("Capi bot discord / Loading..")

client.on('ready', () => {
    console.log("BOT STARTED / Discord server Started. ")
    presence()
}); 

console.log("------------")
console.log("BOT STARTED /  Loading..")
console.log("------------")
console.log("BOT STARTED /  Loading..")
console.log("------------")
console.log("BOT STARTED /  Loading..")
console.log("------------")
console.log("BOT STARTED /  Loading..")
console.log("------------")
console.log("BOT STARTED / Loading..")
console.log("------------")
console.log("BOT STARTED / Loading..")
console.log("------------")
console.log("BOT STARTED /  Loading..")
console.log("------------")

 
 client.on("message", msg => {
          let user = msg.mentions.users.first(); 
          if(!user) user = msg.author; 
          const embed = new Discord.MessageEmbed() 
          .setTitle("Here is your poor photo") 
          .setImage(user.displayAvatarURL()) 
          .setTimestamp() 
          if(msg.content.startsWith("dev-capi-avatar")){ 
            msg.reply(embed) 
          } 
        });

 client.on("message", message => {
  if(message.content === "dev-capi-clear 10") {
    message.channel.bulkDelete(10)
    .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
    .catch(console.error);
 message.channel.send("Cleared");
  }
})

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
  
 message.reply('\  **No puede banear a este miembro**');
   console.log;
    });
} else{
    message.reply("\  **Este usuario no está en este servidor!**")
}
} else {
message.reply('\**Usuario?**')

}}
})


client.login("Insert ur token :)");
