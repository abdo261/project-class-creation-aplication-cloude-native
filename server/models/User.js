const { boolean } = require("joi");
const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
  nom: {
    type: String,
    required: true,
    minlength: 3,
  },
  prenom: {
    type: String,
    required: true,
    minlength: 3,
  },
  user_name: {
    type: String,
    default: function(){
      return this.nom + "_" + this.prenom
    } ,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mot_de_passe: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},{
  timestamps:true,
  versionKey:false
});

const User = model('user',UserSchema)
module.exports = User

