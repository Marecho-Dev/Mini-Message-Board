var express = require('express');
var router = express.Router();
// GET /new to display the form


var messages = require('./messagesModule');


router.use(express.urlencoded({ extended: true }));


router.get('/', function(req, res, next) {
    res.render('new', { title: 'New Message' });
  });
  
  // POST /new to handle form submission
  router.post('/', function(req, res, next) {
    // Get the message from the request body (you'd typically use middleware like body-parser for this)
    const text = req.body.text;
    const user = req.body.user;
    
    
    // Add the new message to the messages array
    messages.unshift({
      text: text,
      user: user, // Or fetch the username from session or another source
      added: new Date()
    });
    
    // Redirect back to the main page
    res.redirect('/');
  });
  

  module.exports = router;