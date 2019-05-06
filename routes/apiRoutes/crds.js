const router = require("express").Router();
const crds = require("../../controllers/crds.js");

// Matches with "/api/crds"
router.route("/")
  .get(crds.findAll)
  .post(crds.create);

// Matches with "/api/crds/:id"
router
  .route("/:id")
  .get(crds.findById)
  .put(crds.update)
  .delete(crds.remove);

module.exports = router;
