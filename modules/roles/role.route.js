const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "bbbxbb" });
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;
    res.json({ msg: data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
