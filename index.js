 const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));
console.log("By : Pirt YT")
app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db"); 

let owner = "870417868259459174"; //اي دي حقك
let sv = '962106898813968425'//اايدي سرفرك
let prefix = db.get("prefix") || "*"; ///برفكس

client.on("ready", () => {

  client.user.setActivity(`${prefix}buy | ${prefix}help`, { type: 'PLAYING' });

  var fs = require('fs');
setInterval(() => {
      fs.readFile('json.sqlite', 'utf8', function(err, contents) {
});
    }, 10000)
     client.guilds.cache.forEach(g => {
      if(g.id !== sv) g.leave()
    })
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildCreate', guild => {
  if(guild.id !== sv) return guild.leave()
    })



client.on("message", async message => {
  
  let prefixx = "s";
  const args = message.content
    .slice(prefixx.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  if (message.content.startsWith(prefixx + "etprefix")) {
    if (!owner.includes(message.author.id)) return;
    if (!args[0])
      return message.channel.send(
        db.get("prefix") || `> **The Server Prefix is : \`${prefix}\``
      );
    db.set("prefix", args[0]);
    message.channel.send(
      `> **Done Setting the new Prefix To : \`${db.get("prefix")}\``
    );
  }
});

client.on("message", async message => {
  const args = message.content  .slice(prefix.length) .trim() .split(/ +/);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix) || message.author.bot) return; 
  let hi = args.join(" ");
  if (command === "status") {
    if (!owner.includes(message.author.id)) return; //Amine#9092
    if (!args[0])  return message.channel.send(
        new Discord.MessageEmbed() 
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}status \`TYPE\`\n\n \`\`\`TYPE = [ open : لفتح المتجر \n close : لغلق المتجر ]\`\`\``
          )
          .setFooter(
            `Developed by :  Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Status Command")
      );
    if (args[0] === "open") {
      message.channel.send("> **✅ تم فتح المتجر بنجاح !**");
      db.set("status", args[0]);
    }
    if (args[0] === "close") {
      db.delete("status");
      message.channel.send("> **✅ تم قفل المتجر بنجاح !**");
    }
  }

  if (command === "setprice-netflix") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    let tax = Math.floor(args[0] * (20 / 19) + 1);
    if (!tax)
      return message.channel.send(
        new Discord.MessageEmbed() 
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}setprice-netflix \`PRICE\`\n\n \`\`\`PRICE = [ ادخل سعر الحساب ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Setprice Netflix Command")
      );
    db.set("price", args[0]);
    db.set("price1", tax);
    message.channel.send("> **✅ تم تحديد سعر حسابات النت فلكس بنجاح !**");
  }
  ///Pirt YT

  if (command === "setprice-steam") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    let tax = Math.floor(args[0] * (20 / 19) + 1);
    if (!tax)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}setprice-steam \`PRICE\`\n\n \`\`\`PRICE = [ ادخل سعر الحساب ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Setprice steam Command")
      );
    db.set("price2", args[0]);
    db.set("price3", tax);
    message.channel.send("> **✅ تم تحديد سعر حسابات ستيم بنجاح !**");
  }

  if (command === "add-netflix") {

    if (!owner.includes(message.author.id)) return; 
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Netflix Accounts Command")
      );
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add Netflix Accounts Command")
      );
    if (!db.has("account1")) {
      db.set("account1", []);
    } 
    db.push("account1", hi);
    message.channel.send("> **✅ تم اضافه حساب النت فلكس بنجاح !**");
  }


  if (command === "delete-netflix") {
    if (!owner.includes(message.author.id)) return;
    db.delete("account1");
    message.channel.send("> **✅ تم حذف جميع حسابات النت فلكس بنجاح !**");
  }
  if (command === "delete-steam") {
    if (!owner.includes(message.author.id)) return;
    db.delete("account2");
    message.channel.send("> **✅ تم حذف جميع حسابات ستيم بنجاح !**");
  }



 if (command === "buy") {
    const cooldown = new Set();
    
    let price1 = await db.get("price");
    let price2 = await db.get("price1");
    let price3 = db.get("price3");
    let price4 = db.get("price2");
    let probotid = db.get("probot") || "282859044593598464";
    let role = db.get("role");
    if (message.channel.type === "dm") return;
    if (db.has("u", message.author.id))
      return message.channel.send("you are blacklisted!");
    if (!db.has("status")) return message.channel.send("المتجر مقفل.");
    if (cooldown.has(message.author.id)) {
            message.channel.send("Wait 1 minute before buy again. " + "<@" + message.author.id + ">");
    } else {
    let buys = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp()
      .setTitle(`اهلا , ${message.author.username}`)
      .addField(
        `> Netflix Account`,
        `لشراء حساب نت فلكس رجاء الضغط على ايموجي " 📺 "`,
        true
      )
      .addField(
        `> Steam Account`,
        `لشراء حساب ستيم رجاء الضغط على ايموجي " 🌍 "`,
        true
      )
      .addField(
        `> Cancel Command`,
        `لالغاء امر الشراء رجاء الضغط على ايموجي " ❌ "`,
        true
      )
      .setFooter(
        `Developed by : Pirt YT`,
        `https://i.ibb.co/31d3V2Z/Background.png`
      );
    message.channel.send(buys).then(msg => {
      msg.react("📺");
      msg.react("🌍");
      msg.react("❌");
      let prizeembed = new Discord.MessageEmbed()
        .setTitle("Purchasing Netflix Accounts")
        .setDescription(
          `للحصول على الحساب رجاء تحويل : ${price2} ، الى : <@${owner}> عن طريق الامر التالي :
                \`\`\`#credit <@${owner}> ${price2}\`\`\``
        )
        .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
        .addField(
          `> ملاحظه`,
          `لديك 30 ثانيه للتحويل والحصول على الحساب \n رجاء التاكد ان خاصك مفتوح حتى يصلك الحساب !!`
        );
      const filter1 = (reaction, user) => {
        return (
          ["📺", "🌍", "❌"].includes(reaction.emoji.name) &&
          user.id === message.author.id
        );
      };
      msg
        .awaitReactions(filter1, { max: 1, time: 60000 * 4, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();
          if (reaction.emoji.name === "📺") {
            msg.delete();
            const account1 = db.get("account1");
            if (!account1 || !account1[0])
              return message.channel.send(
                `> **:x: لا يوجد حسابات في المخزن ! **`
              );
            if (!price1 || !price2)
              return message.channel.send(
                `> **:x: رجاء تحديد سعر حسابات النت فلكس**`
              );

            const filter = response =>
              response.content.startsWith(
                `**:moneybag: | ${message.author.username}, has transferred `
              ) &&
              response.content.includes(`${owner}`) &&
              response.author.id === probotid &&
              response.content.includes(Number(price1));

            message.channel
              .send(prizeembed)
              .then(s => {
                const f = r =>
                  message.author.id === r.author.id &&
                  r.content.includes(Number(price2));

                s.channel
                  .awaitMessages(f, {
                    max: 1,
                    time: 30 * 1000,
                    errors: ["time"]
                  })
                  .then(fs => {
                    message.channel
                      .send("> **برجاء كتابه رقم التاكيد لاستلام خصم !**")
                      .then(m => {
                        m.channel
                          .awaitMessages(filter, {
                            max: 1,
                            time: 30 * 1000,
                            errors: ["time"]
                          })
                          .then(mochakislang => {
                            const acc =
                              account1[
                                Math.floor(Math.random() * account1.length)
                              ];

                            if (db.has("role")) {
                              message.member.roles.add(role);
                            }

                            message.channel.send(
                              `> **${message.author}، رجاء التوجه الى الخاص !**`
                            );

                            let ch = db.get("ch");

                            if (db.has("ch")) {
                              client.channels.cache
                                .get(ch)
                                .send(
                                  `${message.author.tag} قام بشراء حساب نت فلكس \n معلومات الحساب : \`\`\`${acc}\`\`\``
                                );
                            }

                            message.author
                              .send(
                                `> **لقد قمت بشراء حساب نت فلكس !** \n\`الحساب مكتوب على هيئه : [ EMAIL:PASS ]\`\n\nالحساب :\n||${acc}||`
                              )
                              .then(() => {
                                const filtered = account1.filter(
                                  accs => accs !== acc
                                );
                                db.set("account1", filtered);
                              })
                              .catch(() =>
                                message.reply(
                                  "> **:x: لم اتمكن من ارسال الحسابات في خاصك !**"
                                )
                              );
                          });
                      });
                  });
              })
              .catch(collected => {
                return message.channel.send(
                  "> **:x: لقد انتهى وقت العمليه !**"
                );
              });
          }
        })
        .catch(collected => {
          return msg.channel.send("> **:x: لقد انتهى وقت العمليه !**");
        });
      msg
        .awaitReactions(filter1, { max: 1, time: 60000, errors: ["time"] })
        .then(collected => {
          const reaction = collected.first();

          if (reaction.emoji.name === "🌍") {
            msg.delete();
            const account2 = db.get("account2"); //Pirt YT
            if (!account2 || !account2[0])
              return message.channel.send(
                `> **:x: لا يوجد حسابات في المخزن ! **`
              );
            if (!price3 || !price4)
              return message.channel.send(
                `> **:x: رجاء تحديد سعر حسابات ستيم**`
              );

            let prizeembed = new Discord.MessageEmbed()
              .setTitle("Purchasing steam Accounts")
              .setDescription(
                `للحصول على الحساب رجاء تحويل : ${price3} ، الى : <@${owner}> عن طريق الامر التالي :
                            \`\`\`#credit <@${owner}> ${price3}\`\`\``
              )
              .setFooter(
                `Developed by : Pirt YT`,
                `https://i.ibb.co/31d3V2Z/Background.png`
              )
              .setTimestamp()
              .addField(
                `> ملاحظه`,
                `لديك 30 ثانيه للتحويل والحصول على الحساب \n رجاء التاكد ان خاصك مفتوح حتى يصلك الحساب !!`
              );

            const filter3 = response =>
              response.content.startsWith(
                `**:moneybag: | ${message.author.username}, has transferred `
              ) &&
              response.content.includes(`${owner}`) &&
              response.author.id === probotid &&
              response.content.includes(Number(price4));

            message.channel.send(prizeembed).then(s => {
              //Pirt YT

              const fr = r =>
                message.author.id === r.author.id &&
                r.content.includes(Number(price3));

              s.channel
                .awaitMessages(fr, {
                  max: 1,
                  time: 30 * 1000,
                  errors: ["time"]
                })
                .then(fs => {
                  message.channel
                    .send("> **رجاء كتابه رقم التاكيد لاستلام الحساب !**")
                    .then(m => {
                      m.channel
                        .awaitMessages(filter3, {
                          max: 1,
                          time: 30 * 1000,
                          errors: ["time"]
                        })
                        .then(mochakislang => {
                          const acc =
                            account2[
                              Math.floor(Math.random() * account2.length)
                            ];

                          if (db.has("role")) {
                            message.member.roles.add(role);
                          }

                          m.channel.send(
                            `> **${message.author}، رجاء التوجه الى الخاص !**`
                          );

                          let ch = db.get("ch");

                          if (db.has("ch")) {
                            client.channels.cache
                              .get(ch)
                              .send(
                                `${message.author.tag} has bought a full data account.\n information: \`\`\`${acc}\`\`\``
                              );
                          }

                          message.author
                            .send(
                              `> **لقد قمت بشراء حساب نت فلكس !** \n\`الحساب مكتوب على هيئه : [ EMAIL:PASS ]\`\n\nالحساب :\n||${acc}||`
                            )
                            .then(() => {
                              const filtered = account2.filter(
                                accs => accs !== acc
                              );

                              db.set("account2", filtered); //Pirt YT
                            })
                            .catch(() =>
                              message.reply(
                                "> **:x: لم اتمكن من ارسال الحسابات في خاصك !**"
                              )
                            );
                        })
                        .catch(collected => {
                          return message.channel.send(
                            "> **:x: لقد انتهى وقت العمليه !**"
                          );
                        });
                    });
                });
            });
          }
          if (reaction.emoji.name === "❌") {
            msg.delete();
            message.delete();
            message.channel.send(
              `> **${message.author} تم الغاء الامر بنجاح !**`
            );
          }
        })
        .catch(collected => {
          return message.channel.send("> **:x: لقد انتهى وقت العمليه !**");
        });
    });
    cooldown.add(message.author.id);
        setTimeout(() => {
          
          cooldown.delete(message.author.id);
        }, 60000);
    }
  }
  if (command === "setlog") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return;
    let ch =
      message.guild.channels.cache.find(ch =>
        ch.name.toLocaleLowerCase().includes(args[0])
      ) || message.guild.channels.cache.find(ch => ch.id === args[0]);
    if (!ch) return message.channel.send("> **رجاء تحديد روم بشكل صحيح **");
    db.set("ch", ch.id);
    message.channel.send("> **✅ تم تحديد روم اللوق بنجاح !**");
  }
  if (command === "add-user") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.find(u => u.id === args[0]);
    let member = message.guild.member(user);
    if (!member)
      return message.channel.send("> **رجاء تحديد العضو بشكل صحيح **");
    db.set(`${member.user.id}`, message.guild.id);
    message.channel.send(`> **✅ تم اضافه : ${member.user.tag} كادمن !**`);
  }
  if (command === "ping") {
    message.channel.send(
      `🏓Latency is ${Date.now() -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ws.ping
      )}ms`
    );
  }
  if (command === "remove-user") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    let user =
      message.mentions.users.first() ||
      message.guild.members.cache.find(u => u.id === args[0]);
    let member = message.guild.member(user);
    if (!member)
      return message.channel.send("> **رجاء تحديد العضو بشكل صحيح **");
    db.delete(`${member.user.id}`);
    message.channel.send(
      `> **✅ تم ازاله : ${member.user.tag} من قائمه الادمنز !**`
    );
  }
  if (command === "setprobot") {
    if (!owner.includes(message.author.id)) return;
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send("> **رجاء تحديد اي دي بروبوت بشكل صحيح **");
    db.set("probot", args[0]);
    message.channel.send("> **✅ تم تحديد بوت البروبوت بنجاح !**");
  }
  if (command === "setcustomerrole") {
    let custommer =
      message.guild.roles.cache.find(r =>
        r.name.toLocaleLowerCase().includes(args[0])
      ) || message.guild.roles.cache.find(r => r.id === args[0]);
    if (!custommer)
      return message.channel.send("> **رجاء تحديد رول العميل بشكل صحيح **");
    db.set("role", custommer.id);
    message.channel.send("> **✅ تم تحديد رول العميل بنجاح !**");
  }
  if (command === "stock") {
    if (message.channel.type === "dm") return;
    if (!db.has("account2")) {
      db.set("account2", []);
    }
    if (!db.has("account1")) {
      db.set("account1", []);
    }
    var stock = db.get("account1").length || 0;
    var stock2 = db.get("account2").length || 0;
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .addField(
          `Steam`,
          `
            > \`${stock2}\` : عدد الحسابات 
            > \`${prefix}buy\` : لشراء حساب رجاء كتابه الامر الاتي 
            `
        )
        .addField(
          `Netflix`,
          `
            > \`${stock}\` : عدد الحسابات 
            > \`${prefix}buy\` : لشراء حساب رجاء كتابه الامر الاتي 
            `
        )
        .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
    );
  }

  if (command === "remove-netflix") {
    //Amine#9092
    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return;
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Pirt YT
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-netflix \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove Netflix Account Command")
      ); //Pirt YT
    const account = db.get("account1"); //Pirt YT
    if (!account || !account[0])
      return message.channel.send(`> **:x: لا يوجد حسابات في المخزن ! **`); //Pirt YT
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setDescription(`> usage : ${prefix}remove-netflix [adress:email]`)
      ); //Pirt YT
    const filtered = account.filter(accs => accs !== args[0]);
    db.set("account1", filtered); //Pirt YT
    message.channel.send("> **✅ تم ازاله الحساب بنجاح !**");
  } //Pirt YT
  if (command === "display-netflix") {
    //Pirt YT
    if (message.channel.type === "dm") return; //Pirt YT
    if (!owner.includes(message.author.id)) return; //Pirt YT
    const accounts = db.get("account1");
    const text =
      accounts && accounts[0]
        ? accounts.join("\n")
        : "> **:x: لا يوجد حسابات في المخزن ! **!"; //Pirt YT
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("جميع حسابات النت فلكس :")
        .setDescription(`\`\`\`${text}\`\`\``)
        .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
    );
  }
  if (command === "restart") {
    if (!owner.includes(message.author.id)) return; //Pirt YT
    message.channel
      .send(`جاري عمل الريستارت ..`)
      .then(() => client.destroy())
      .then(() => {
        client.login(process.env.token);
        message.channel.send("> **✅ تم اعاده تشغيل البوت بنجاح !**");
      });
  }
  if (command === "help") {
    if (message.channel.type === "dm") return; //Pirt YT
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle(`About ${client.user.username}`)
        .addField(`General`, `\`ping\` | \`buy\` | \`stock\` |`)
        .setDescription(
          `The available commands for ${client.user.username} is \`22\`\n Developers : <@870417868259459174>`
        )
        .addField(
          `Administrator`,
          `**|** \`setprobot\` **|**\n**|** \`setprice-steam\` **|** \`setprice-netflix\` **|**\n **|** \`add-netflix\` **|** \`add-steam\` **|**\n| \`remove-netflix\` **|** \`remove-steam\` **|** \n| \`display-netflix\` **|** \`display-steam\` **|**\n| \`delete-steam\` **|** \`delete-netflix\` **|**\n| \`setlog\` **|** \`status\` **|**`
        )
        .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
        .addField(
          `Links`,
          `[Pirt YT Discord](https://discord.gg/JduyJKphVV)\n[Pirt YT Youtube](https://www.youtube.com/channel/UCejGcNpkzNdoUqHvcVGfCHg/featured)`
        )
    );
  }
});


client.on("message", async message => {
  //Pirt YT
  if (!message.content.startsWith(prefix) || message.author.bot) return; //Pirt YT
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  let hi = args.join(" ");
  if (command === "add-steam") {
    //Pirt YT
     if (!owner.includes(message.author.id)) return;
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() //Pirt YT
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-steam \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add steam Accounts Command")
      );
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed() //Pirt YT
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}add-steam \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Add steam Accounts Command")
      );
    if (!db.has("account2")) {
      db.set("account2", []);
    } //Pirt YT
    db.push("account2", hi); //Pirt YT
    message.channel.send("> **✅ تم اضافه حسابات ستيم بنجاح !**");
  }
  if (command === "remove-steam") {

    if (!owner.includes(message.author.id) && !db.has(message.author.id))
      return; 
    if (message.channel.type === "dm") return;
    if (!args[0])
      return message.channel.send(
        new Discord.MessageEmbed() 
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-steam \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove steam Accounts Command")
      ); //Pirt YT
    const account = db.get("account2"); //
    if (!account || !account[0])
      return message.channel.send(`> **:x: لا يوجد حسابات في المخزن ! **`);
    if (!message.content.includes(":"))
      return message.channel.send(
        new Discord.MessageEmbed() //
          .setAuthor(
            message.author.username,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .addField(
            `> Error :`,
            `Usage : ${prefix}remove-steam \`ACCOUNT\`\n\n \`\`\`ACCOUNT = [ EMAIL:PASSWORD ]\`\`\``
          )
          .setFooter(
            `Developed by : Pirt YT`,
            `https://i.ibb.co/31d3V2Z/Background.png`
          )
          .setColor("RED")
          .setTimestamp()
          .setTitle("Remove steam Accounts Command")
      ); //Pirt YT
    const filtered = account.filter(accs => accs !== args[0]);
    db.set("account2", filtered); //
    message.channel.send("> **✅ تم ازاله الحساب بنجاح !**");
  }
  if (command === "display-steam") {
    if (message.channel.type === "dm") return;
    if (!owner.includes(message.author.id)) return;
    const accounts = db.get("account2");
    const text =
      accounts && accounts[0]
        ? accounts.join("\n")
        : "> **:x: لا يوجد حسابات في المخزن ! **"; //Pirt YT
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(
          message.author.username,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("جميع حسابات ستيم :")
        .setDescription(`\`\`\`${text}\`\`\``)
        .setFooter(
          `Developed by : Pirt YT`,
          `https://i.ibb.co/31d3V2Z/Background.png`
        )
        .setTimestamp()
    );
  }
});

client.on("message", async message => {
  let prefix = await db.get("prefix");
  if (message.content.startsWith(prefix + "setname")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owner.includes(message.author.id))
      return message.channel.send(`** :x: Only Owners Can Use this Command **`);
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me a name for the bot !**`
      );
    client.user.setUsername(`${botnameee}`);
    message.channel.send(`Changing The bot's Name ...`).then(me => {
      me.edit(` Done !`);
    });
  }
  if (message.content.startsWith(prefix + "setavatar")) {
    let args = message.content.split(" ");
    let botnameee = args.slice(1).join(" ");
    if (!owner.includes(message.author.id))
      return message.channel.send(`** :x: Only Owners Can Use this Command **`);
    if (!botnameee)
      return message.channel.send(
        `** :x: Please Provide me an avatar for the bot !**`
      );
    client.user.setAvatar(`${botnameee}`);
    message.channel.send(`Changing The bot's Avatar ...`).then(me => {
      me.edit(` Done !`);
    });
  }
});

client.on("message", async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();
  let user =
    message.mentions.members.first() ||
    client.users.cache.find(u => u.id === args[0]);
  let member = message.guild.member(user);
  if (message.channel.type === "dm") return;
  if (command === "blacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!user)
      return message.channel.send("> **رجاء تحديد العضو بطريقه صحيحه**");
    if (db.has(`u`, member.id))
      return message.channel.send("> **:x: العضو موجود في القائمه بالفعل !**");
    db.set(`u`, member.id);
    message.channel.send("> **✅ تم اضافه العضو الى قائمه البلاك ليست !**");
  }
  if (command === "unblacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!user)
      return message.channel.send("> **رجاء تحديد العضو بطريقه صحيحه**");
    if (!db.has(`u`, member.id))
      return message.channel.send("> **:x: العضو غير موجود في القائمه !**");
    db.delete(`u`, member.id);
    message.channel.send("> **✅ تم ازاله البلاك ليست !**");
  }
  if (command === "resetblacklist") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    db.delete("u");
    message.channel.send(
      "> **✅ تم ازاله جميع الاعضاء من قائمه البلاك ليست !**"
    );
  }
});

client.login(process.env.token);
