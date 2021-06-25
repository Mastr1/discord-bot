const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "/";

Client.on("ready", () => {
    console.log('Bot lancé avec succés !');
});

Client.on("message", message => {
        if(message.author.bot) return;
        if(message.channel.type == "dm") return;

        // commande ban
    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre mentionné est invalide ou NuL !");
            }
            else {
                if(mention.bannable){
                   mention.ban();
                   message.channel.send(mention.displayName + " à été banni avec succés ! ✔");
                }
                else {
                    message.reply("Impossible de bannir ce membre !");
                }
            }
        } // Commande kick
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre mentionné est invalide ou NuL !");
            }
            else
                if(mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " à été kick avec succés ! ✖");
                }
                else {
                    message.reply("Impossible de kick ce membre !")
                }
        }
    }
    // Embed
    var embed = new Discord.MessageEmbed()
        .setColor("#FF3333")
        .setTitle("Mastr Live (cliquez ici)")
        .setURL("https://www.twitch.tv/mastrontwitch")
        .setAuthor("Mastr Support", "https://i.imgur.com/ycg71rh.png")
        .setThumbnail("https://i.imgur.com/ycg71rh.png")
        .setDescription("@everyone ** Mastr est en stream actuellement venez discutez !** ***Lien  : *** https://www.twitch.tv/mastrontwitch")


    message.channel.send(embed);


});




Client.login(process.env.TOKEN);