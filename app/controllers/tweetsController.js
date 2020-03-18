const Twitter = require('../models/tweets')
const twitter = require('twitter')
// const io = require("../../index")
const io = require('../../config/socket')
// io.on('connection', client => { ... });
// io.listen(3000); 

module.exports.list = (req, res) => {
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
            stream.on('data', function(event) {
            io.emit('tweet', event); 
            // io()
            // io.listen(3020);
            console.log(event && event.text);
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
}

module.exports.create = (req, res) => {
    const body = req.body
    // console.log(body, 'ererere')
    const tweet = new Twitter(body)
    tweet.save()
        .then(tw => res.send(tw))
        .catch(err => res.send(err))
}
