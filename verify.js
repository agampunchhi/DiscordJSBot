const Discord = require("discord.js");
const Captcha = require("@haileybot/captcha-generator");
const config = require("./config.json");
const client = new Discord.Client();

const PREFIX = ">";
const VERIFY = "verified";

client.on("ready", () => {
    console.log(client.user.tag + " is connected :)");
    client.user.setActivity("for unverified people", { type: "WATCHING" });
});

client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX) && message.content.substr(1).split(" ")[0] == "verify") {
        message.delete();

        const captcha = new Captcha();
        const verifyEmbed = new Discord.MessageEmbed()
            .setColor("#3498DB")
            .setTitle("Captcha Verification for " + message.guild.name)
            .setDescription(
                "Please type the given code. This code is valid for only 5 minutes or single response (right or wrong)."
            )
            .setImage("attachment://captcha.png");

        const filter = (msg) => {
            if (msg.author.id === message.author.id && msg.content === captcha.value) return true;
            else message.author.send("You entered the captcha incorrectly.");
            return false;
        };

        message.author
            .send({
                files: [new Discord.MessageAttachment(captcha.PNGStream, "captcha.png")],
                embed: verifyEmbed,
            })
            .then((embed) => {
                message.author.dmChannel
                    .awaitMessages(filter, {
                        max: 1,
                        time: 300000,
                        errors: ["time"],
                    })
                    .then((responseCode) => {
                        embed.delete();
                        if (responseCode) {
                            message.author.send(
                                "Congratulations! :partying_face: Your are now a verified member of **" +
                                    message.guild.name +
                                    "**"
                            );
                            const role = message.member.roles.cache.find((role) => role.name === VERIFY);
                            if (role) message.guild.member(message.author).roles.add(role);
                        }
                    })
                    .catch((err) => message.author.send("Captcha Expired!"));
            })
            .catch((err) => console.log("M-ERROR: " + err));
    }
});

client.login(config.BOT_TOKEN);
