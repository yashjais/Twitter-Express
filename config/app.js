const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path') 

app.use(express.json())
app.use(cors())
// const dirPath = __dirname.replace('\config', '')
// app.use(express.static(path.join(dirPath,"client/build"))) 

module.exports = app 