const JWT = require("jsonwebtoken");

const signJWT = (payload) => {
  return JWT.sign(
    {
      data: payload,
    },
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.TOKEN_EXPIRE }
  );
};

const verifyJWT = (token) => {
  return JWT.verify(token, process.env.TOKEN_SECRET);
};

module.exports = { signJWT, verifyJWT };
