const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  lastName: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    unique: true,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  role: {
    type: String,
  },

  active: {
    type: Boolean,
  },

  avatar: {
    type: String
  },
  
});

module.exports = mongoose.model("users", userSchema);