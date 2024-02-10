const router = require("express").Router();

const roleRouter = require("../modules/roles/role.route");

router.use("/api/v1/roles", roleRouter);

module.exports = router;
