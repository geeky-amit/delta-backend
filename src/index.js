require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

(async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/todolist`);
    console.log(`MongoDB Connected : ${conn.connection.host}`);

    app.listen(process.env.PORT, () => {
      console.log("app is listening on port " + process.env.PORT);
    });
  } catch (error) {
    console.error("Error", error);
  }
})();

app.use("/api/todo", todoRoutes);
