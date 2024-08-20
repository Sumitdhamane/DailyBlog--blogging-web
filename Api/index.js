const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

if (!process.env.MONGOOSE) {
  console.error("MONGOOSE connection string is not defined in .env file.");
  process.exit(1); // Exit the application
}

mongoose
  .connect(process.env.MONGOOSE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is running perfectly");
});
