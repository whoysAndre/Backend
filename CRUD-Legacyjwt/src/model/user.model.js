import { Schema,model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE','USER_ROLE']
  },
  state: {
    type: Boolean,
    default: true
  },
  google:{
    type: Boolean,
    default: false
  }
});
//No quiero que se muestre el password
UserSchema.methods.toJSON = function(){
  const { __v,password, _id, ...usuario  } = this.toObject();
  usuario.uid = _id;
  return usuario;
}

const Users = model('Users',UserSchema);
export default Users;