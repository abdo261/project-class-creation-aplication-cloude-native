const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { POWER_HASH, SUCRET_KEY } = require("dotenv").config().parsed;
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const { email, mot_de_passe, nom, prenom, isAdmin } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "email deja exist !! " });
    const passHash = await bcrypt.hash(mot_de_passe, Number(POWER_HASH));
    const newUser = new User({
      email,
      mot_de_passe: passHash,
      nom,
      prenom,
      isAdmin,
    });
    const userSave = await newUser.save();
    res.status(201).json({
      message: "compte cree avec success vou vouller connecter",
      user: userSave,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ message: "email ou mot de passe incorrect" });

    const password = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
    if (!password)
      return res
        .status(400)
        .json({ message: "email ou mot de passe incorrect" });
    const token = await jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      SUCRET_KEY,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      message: " vous aver connectez avec success",
      token,
      user: {
        _id:user._id,
        email,
        nom: user.nom,
        prenom: user.prenom,
        user_name: user.user_name,
        isAdmin: user.isAdmin,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
const remove = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.id);
    if (!user) return res.status(404).json({ message: "compte n'exist pas" });
    res.status(200).json({ message: "compte suprimmer avec success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login,remove };
