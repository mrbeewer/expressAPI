var mongoose = require('mongoose');

var MusicSchema = new mongoose.Schema({
  title: String,
  artist: String
});

module.exports = mongoose.model('Music', MusicSchema);
