// require dependencies
const express = require('express');
const mongoose = require('mongoose');
// const passport = require('passport');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const path = require('path');

// establish port on 3000 
let PORT = process.env.PORT || 1993; 

// dependency methods
let app = express();
let db = mongoose.connection;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/crdsDB", { useNewUrlParser: true }); 
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
