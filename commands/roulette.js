const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> Specify an amount to gamble | m!roulette <color> <amount>`);

let moneymore = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> You are betting more than you have`);

let colorbad = new Discord.RichEmbed()
.setColor("#FFFFFF")
.setDescription(`<:Cross:618736602901905418> Specify a color | Red [1.5x] Black [2x] Green [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("black")) colour = 0;
    else if (colour == "r" || colour.includes("red")) colour = 1;
    else if (colour == "g" || colour.includes("green")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Green:618767721361833995> You won ${money} coins\n\nMultiplier: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Red:618767705444450342> You won ${money} coins\n\nMultiplier: 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Black:618767682996666408> You won ${money} coins\n\nMultiplier: 2x`);
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<:Cross:618736602901905418> You lost ${money} coins\n\nMultiplier: 0x`);
        message.channel.send(moneyEmbed4)
    }
}

  
  module.exports.help = {
    name:"roulette",
    aliases: ["roul"]
  }