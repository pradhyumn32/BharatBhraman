const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

function timestamp() {
  const timestamp = Date.now(); // Get the current timestamp
  const currentDate = new Date(timestamp); // Create a Date object from the timestamp

  const dayOfWeek = currentDate.getDay(); // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const dateOfMonth = currentDate.getDate();
  return dayOfWeek;
};

const postSchema = mongoose.Schema({
  cover: String,
  heading: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  body: String,
  date: {
    type: Date,
    default: timestamp,
  },
});
module.exports = mongoose.model("post", postSchema, "posts");