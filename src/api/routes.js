const express = require("express");
const routes = express.Router();

const { authMiddleware } = require("./middlewares/auth");

const userController = require("./controller/userController");

const {
    registerUserValidator,
    loginUserValidator
} = require("./validators/user.validator")

routes.post("/register", registerUserValidator, userController.create);
routes.post("/login", loginUserValidator, userController.login);
// routes.get("/users/info", authMiddleware, userController.findOne);
// routes.delete("/users/:id", deleteUserValidator, userController.delete);
// routes.put("/users/:id", updateUserValidator, userController.update);

module.exports = routes;
