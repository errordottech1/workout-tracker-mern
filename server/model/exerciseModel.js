import mongoose from "mongoose";

const exerciseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "No description provided for this exercise",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  img: String,
});

const ExerciseModel = mongoose.model("Exercise", exerciseSchema);

export default ExerciseModel;
