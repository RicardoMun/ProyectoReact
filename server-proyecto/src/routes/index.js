const express = require("express");
const userRouter = require("./user.router");
const { API_VERSION } = require("../../config");

function routerApi(app) {
  const router = express.Router();

  /* http://localhost:3977/api/v1 */
  app.use("/api/v1", router);
  
  /* http://localhost:3977/api/v1/user */
  router.use("/users", userRouter);
}

module.exports = routerApi;
