const express = require('express')
const app = express()
const router = require('./config/routes')
const cors = require('cors')
const setUpDb = require('./config/database')
const twitter = require('twitter')
const Twitter = require('./app/models/tweets')


setUpDb() 

const twit = new twitter({
    consumer_key: '881flbXb16SbwdP3R2sRKvdji',
    consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
    access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
    access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
})

app.use(cors())
// const corsOptions = {
//     origin: 'http://localhost:3000',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.get('/', (req, res) => {
    res.send('hello')
}) 

app.use(express.json())
// app.use('/',  router)  
app.post('/tweets', (req, res) => { 
    console.log(req.query)
    console.log(req.body)
    const q = req.body.query
    const twit = new twitter({
        consumer_key: '881flbXb16SbwdP3R2sRKvdji',
        consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi', 
        access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
        access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
    })    
     
    twit.stream('statuses/filter', { track: q}, function(stream) {
        let i = 0
 
            stream.on('data', function(event) {
                io.emit('tweet', event);
                // i = i+1
            // io.on('connection', client => {
            //     client.on('tweet', event);
            // });
            // io.listen(3020);
            console.log(event && event.text);
            console.log(i) 
            // if(i == 10){
            //     // stream.disconnect(0);
            //     socket.on('disconnect', function(){
            //         console.log('user disconnected');
            //       });  
            // } 
        }) 
        
        stream.on('error', function(error) {
            console.log(error)
        })
    })
    Twitter.getTweets(q)
        .then(function(tw) {
            const tweets = tw.statuses
            console.log('tweeeee', tweets)
            res.send(tweets)
        })
        .catch(err => res.send(err))
})

// app.use('/', cors(corsOptions),  router)
// const port = 3010 
const port = process.env.PORT || 3000; 
const path = require('path')

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

const server = app.listen(port, () => {
    console.log('listening on the port')
})

const socket = require('socket.io')
const io = socket(server)

// socket code
// const server = require('http').createServer();
// const io = require('socket.io')(server);
// io.on('connection', client => {
//   client.on('event', data => { /* … */ });
//   client.on('disconnect', () => { /* … */ });
// });
// server.listen(3000);


// module.exports = io