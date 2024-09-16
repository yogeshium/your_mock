import mongoose from "mongoose";
import joi from "joi";
import bcrypt from "bcrypt";

const mockIdSchema = new mongoose.Schema({
  id: {
    type: String,
  },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [255, "Password must be less than 255 characters long"],
  },
  createdMocks: [mockIdSchema],
  accessibleMocks: [mockIdSchema],
});

function validateUserSignup(user) {
  const schema = joi.object({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
}
function validateUserLogin(user) {
  const schema = joi.object({
    email: joi.string().min(5).max(255).required().email(),
    password: joi.string().min(8).max(255).required(),
  });
  return schema.validate(user);
}

// Compare password with hashed password in database
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

export default User;
export { validateUserLogin, validateUserSignup };
