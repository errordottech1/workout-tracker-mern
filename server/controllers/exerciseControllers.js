export const getExercises = (req, res) => {
  try {
    res.status(200).json("get all exercises");
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const getExercise = (req, res) => {
  const { id } = req.params;
  try {
    id
      ? res.status(200).json(`get a exercise with id of ${id}`)
      : res.status(400).json("your exercise needs to have an id");
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const createExercise = (req, res) => {
  const { title } = req.body;
  try {
    title
      ? res.status(200).json(`you have created the "${title}" exercise `)
      : res.status(400).json("your exercise needs to have a title");
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const updateExercise = (req, res) => {
  try {
    id
      ? res.status(200).json(`update a exercise with id of ${id}`)
      : res.status(400).json("your exercise needs to have an id");
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};

export const deleteExercise = (req, res) => {
  try {
    id
      ? res.status(200).json(`delete a exercise with id of ${id}`)
      : res.status(400).json("your exercise needs to have an id");
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
};
