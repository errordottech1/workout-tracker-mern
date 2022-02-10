import mongoose from "mongoose";
import Exercise from "../model/exerciseModel.js";

export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const getExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No exercise with id: ${id}`);
  try {
    const exercise = await Exercise.findById(id);
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const createExercise = async (req, res) => {
  const fields = req.body;
  if (!fields.title) return res.status(400).send("Title is required");
  const exercise = new Exercise({
    ...fields,
    createdAt: new Date().toISOString(),
  });
  try {
    await exercise.save();
    res.status(200).json(exercise);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const updateExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No exercise with id: ${id}`);
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const deleteExercise = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No exercise with id: ${id}`);
  try {
    await Exercise.findByIdAndRemove(id);
    res.status(200).json(`Exercise "${id}" deleted successfully.`);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};
