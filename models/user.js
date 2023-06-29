import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
 email: {
  type: String,
  unique: [true, 'Email already exists!'],
  required: [true, 'Email is required!'],
 },

 username: {
  type: String,
  required: [true, 'Username is required!'],
  unique: true,
  validate: {
   validator: function (value) {
    return /^[a-zA-Z0-9._]{8,20}$/.test(value);
   },
   message: 'Username invalid, it should contain 8-20 alphanumeric letters and be unique!'
  }},
  
 
 image: {
  type: String,
 }
});

const User = models.User || model("User", UserSchema);

export default User;
// for next js 
// const User = models.User || model("User", UserSchema);

// if we have an always running backend server with express we
// const User = model("User", UserSchema);

// export default User;