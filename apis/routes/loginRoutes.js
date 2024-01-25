const express = require("express");
const { registerController } = require("../controller/user.controller");
const {
  loginSchema,
  registerSchema,
} = require("../databases/schema/user.schema");
const validate = require("../utils/validate");

const loginRouter = express.Router();

loginRouter.post("/login", validate(loginSchema), (req, res) => {
  res.send("Login");
});

loginRouter.post("/register", validate(registerSchema), registerController);

module.exports = loginRouter;
