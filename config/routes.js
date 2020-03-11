const express = require('express')
const router = express.Router()
const tweetsController = require('../app/controllers/tweetsController')

// router.get('/tweets', tweetsController.list)
router.post('/tweets', tweetsController.list)
// router.post('/tweets', tweetsController.create)

// app.get('/', routes.index);
// app.get('/page/:page/:skip', routes.page);

module.exports = router
  