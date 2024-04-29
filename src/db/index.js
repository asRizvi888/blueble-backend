require("dotenv").config();

const mongoose = require("mongoose");

// Connect to MongoDB

const connectDB = async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
