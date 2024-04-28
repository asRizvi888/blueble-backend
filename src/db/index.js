const mongoose = require("mongoose");

// Connect to MongoDB

const connectDB = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://asRIZVI:alsha_V888@cluster0.rpb7g5a.mongodb.net/blueble",
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
