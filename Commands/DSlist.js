const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields({
    name: "Data Structures (ds-code):",
    value:
      "◽Arrays (001)\n◽Circular LL (002)\n◽Circular Doubly LL (003)\n◽Doubly LL (004)\n◽Queue Using Array (005)\n◽Queue Using LL (006)\n◽Singly LL (007)\n◽Stack Using Array (008)\n◽Stack Using LL (009)\n",
  })
  .setFooter(
    "Made with ❤️ by Bhuvnesh",

    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
