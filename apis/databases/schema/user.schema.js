const { checkSchema } = require("express-validator");
const databaseConnect = require("../database");

const loginSchema = checkSchema(
  {
    username: {
      in: ["body"],
      isString: true,
      exists: true,
      errorMessage: "Username is required",
      custom: {
        options: (value, { req }) => {
          return databaseConnect.usersCollection
            .findOne({
              username: value,
            })
            .then((user) => {
              if (!user) {
                return Promise.reject("Username or password is incorrect");
              }
            });
        },
      },
    },
    password: {
      in: ["body"],
      isString: true,
      exists: true,
      errorMessage: "Password is required",
      custom: {
        options: async (value, { req }) => {
          const user = await databaseConnect.usersCollection.findOne({
            username: req.body.username,
          });
          if (!user) {
            return Promise.reject("Username or password is incorrect");
          }
        },
      },
    },
  },
  ["body"]
);

const registerSchema = checkSchema(
  {
    username: {
      in: ["body"],
      isString: true,
      exists: true,
      errorMessage: "Username is required",
      custom: {
        options: (value, { req }) => {
          return databaseConnect.usersCollection
            .findOne({
              username: value,
            })
            .then((user) => {
              if (user) {
                return Promise.reject("Username already exists");
              }
            });
        },
      },
    },
    password: {
      in: ["body"],
      isString: true,
      exists: true,
      errorMessage: "Password is required",
      isStrongPassword: {
        errorMessage:
          "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol",
      },
    },
  },
  ["body"]
);

module.exports = {
  loginSchema,
  registerSchema,
};
