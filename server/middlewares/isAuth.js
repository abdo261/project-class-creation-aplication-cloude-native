const jwt = require("jsonwebtoken");
const { SUCRET_KEY } = require("dotenv").config().parsed;
const isAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const payload = await jwt.verify(token, SUCRET_KEY);
    if (!payload)
      return res.status(400).json({ message: "vous ete pas conecter" });
    req.id = payload.id;
    req.isAdmin = payload.isAdmin;
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = isAuth
