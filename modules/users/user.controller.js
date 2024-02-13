const UserModel = require("./user.model");
const { hashPassword, comparePassword } = require("../../utils/bcrypt");
const { mailer } = require("../../services/mailer");
const { signJWT, verifyJWT } = require("../../utils/token");

const create = (payload) => {
  return UserModel.create(payload);
};

const getAll = () => {
  return UserModel.find();
};
const getById = (_id) => {
  return UserModel.findOne({ _id });
};
const updateById = ({ _id }, payload) => {
  return UserModel.updateOne({ id }, payload);
};
const deleteById = (_id) => {
  return UserModel.deleteOne({ _id });
};

const registerUser = async (payload) => {
  console.log(payload);
  const { password } = payload;
  if (!password) throw new Error("Password is missing");

  // update req.body in controller as password(bcrypt)
  payload.password = hashPassword(payload.password);
  // console.log(payload);

  // // // //user creating with payload
  const user = await UserModel.create(payload);
  // return user;
  if (!user) throw new Error("User Registration Failed");

  const mail = await mailer(user.email);
  if (!mail) throw new Error("Failed to send email");
  return "User Registration Successful";
};
const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("Not found");
  const user = await UserModel.findOne({ email }).select("+password");
  if (!user) throw new Error("User not found");
  const { password: hashPassword } = user;
  const result = comparePassword(password, hashPassword);
  if (!result) throw new Error("Incorrect password");
  // return "User login succesfully";
  const userPayload = { email: user.email, role: user.role };
  const token = signJWT(userPayload);
  return token;
};

const resetPassword = async (payload) => {
  const { userId, password } = payload;
  if (!userId || !password) throw new Error("Not found");
};
const changePassword = async (payload) => {
  const { userId, password, hashPassword } = payload;
  if (!userId || !password || !hashPassword)
    throw new Error("Something went wrong");
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  registerUser,
  loginUser,
  resetPassword,
  changePassword,
};
