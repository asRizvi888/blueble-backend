const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const availabilitySchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  dayOfWeek: String,
  createdBy: String,
});

const User = mongoose.model("User", userSchema);
const Availability = mongoose.model("Availability", availabilitySchema);

module.exports = { User, Availability };
