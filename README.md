This code has 2 Dependencies 
irc.js and discord.js 
(links comming soon im lazy)

ISSUE #1 - YOU AS THE USER HAS TO FIX :(

/home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:849
                        throw err;
                        ^

TypeError: Cannot read property 'filter' of undefined
    at chanModes (/home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:300:38)
    at /home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:319:25
    at Array.forEach (<anonymous>)
    at Client.<anonymous> (/home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:270:26)
    at Client.emit (events.js:193:13)
    at iterator (/home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:846:26)
    at Array.forEach (<anonymous>)
    at Socket.handleData (/home/user/Bridge-IRC-to-Discord/node_modules/irc/lib/irc.js:841:15)
    at Socket.emit (events.js:193:13)
    at addChunk (_stream_readable.js:295:12)

found it!!!
edit node.js (the dependency of irc for Akuma)
https://github.com/martynsmith/node-irc
line 319    chanModes(mode, [modeArg]);
[modeArg] into modeArg
