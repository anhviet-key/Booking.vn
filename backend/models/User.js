const mongoose = require('mongoose');
// const { Schema } = mongoose;

const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
    },
    img: {
      type: String,
    },
    city: {
      type: String,
    },
    hostory: [{ number: Number, unavailable: { type: [Date] } }],
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.set('strictQuery', true);

module.exports = mongoose.model('Auth', AuthSchema);
