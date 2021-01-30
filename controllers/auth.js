const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req, res, next) => {
  // POST DATA
  const name = "Fatma Tufan";
  const email = "ftufan.6602@gmail.com";
  const password = "12345";

  const user = await User.create({
    name,
    email,
    password,
  });

  res
    .status(200)
    .json({
    success: true,
    data: user,
  });
});

const errorTest = (req, res, next) => {
  // some code
  return next(new CustomError("Something went wrong..", 400));
  //some code
};

module.exports = { register, errorTest };
