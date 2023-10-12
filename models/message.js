const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date
});

module.exports = mongoose.model('Message', messageSchema);
