// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session')
// const morgan = require('morgan');
const path = require('path');

const crds = require('./routes/apiRoutes/crds.js');
const users = require('./routes/apiRoutes/user.js');


// establish port on 1993 
let PORT = process.env.PORT || 1993; 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// dependency methods
let app = express();
let db = mongoose.connection;

app.use('/api/users', users)
app.use('/api/crds', crds)

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/crdsDB", { useNewUrlParser: true }); 
db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));

// Session authentication 
app.use(session({
  secret: "CRDS",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
