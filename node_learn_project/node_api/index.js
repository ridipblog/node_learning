const express = require("express");
const cors = require("cors");
const app = express();
var corOptions = {
  origin: "https://localhost:3000",
};
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
const port = process.env.PORT || 3000;
app.listen(port);
