const express = require("express");
const app = express();
require("./models/conn");
var studentContr = require("./controllers/studentController");
app.get("/", (req, res) => {
  res.send("home");
});

// Scpooe
app.get("/scope", studentContr.scope);
app.listen(3000);
