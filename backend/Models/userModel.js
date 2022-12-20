import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  dob: { type: Date, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;
