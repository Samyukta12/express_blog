const Joi = require("joi");

const Schema = Joi.object({
  title: Joi.string().min(10).required(),
  author: Joi.string().max(5).required(),
  tag: [Joi.string().max(10).required()],
  status: Joi.string(),
});

const validate = (req, res, next) => {
  const { error } = Schema.validate(req.body);
  if (error) {
    res.status(402).json({ msg: error });
  } else {
    next();
  }
};

module.exports = { validate };
