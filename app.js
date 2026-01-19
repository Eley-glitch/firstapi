const express = require("express");
const cors = require("cors");

const studentsRoutes = require("./routes/students.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students',studentsRoutes)

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;