const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  
  
    if (args[0] == 'bronze') {
    
      let embed = new Discord.RichEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more coins from robbing someone")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'nikes') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
    } else if(args[0] == 'car') {
      let embed = new Discord.RichEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send(embed)
  } else if(args[0] == 'mansion') {
    let embed = new Discord.RichEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win coins, roles on our Discord Server + More by leading the leaderboard")
    .setColor("#FFFFFF")
    message.channel.send(embed)
  }

  }

  
  module.exports.help = {
    name:"storeinfo",
    aliases: ["si"]
  }