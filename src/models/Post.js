const {
  Schema,
  model
} = require('mongoose');

const PostSchema = new Schema({

  songs: {
    type: Array,
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