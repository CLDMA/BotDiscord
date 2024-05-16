//const TOKEN = "MTIwNDQxNTM0MDc1MTM2NDEyNg.GFg0d-.lbOFZIzukak8E4-BXKKVLzWxD4SWLjPHN28AHM"

const { Client , GatewayIntentBits} = require ("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

const client = new Client({
  intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ]
});

  const data = new SlashCommandBuilder()
    .setName("hey")
    .setDescription("renvoi hey")

  const qui = new SlashCommandBuilder()
    .setName("who-am-i")
    .setDescription("give the information of the user")


client.on('ready', () =>{

  client.guilds.cache.get("920082888236621884").commands.create(data);
  client.guilds.cache.get("920082888236621884").commands.create(qui);

  console.log("bot opérationnel")
});

client.on("interactionCreate", interaction=> {
    if(interaction.commandName === "hey"){
      interaction.reply("hey");
     
    }  
    if(interaction.commandName === "who-am-i"){
      interaction.reply("you are: " + interaction.user.username + "\nyour id is: " + interaction.user.id + "\nyour avatar is: " + interaction.user.avatar + "\nyour server id is: " + interaction.guild.id)
    }


});