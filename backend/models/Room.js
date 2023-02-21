const mongoose = require('mongoose');
// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      default: false,
    },
    roomNumber: [{ number: Number, unavailable: { type: [Date] } }],
  },
  {
    timestamps: true,
  }
);
mongoose.set('strictQuery', true);

module.exports = mongoose.model('Room', RoomSchema);
