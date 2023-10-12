var express = require('express');
var router = express.Router();
const Message = require('../models/message');

// GET /new to display the form


var messages = require('./messagesModule');


router.use(express.urlencoded({ extended: true }));


router.get('/', function(req, res, next) {
    res.render('new', { title: 'New Message' });
  });
  
  // POST /new to handle form submission
  router.post('/', async function(req, res, next) {
    // Get the message from the request body (you'd typically use middleware like body-parser for this)
    const text = req.body.text;
    const user = req.body.user;
    
    
    // Add the new message to the messages array
    const newMessage = new Message({
        text: text,
        user: user,
        added: new Date()
      });
      try {
        await newMessage.save();
        res.redirect('/');
      } catch(err) {
        next(err); // Handle the error, maybe render an error page or something
      }
    
  });
  

  module.exports = router;