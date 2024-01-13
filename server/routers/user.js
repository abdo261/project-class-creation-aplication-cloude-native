const Router = require("express").Router();
const { register, login,remove } = require("../controllers/User");
const isAuth = require('../middlewares/isAuth')
Router.post("/register", register);
Router.post("/login", login);
Router.post("/remove",isAuth, remove);

module.exports = Router;
