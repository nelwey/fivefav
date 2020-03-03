const { Schema, model} = require('mongoose');

const PostSchema = new Schema({

  song1: {
    type: String,
    required: true
  },
  song2: {
    type: String,
    required: true
  },
  song3: {
    type: String,
    required: true
  },
  song4: {
    type: String,
    required: true
  },
  song5: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});


module.exports = model('Post', PostSchema);