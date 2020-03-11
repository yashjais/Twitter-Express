var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '0XG5299e6oSESyHvLGIMGmwW3',
  consumer_secret: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW',
  access_token_key: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h',
  access_token_secret: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
});

/*
CONSUMER_KEY: '0XG5299e6oSESyHvLGIMGmwW3'
CONSUMER_SECRET: 'kh08Sydpo5hYYr0DCY8i7oJRAbxNkI1NKNpdStVi08ICIwBUOW'
ACCESS_TOKEN: '3097151617-91Ayf0gu7O81oe6ae3quLPX5cxYkf7pZlkNZ09h'
ACCESS_TOKEN_SECRET: 'TPnK7IgPW0TB0m9NemXiyKAlZC6rBRpqi56w7sDhVxEgl'
*/
 
console.log('hello')
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});