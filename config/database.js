const mongoose = require('mongoose')

const setUpDb = () => {
    mongoose.connect('mongodb://localhost:27017/express-twitter', {  
        useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
            .then(res => console.log('connected to the db'))
            .catch(err => console.log(err))
}

module.exports = setUpDb