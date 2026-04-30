const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const courseRoutes = require("./routes/courseRoutes");
const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/courses", courseRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});