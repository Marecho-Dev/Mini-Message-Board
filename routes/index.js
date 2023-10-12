var express = require('express');
var router = express.Router();


var messages = require('./messagesModule');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});


module.exports = router;