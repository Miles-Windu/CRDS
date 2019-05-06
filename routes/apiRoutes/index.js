const router = require("express").Router();
const crdRoutes = require("./crds");

// Crd routes
router.use("/crds", crdRoutes);

module.exports = router;
