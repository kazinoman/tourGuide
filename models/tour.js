const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  location: {
    type: String,
    required: [true, "a tour must have a name"],
  },
  photo: {
    type: String,
  },
  cost: String,
  difficulty: String,
  maxPeople: {
    type: Number,
    default: 10,
  },
  lat_coordinate: Number,
  len_coordinate: Number,
  ratingAvarage: Number,
  startDate: Date,
  duration: {type: Number},
  description: {
    type: String,
  },
  summary : String
});

const Tour = mongoose.model("Tour", dataSchema);
module.exports = Tour;