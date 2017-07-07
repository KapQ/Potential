var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thatSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true},
  year: Date,
  details:[{
    worth: { type: Number, required: true, default: 1 },
    when: { type: String, lowercase: true, trim: true },
    reasons: { type: String, required: true }
  }],
  reasons: [String],
  source: { type: String}
})

var That = mongoose.model('That', thatSchema);

module.exports = That;
