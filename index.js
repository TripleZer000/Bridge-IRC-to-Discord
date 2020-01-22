const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const url = require('./url.js');
var irc = require('irc');
var bot = new irc.Client('irc_server', 'irc_nick', {
    password: ('irc_pass'),
    channels: ['irc_channel'],
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message#blah', function(from, message) {
    console.log('<%s> %s', from, message);
});

/// YOOOOOOOOOOOOOOOOOOOO edit discord channel ids

bot.addListener('action', function (from, to, text, message) {
    client.channels.get('discord_id').send('***'+ from + ' ' + text + '***')
});
bot.addListener('join', function(channel, nick, message) {
    console.log(nick)
    client.channels.get('discord_id').send('**```' + nick + ' has joined IRC #lobby      [irc.evilcorp.ga]```**');
});
bot.addListener('quit', function(nick) {
    client.channels.get('discord_id').send('**```' + nick + ' has left IRC #lobby      [irc.evilcorp.ga]```**');
});
bot.addListener('kick', function(channel, who, by, reason) {
    client.channels.get('discord_id').send('**```' + who + ' was kicked by ' + by + '      [irc.evilcorp.ga]```**');
});

  // discord
client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', message =>
{
 if (message.author.username === 'irc_nick' || message.channel.name != 'irc_channel') {
 }
 else {
         bot.say('irc_#channel', '[' + message.author.username + ']: ' + message.content)
 }
});
bot.addListener('message', function(from, to, message) 
{
    console.log('%s => %s: %s', from, to, message);
    client.channels.get('discord_id').send('[' + from + ']: ' + message);
});

 // !info DarkLair
/// client.on('message', msg => {
///  if (msg.content === '!info DarkLair') {
///  exec(url)
///  });

/////


client.login(token);
const keep_alive = require('./keep_alive.js')
