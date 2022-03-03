const Discord = require("discord.js");
const Embed3 = new Discord.MessageEmbed()
  .setColor("0x0099ff")
  .setAuthor("S.D.E.", "https://i.ibb.co/HdBBqG1/mob-dark.png")

  .addFields(
    {
      name: "Data Structures [Available In] (ds-code):",
      value:
        "◽Arrays [Cpp] (001)\n◽Circular LL [Cpp] (002)\n◽Circular Doubly LL [Cpp] (003)\n◽Doubly LL [Cpp/Java/Python] (004)\n◽Queue Using Array [Cpp/Java/Python] (005)\n◽Queue Using LL [Cpp/Java/Python] (006)\n◽Singly LL [Cpp/Java/Python] (007)\n◽Stack Using Array [Cpp/Java/Python] (008)\n◽Stack Using LL [Cpp/Java/Python] (009)\n",
    },
    {
      name: "Use commands Like this:",
      value:
        "`+ds 001 in Cpp` - to get program for Arrays in Cpp\n`+ds 005 in Python` - to get program for Queue Using Array in Python",
    }
  )
  .setFooter(
    "Made with ❤️ by Bhuvnesh",
    "https://i.ibb.co/HdBBqG1/mob-dark.png"
  );

module.exports = Embed3;
