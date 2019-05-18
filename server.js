// require dependencies
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');
const path = require('path');
const fs = require('file-system');
const multer = require('multer');
const uuid = require('uuid/v4');
// const auth = require('./middleware/auth');
// const User = require('./controller/user');
const cors = require('cors')

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
// mongoose.connect("mongodb://localhost/crdsDB", { useNewUrlParser: true }) //Local test DB
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
app.use(multer({ storage }).single('image'));

// Session authentication 
app.use(session({
  secret: 'C@rd$_S3cr3t_Se$$10n',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {

  console.log('req.session', req.session);
  // app.locals.user = req.user;
  console.log(req.user);
  next()

})


// Session validator 
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('Authenticated');
    return next();
  }
  res.redirect('/');
}


// ROUTES
// ========================================================================================
// ========================================================================================

// Middleware

app.use(bodyParser.urlencoded({ limit: "500mb", extended: false }));
app.use(bodyParser.json({limit: "500mb"}));

app.use(cors());
// app.use(logger("dev"));

const router = express.Router();
let Crds = require('./models/Crds');
let User = require('./models/User');
let Message = require('./models/Message')


// Card Routes
router.route('/crds').get(function (req, res) {
  Crds.find(function (err, crds) {
    if (err) {
      console.log(err)
    } else {
      res.json(crds)
    }
  });
});

router.route('/crds/:id').get(function (req, res) {
  let id = req.params.id;
  Crds.findById(id, function (err, crds) {
    res.json(crds)
  });
});

router.route('/crds/:name').get(function (req, res) {
  let name = req.params.name;
  Crds.findById(name, function (err, crds) {
    res.json(crds)
  });
});

router.route('/crds').post(function (req, res) {

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

router.route('/crds/update/:id').post(isAuthenticated, function (req, res) {
  Crds.findById(req.params.id, function (err, crds) {
    if (!crds) {
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

require('./passport/localAuth');

router.route('/users').get(function (req, res) {
  User.find(function (err, users) {
    if (err) {
      console.log(err)
    } else {
      res.json(users)
    }
  });
});

router.route('/users').post(passport.authenticate('local-signup', {
  successRedirect: '/login',
  failureRedirect: '/',
  passReqToCallback: true
}))

router.route('/users/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, users) {
    res.json(users)
  });
});

router.route('/users/login').post(passport.authenticate('local-signin', {failureRedirect: '/login'}),
function(req, res) {
  console.log('passed auth')
  res.redirect('/')
})


// router.route('/login').post(
//   function (req, res, next) {
//   console.log("Route, login req.body")
//   console.log(req.body)
//   next()
// }, 
// passport.authenticate(('local-signin'), (req, res) => {
//   console.log('logged in ');
//   // console.log('session info: \n' + req.session)
//   // var userInfo = {
//   //   email: req.user.email
//   // };
//   // res.send(userInfo);
//   res.redirect('/')
// }))


router.route('/users/update/:id').post(isAuthenticated, function (req, res) {

  User.findById(req.params.id, function (err, users) {
    if (!users) {
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

router.route('/logout', (req, res, next) => {
  // req.logout();
  // res.resdirect('/');
if(user) {
  req.session.destroy()
  res.clearCookie('connect.sid')
  return res.json({ msg: 'logging you out'})
} else {
  return res.json({ msg: 'no user to log out'})
}
});

// Message  Routes
router.route('/message').get(function (req, res) {
  Message.find(function (err, message) {
    if (err) {
      console.log(err)
    } else {
      res.json(message)
    }
  });
});

router.route('/message').post(function (req, res) {
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

// Image upload route

// const storage = multer.diskStorage({
//   destination: function (req, res, cb) {
//     cb(null, 'uploads/')
//   }
// });
// const multer = require('multer');
// const upload = multer({ storage: storage });
// router.route('/img_data')
//   .post(upload.single('file'), function (req, res) {
//     var new_img = new Img;
//     new_img.img.data = fs.readFileSync(req.file.path)
//     new_img.img.contentType = 'image/jpeg';  // or 'image/png'
//     new_img.save();
//     res.json({ message: 'New image added to the db!' });
//   })
//   .get(function (req, res) {
//     Img.findOne({}, 'img createdAt', function (err, img) {
//       if (err)
//         res.send(err);
//       res.contentType('json');
//       res.send(img);
//     }).sort({ createdAt: 'desc' });
//   });

app.use('/api', router)

// END ROUTES
// =========================================================================================
// =========================================================================================


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));

});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
