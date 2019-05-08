const router = require("express").Router();
const users = require('../../controller/user.js');

// Matches with "/api/user"
router.route("/api/users")
  .get(users.findAll)
  .post(users.create);

// Matches with "/api/user/:id"
router
  .route("/users/:id")
  .get(users.findById)
  .put(users.update)
  .delete(users.remove);  

module.exports = router;