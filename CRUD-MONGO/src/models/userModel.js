/*----Import-----*/
const mongoose = require('mongoose');

/*----Instancing mongoose schema----*/
const Schema = mongoose.Schema;

/*----Create Schema----*/;
const userSchema = new Schema({
  name: String,
  age: Number,
  emai: String
});

/*----Create model----*/
const User = mongoose.model('User',userSchema);

/*----Export-----*/
module.exports = User;
