const router = require("express").Router();
const blocController = require("../bloc.controller");
const { validate } = require("../blog.validator");

router.get("/", (req, res, next) => {
  try {
    const result = blocController.getAll();
    res.json({ body: result });
  } catch (e) {
    next(e);
  }
});

router.post("/", validate, (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data });
    res.json({ msg: "hello post" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    console.log({ id, data });
    res.json({ msg: "hello from put " });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    console.log({ id, data });
    res.json({ msg: "hello" });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    const { id } = req.params;

    console.log({ id });
    res.json({ msg: "hello" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
