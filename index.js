const express = require('express')
const app = express()
const router = require('./config/routes')
const cors = require('cors')
const io = require('socket.io')
const setUpDb = require('./config/database')

setUpDb()

const port = 3010

app.get('/', (req, res) => {
    res.send('hello')
})  

app.use(cors())
app.use(express.json())
app.use('/', router)

const server = app.listen(port, () => {
    console.log('listening on the port')
})

io.listen(server)

module.exports = io