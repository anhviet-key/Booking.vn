const mongoose = require('mongoose');
// const { Schema } = mongoose;

const ReviewSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
mongoose.set('strictQuery', true);

module.exports = mongoose.model('Auth', ReviewSchema);
