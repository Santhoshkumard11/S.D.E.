const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields({
    name: "Algorithms [Available In] (algo-code):",
    value:
      "◽Binary Search [Cpp/Java/Python] (001)\n◽Insertion Sort [Cpp] (003)\n◽Linear Search [Cpp/Java/Python] (002)\n",
  })
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
