const express = require("express");
const UserController = require("../controllers/user")
const api = express.Router();

api.post("/signup", UserController.signUp);

module.exports = api;
/*
const service = new UserService();
const UserModel = require("../models/user.model");
const UserService = require("../services/user.service");


UserRouter.post("/signUp", async (req, res, next) => {
  try {
    const data = UserController.signUp(req, res);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

UserRouter.get("/", async (req, res, next) => {
  try {
    const data = await service.listUsers();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

UserRouter.post("/user", async (req, res) => {
  try {
    const user = UserModel(req.body);
    const data = await service.createUser(user);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

UserRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await service.showUser(userId);
    res.status(302).json(data);
  } catch (error) {
    next(error);
  }
});

UserRouter.put("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { name, lastName, email, password, active, role, avatar } = req.body;
    const data = await service.editUser(
      userId, name, lastName, email, password, active, role, avatar
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

UserRouter.delete("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await service.removeUser(userId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});


 */