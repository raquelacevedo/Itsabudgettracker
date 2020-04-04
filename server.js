const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

//const PORT = 3000;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// ///for heroku to work
// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds047772.mlab.com:47772/heroku_dbnpvq73";
// mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
// routes



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});