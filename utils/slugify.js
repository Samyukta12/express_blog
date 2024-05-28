const slug = require("slugify");

const getSlug = (payload) => {
  return slug(payload, {
    replacement: "-",

    lower: true,
  });
};

module.exports = { getSlug };
