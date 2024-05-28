const Joi = require("joi");

const Schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).alphanum().required(),
  phone: Joi.number(),
});
const resetSchema = Joi.object({
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().min(8).alphanum().required(),
});

const validate = (req, res, next) => {
  const { error, value } = Schema.validate(req.body);
  if (error) {
    res.status(404).json({ msg: "not validatde" });
  } else {
    next();
  }
};

const resetValidate = (req, res, next) => {
  const { error, value } = resetSchema.validate(req.body);
  if (error) {
    res.status(404).json({ msg: "not validatde" });
  } else {
    next();
  }
};
const userValidate = (req, res, next) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    res.status(404).json({ msg: "not validatde" });
  } else {
    next();
  }
};

module.exports = { validate, resetValidate, userValidate };
