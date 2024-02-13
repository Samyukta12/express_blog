const router = require("express").Router();
const BlocController = require("./bloc.controller");
const { validate } = require("./blog.validator");

router.get("/", async (req, res, next) => {
  try {
    const result = await BlocController.getAll();
    res.json({ body: result });
  } catch (e) {
    next(e);
  }
});

router.post("/", validate, async (req, res, next) => {
  try {
    const data = req.body;
    const result = await BlocController.create(data);

    res.json({ data: result });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", validate, async (req, res, next) => {
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
