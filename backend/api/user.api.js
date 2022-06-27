const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/userModel");

let message, status;

const register = async (ctx) => {
  try {
    const user = ctx.request.body;
    const { name, street, number, city, phone, role, email, password } = user;

    if (
      !name ||
      !street ||
      !number ||
      !city ||
      !phone ||
      !role ||
      !email ||
      !password
    ) {
      message = "please fill all the fields!!";
      status = 400;
    } else {
      const exUser = await User.findOne({ email });
      if (exUser) {
        message = "user already registerd!!";
        status = 400;
      } else {
        const newUser = new User({
          name,
          "address.number": number,
          "address.street": street,
          "address.city": city,
          phone,
          role,
          email,
          password,
        });

        await newUser.save();
        message = { msg: "user registered successfully!!", newUser };
        status = 200;
      }
    }
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const login = async (ctx) => {
  try {
    const user = ctx.request.body;
    const { email, password } = user;

    const exUser = await User.findOne({ email });

    if (!exUser) {
      message = "user connot found!";
      status = 400;
    } else {
      if (exUser.password == password) {
        const accesstoken = createToken({ _id: exUser._id });
        message = { msg: "loging successfully!!", accesstoken };
        status = 200;
      } else {
        message = "password incorect!!";
        status = 400;
      }
    }
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const getMyProfile = async (ctx) => {
  try {
    const userId = ctx.request.user._id;
    const user = await User.findById(userId);
    message = user;
    status = 200;
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const getAllUsers = async (ctx) => {
  try {
    const users = await User.find();
    message = users;
    status = 200;
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const createToken = (user) => {
  return jwt.sign(user, process.env.TOKEN, { expiresIn: "1h" });
};

module.exports = { register, login, getMyProfile, getAllUsers };
