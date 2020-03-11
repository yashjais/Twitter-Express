const mongoose = require('mongoose')
const twitter = require('twitter')

const Schema = mongoose.Schema

const twitterSchema = new Schema({
    keyword: '',
    tweets: []
})

twitterSchema.statics.getTweets = function(query) {
    const tweet = this
    console.log('in the middleware')

    const twit = new twitter({
        consumer_key: '881flbXb16SbwdP3R2sRKvdji',
        consumer_secret: '1lgXzKUdWoMzdvba4r1YEY7gAEXqlMOSRMq99Iz7mUM2nNikFi',
        access_token_key: '1132229170388332545-j5aLvteIDWWuSyHyJPvqXgsHi3DMpP',
        access_token_secret: 'ISSVhx8UxSnDZ7cX1TklJ5BfYHIbZrGi2hJa8Sb97G2i7'
    })

    // twit.get(`https://api.twitter.com/1.1/search/tweets.json?q=${query}`, function(error, tweets, response) {
    //     if(error) throw error;
    //     console.log(tweets);  // The favorites.
    //     // console.log(response);  // Raw response object.
    // })

    // twit.stream('statuses/filter', { track: query}, function(stream) {
    //         stream.on('data', function(event) {
    //         console.log(event && event.text);
    //     })
   
    //     stream.on('error', function(error) {
    //         throw error;
    //     })
    // })
    // return Promise.resolve([])

    return twit.get(`https://api.twitter.com/1.1/search/tweets.json?q=${query}`, {})
}
  
const Twitter = mongoose.model('Twitter', twitterSchema)

module.exports = Twitter