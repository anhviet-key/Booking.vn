const mongoose = require('mongoose');
// const { Schema } = mongoose;

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  amenities: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    require: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});
mongoose.set('strictQuery', true);

module.exports = mongoose.model('Hotel', HotelSchema);
