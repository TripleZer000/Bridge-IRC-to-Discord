const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
const url = require('./url.js');
require('dotenv').config();
var irc = require('irc');
var bot = new irc.Client(process.env.irc_server, process.env.nick, {
    password: (process.env.pass),
    channels: ['#' + process.env.channel],
});

bot.addListener('error', function(message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message#blah', function(from, message) {
    console.log('<%s> %s', from, message);
});

/// YOOOOOOOOOOOOOOOOOOOO edit discord channel ids

bot.addListener('action', function (from, to, text, message) {
    client.channels.get(process.env.discord_id).send('***'+ from + ' ' + text + '***')
});
bot.addListener('join', function(channel, nick, message) {
    console.log(nick)
    client.channels.get(process.env.discord_id).send('**```' + nick + ' has joined IRC ' + '#' + process.env.channel + '      [' + process.env.irc_server + ']```**');
});
bot.addListener('quit', function(nick) {
    client.channels.get(process.env.discord_id).send('**```' + nick + ' has left IRC ' + '#' +  process.env.channel + '      [' +  process.env.irc_server + ']```**');
});
bot.addListener('kick', function(channel, who, by, reason) {
    client.channels.get(process.env.discord_id).send('**```' + who + ' was kicked by ' + by + '      [' + process.env.irc_server + ']```**');
});

  // discord
client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
});

client.on('message', message =>
{
 if (message.author.username === process.env.nick || message.channel.name != process.env.channel) {
 }
 else {
         bot.say('#' + process.env.channel, '[' + message.author.username + ']: ' + message.content)
 }
});
bot.addListener('message', function(from, to, message) 
{
    console.log('%s => %s: %s', from, to, message);
    client.channels.get(process.env.discord_id).send('[' + from + ']: ' + message);
});


//
///
////


client.login(token);
const keep_alive = require('./keep_alive.js')
