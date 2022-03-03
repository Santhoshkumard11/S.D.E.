const Discord = require("discord.js");
const Embed2 = new Discord.MessageEmbed()
  .setImage("https://i.ibb.co/1RJ8fc1/mob-dark2.png")
  .setColor("0x0099ff")
  .setTitle("From : S.D.E.")
  .addFields(
    {
      name: "Heyy!! ",
      value: "Hope you are doing good! ",
    },
    {
      name: "To invite me to your server:",
      value:
        "[Click here!](https://discordapp.com/oauth2/authorize?client_id=871086013152391168&scope=bot&permissions=8)\n",
    },
    {
      name: "Please help me revise code for some topics as my memory is not that strong.😟 This time I will write it somewhere so that i don't forget it. Thanks in advance.🍭",
      value:
        "Click[ here](https://github.com/Bhuvnesh875/S.D.E./blob/main/Contributing.md) and open a PR!\n",
    },
    {
      name: "Wanna watch me grow old?",
      value:
        "Join the developement server [here](https://discord.gg/bgz7vFcTyn)!\n",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed2;
