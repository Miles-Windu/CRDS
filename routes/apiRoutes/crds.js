const router = require("express").Router();
const crds = require("../../controller/crds.js");


// Matches with "/api/crds"
router.route("/api/crds")
  .get(crds.findAll)
  .post(crds.create);

// Matches with "/api/crds/:id"
router
  .route("/crds/:id")
  .get(crds.findById)
  .put(crds.update)
  .delete(crds.remove);


module.exports = router;
