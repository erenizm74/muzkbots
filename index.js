const Discord = require("discord.js");
const fs = require("fs");
const ghost = require('ghost-dev.ascii');
const client = new Discord.Client();
require("./sen benim yarramı ye/olur olur yeriz yeriz.js")(client);
client.loader = fs;
client.logger = require('ghost-dev-console');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.queue = new Map(); 

 client.on('ready', () => {
    let tab = new ghost('Bot hazır haci!');
    tab.addRow('Bot ismi', client.user.tag);
    tab.addRow('Komut Sayısı', client.commands.size);
     tab.addRow('Çalışma Süresi', client.uptime);
 client.logger.sari(tab.toString());
  });

  
  
 
client.loader.readdir('./ghost/', (err, files) => {
  if(err) client.logger.hata(err);
  client.logger.yaz(`[BOT]: ${files.length} adet komut yüklenecek!`);
  files.forEach(f => {
    let cmd = require(`./ghost/${f}`);
    client.logger.yaz(`[BOT]: ${cmd.help.name} komutu yüklendi!`)
    client.commands.set(cmd.help.name, cmd);
    cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name)
    });
  });
});



client.login(process.env.token).catch(error => { console.log("token yanlış haci") }); // .env dosyasında token yerinin karşısına token gir.
