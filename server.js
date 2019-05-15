// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session')
const morgan = require('morgan');
const path = require('path');
const fs = require('file-system');
const multer = require('multer');
const uuid = require('uuid/v4');
const auth = require('./middleware/auth');
const userCtrl = require('./controller/user');

// const logger = require('logger')

// dependency methods
let app = express();

// establish port on 1993 
let PORT = process.env.PORT || 1993; 

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

let db = mongoose.connection;

// Connect to the Mongo DB
mongoose.connect("mongodb://miles:password1@ds039441.mlab.com:39441/heroku_cpbwq7nv", { useNewUrlParser: true }); 
db.once("open", () => console.log("connected to the database successfully!"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Multer config
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'client/public/cardImg'),
  filename: (req, file, cb, filename) => {
    console.log(file);
    cb(null, uuid() + path.extname(file.originalname));
  }
});
app.use(multer({storage}).single('image'));


// Session authentication 
app.use(session({
  secret: "CRDS",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// ROUTES
// ========================================================================================
// Middleware
app.use(bodyParser.urlencoded({ limit: "500mb", extended: false }));
app.use(bodyParser.json({limit: "500mb"}));
// app.use(logger("dev"));

const router = express.Router();
let Crds = require('./models/Crds');
let User = require('./models/User');
// let Sesh = require('./models/userSession');
let Message = require('./models/Message') 


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

router.route('/crds').post(function(req, res) {
  console.log(req.body)
  let crd = new Crds(req.body);
  
  crd.save()
    .then(crds => {
      console.log(crds)
      res.status(200).json(crds)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send('adding crd failed... you are a failure')
    })
});
 
router.route('/crds/update/:id').post(auth, function(req, res) {
  Crds.findById(req.params.id, function(err, crds) {
    if (!crds){
      res.status(404).send('Data is not found')
    } else {
      crds.name = req.body.name;
      crds.email = req.body.email;
      crds.phone = req.body.phone;
      crds.title = req.body.title;
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
  let id = req.params.id;
  User.findById(id, function(err, users) {
    res.json(users)
  });
});

router.route('/users').post(function(req, res) {
  console.log(req.body)
  let user = new User(req.body); 
  user.save()
    .then(users => { 
      res.status(200).json(users);
      // successRedirect: '/login'
    }) 
    .catch(err => {
      console.log(err)
      res.status(400).send('adding user failed... you are a failure')
    })
});

router.route('/users/login').post(userCtrl.login, function(req, res) {
  res.redirect

})

// will not need this route as user information will not change
router.route('/users/update/:id').post(auth, function(req, res) {

  User.findById(req.params.id, function(err, users) {
    if (!users){
      res.status(404).send('Data is not found')
    } else {
      res.json(users)
    }

    users.save().then(crds => {
      res.json('card saved')
    })
    .catch(err => {
      res.status(404).send('Error on card update')
    })
  })
})

// User Session route
// router.route('/session').get(function(req, res) {
//   Sesh.find(function(err, sesh) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.json(sesh)
//     }
//   });
// });

// router.route('/session').post(function(req, res) {
//   let sesh = new Sesh(req.body);
//   sesh.save()
//     .then(sesh => {
//       console.log(sesh)
//       res.status(200).json(sesh)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(400).send('adding user failed... you are a failure')
//     })
// });

// router.route('/session/:id').get(function(req, res) {
//   let id = req.params.id;
//   Sesh.findById(id, function(err, sesh) {
//     if (err) {
//       console.log(err)
//     } else {
//       res.json(sesh)
//     }
    
//   });
// });

// Card Routes
router.route('/message').get(function(req, res) {
  Message.find(function(err, message) {
    if (err) {
      console.log(err)
    } else {
      res.json(message)
    }
  });
});

router.route('/message').post(function(req, res) {
  let message = new Message(req.body);
  message.save()
    .then(msg => {
      console.log(msg)
      res.status(200).json(msg)
    })
    .catch(err => {
      console.log(err)
      res.status(400).send('adding user failed... you are a failure')
    })
});

router.route('/users/login').post(function(req, res) {
  const { email, password } = req.body;
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({
        error: 'Internal error please try again'
      });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
          });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
        }
      });
    }
  });
});

app.use('/api', router)

// END ROUTES
// =========================================================================================
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });