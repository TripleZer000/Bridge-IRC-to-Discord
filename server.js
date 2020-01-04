const server = express();

server.all('/', (req, res)=>{
    res.send('Your bot is servered!')
})
module.exports = keepAlive;