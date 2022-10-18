const mongoose = require("mongoose");
const validator = require("validator");
const { hash } = require("./../utils/passwordHasher");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required to register"],
    unique: [true, "user with this email already exist"],
    trim: true,
    lowerCase: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
  name: {
    type: String,
    reqired: true,
    trim: true,
    minlength: [3, "A name must at least have 3 charaters or more"],
    maxlength: [30, "A name must not have more than 30 characters"],
  },
  password: {
    type: String,
    required: [true, "password is needed to create an account"],
    minlength: [5, "A password must at least contain 5 or more characters"],
    trim: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  this.password = await hash(this.password);
  this.passwordConfirmation = undefined;
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
