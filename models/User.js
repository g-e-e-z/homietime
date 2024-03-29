const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  pfp: String,
  bio: String,
  email: String,
  createdAt: String,
  liked: [],
  disliked: [],
});

module.exports = model("User", userSchema);
