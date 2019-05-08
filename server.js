// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session')
const morgan = require('morgan');
const path = require('path');
// const logger = require('logger')

// establish port on 1993 
let PORT = process.env.PORT || 1993; 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// dependency methods
let app = express();
let db = mongoose.connection;

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/crdsDB", { useNewUrlParser: true }); 
db.once("open", () => console.log("connected to the database successfully!"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// ROUTES
// ========================================================================================
const router = express.Router();
let Crds = require('./models/Crds');
let User = require('./models/User'); 

// Card Routes
router.route('/crds').get(function(req, res) {
  Crds.find(function(err, crds) {
    if (err) {
      console.log(err)
    } else {
      res.json(crds)
    }
  });
});

router.route('/crds/:id').get(function(req, res) {
  let id = req.params.id;
  Crds.findById(id, function(err, crds) {
    res.json(crds)
  });
});

router.route('/crds/add').post(function(req, res) {
  let crd = new Crds(req.body);
  crd.save()
    .then(crd => {
      console.log(crd)
      res.status(200).json({'crd': 'crd added successfully!'})
    })
    .catch(err => {
      console.log(err)
      res.status(400).send('adding crd failed... you are a failure')
    })
});
 
router.route('/crds/update/:id').post(function(req, res) {
  Crds.findById(req.params.id, function(err, crds) {
    if (!crds){
      res.status(404).send('Data is not found')
    } else {
      crds.name = req.body.name;
      crds.emial = req.body.emial;
      crds.phone = req.body.phone;
      crds.titel = req.body.title;
      crds.category = req.body.category;
      crds.skills = req.body.skills
    }

    crds.save().then(crds => {
      res.json('card saved')
    })
    .catch(err => {
      res.status(404).send('Error on card update')
    })
  })
})

// User Routes
router.route('/users').get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      console.log(err)
    } else {
      res.json(users)
    }
  });
});

router.route('/users/:id').get(function(req, res) {
  User.findById(id, function(err, users) {
    let id = req.params.id;
    res.json(users)
  });
});

router.route('/users/add').post(function(req, res) {
  let user = new User(req.body);
  user.save()
    .then(users => {
      res.status(200).json({'user': 'user added successfully!'})
    })
    .catch(err => {
      res.status(400).send('adding user failed... you are a failure')
    })
});

// will not need this route as user information will not change
router.route('/users/update/:id').post(function(req, res) {
  User.findById(req.params.id, function(err, users) {
    if (!users){
      res.status(404).send('Data is not found')
    } else {
      users.name = req.body.name;
      users.emial = req.body.emial;
      users.phone = req.body.phone;
      users.titel = req.body.title;
      users.category = req.body.category;
      users.skills = req.body.skills
    }

    users.save().then(crds => {
      res.json('card saved')
    })
    .catch(err => {
      res.status(404).send('Error on card update')
    })
  })
})

app.use('/api', router)


// END ROUTES
// =========================================================================================




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
