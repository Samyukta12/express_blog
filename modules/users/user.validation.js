const Joi = require("joi");

const Schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).alphanum().required(),
  phone: Joi.number(),
});

const validate = (req, res, next) => {
  const { error, value } = Schema.validate(req.body);
  if (error) {
    res.status(404).json({ msg: "not validatde" });
  } else {
    next();
  }
};

module.exports = { validate };
