import express from "express";
import {
  createExercise,
  deleteExercise,
  getExercise,
  getExercises,
  updateExercise,
} from "../controllers/exerciseControllers.js";

const router = express.Router();

router.get("/", getExercises);

router.post("/", createExercise);

router.get("/:id", getExercise);

router.put("/:id", updateExercise);

router.delete("/:id", deleteExercise);

export default router;
