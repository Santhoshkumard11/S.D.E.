const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields(
    {
      name: "Problems (p-code):",
      value:
        "◽Search In Matrix [Cpp/Java/Python] (001)\n◽Spiral Print [Cpp] (002)\n",
    },
    {
      name: "Use commands Like this:",
      value:
        "`+problem 001 in Java` - to get program for Search In Matrix in Java\n`+problem 002 in Cpp` - to get program for Spiral Print in Cpp",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
