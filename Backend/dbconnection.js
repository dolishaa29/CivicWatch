let mongoose=require("mongoose");

require('dotenv').config();

const mongoUri = process.env.MONGO_URL;

mongoose.connect(mongoUri);

const city = mongoose.connection;

city.on('connected', () => {
  console.log("Connected to MongoDB successfully");
});

city.on('error', (error) => {
  console.error("Error connecting to MongoDB:", error.message);
});

city.on('disconnected', () => {
  console.log("Disconnected from MongoDB");
});

module.exports = city;
