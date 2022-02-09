export const getExercises = async (req, res) => {
  res.status(200).send("get all exercises");
};

export const getExercise = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(`get a exercise with id of ${id}`);
  } catch (error) {
    throw new Error(`Your exercise needs a title so we can create it :(`);
  }
};

export const createExercise = async (req, res) => {
  try {
    const { exercise } = req.body;
    if (exercise) {
      res.status(200).send(`Thanks, your exercise has been created :)`);
    } else {
      res.status(400);
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updateExercise = async (req, res) => {
  const { id } = req.params;
  res.status(200).send(`update a exercise with id of ${id}`);
};

export const deleteExercise = async (req, res) => {
  const { id } = req.params;
  res.status(200).send(`delete a exercise with id of ${id}`);
};
