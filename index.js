const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const url = require('./url.js');
var irc = require('irc');
var bot = new irc.Client('irc_server_here', 'irc_bot_name', {
    password: ('irc_bot_password'),
    channels: ['irc_#channel'],
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message#blah', function(from, message) {
    console.log('<%s> %s', from, message);
});

bot.addListener('pm', function(nick, message) {
    console.log('Got private message from %s: %s', nick, message);
});
bot.addListener('action', function (from, to, text, message) {
    client.channels.get('discord_channel_id').send('*'+ from + ' ' + text + '*')
});
bot.addListener('join', function(channel, nick, message) {
    console.log(nick)
    client.channels.get('discord_channel_id').send('*' + nick + ' has joined IRC #lobby*');
});
bot.addListener('quit', function(nick) {
    client.channels.get('discord_channel_id').send('*' + nick + ' has left IRC #lobby*');
});
bot.addListener('kick', function(channel, who, by, reason) {
    client.channels.get('discord_channel_id').send('*' + who + ' was kicked by ' + by + '*');
});

  // discord
client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', message =>
{
 if (message.author.username === 'irc_bot_name' || message.channel.name != 'lair') {
 }
 else {
         bot.say('irc_#channel', '[Discord_' + message.author.username + ']: ' + message.content)
 }
});
bot.addListener('message', function(from, to, message) 
{
    console.log('%s => %s: %s', from, to, message);
    client.channels.get('discord_channel_id').send('[IRC_' + from + ']: ' + message);
});

 // !info DarkLair
/// client.on('message', msg => {
///  if (msg.content === '!info DarkLair') {
///  exec(url)
///  });

/////


client.login(token);
const keep_alive = require('./keep_alive.js')
