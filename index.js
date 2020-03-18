// require('dotenv').config()
const app = require('./config/app')
const server = require('./config/server')
const setupDB = require('./config/database')
const socket = require('./config/socket')

setupDB()
