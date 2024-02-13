const router = require("express").Router();
const UserController = require("./user.controller");
const { validate } = require("./user.validation");

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello user" });
  } catch (err) {
    next(err);
  }
});

router.post("/", validate, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await UserController.create(data);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/register", validate, async (req, res, next) => {
  try {
    const result = await UserController.registerUser(req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/login", validate, async (req, res, next) => {
  try {
    const result = await UserController.loginUser(req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/reset_password", validate, async (req, res, next) => {
  try {
    const result = await UserController.loginUser(req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.post("/change_password", validate, async (req, res, next) => {
  try {
    const result = await UserController.loginUser(req.body);
    res.json({ data: result });
  } catch (err) {
    next(err);
  }
});

router.put("/", (req, res, next) => {
  try {
    res.json({ msg: "hello user" });
  } catch (err) {
    next(err);
  }
});

router.patch("/", (req, res, next) => {
  try {
    res.json({ msg: "hello user" });
  } catch (err) {
    next(err);
  }
});

router.delete("/", (req, res, next) => {
  try {
    res.json({ msg: "hello user" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
