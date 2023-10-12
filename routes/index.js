var express = require('express');
var router = express.Router();
const Message = require('../models/message');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const messages = await Message.find().sort({ added: -1 }); // Fetch all messages, sorted by date in descending order.
    res.render('index', { title: 'Mini Messageboard', messages });
  } catch (err) {
    next(err); // Handle the error, e.g., by passing it to an error-handling middleware.
  }
});


module.exports = router;