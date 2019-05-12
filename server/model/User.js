const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password1: {
    type: String,
    required: true
  },
  password2: {
    type: String
  }
});

const user = mongoose.model('User', UserSchema)

module.exports = user
