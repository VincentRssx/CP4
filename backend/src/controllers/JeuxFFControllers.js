// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await tables.jeuxfinalfantasy.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    // Fetch a specific jeux from the database based on the provided ID
    const jeux = await tables.jeuxfinalfantasy.readOne(req.params.id);

    // If the jeux is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the jeux in JSON format
    if (jeux == null) {
      res.sendStatus(404);
    } else {
      res.json(jeux);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const createJeux = async (req, res, next) => {
  const jeux = req.body;
  try {
    // Insert the jeux into the database
    const insertId = await tables.jeuxfinalfantasy.create(jeux);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

const deleteJeux = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Appel de votre méthode de suppression avec l'ID
    const jeuxDelete = await tables.jeuxfinalfantasy.delete({ id });

    res.json(jeuxDelete);
  } catch (err) {
    // Gérer les erreurs
    next(err);
  }
};

const updateJeux = async (req, res, next) => {
  // Extract the jeux data from the request body
  const Jeux = req.body;

  try {
    // Insert the Jeux into the database
    const insertId = await tables.jeuxfinalfantasy.update(Jeux);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted Jeux
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  createJeux,
  deleteJeux,
  updateJeux,
  read,
};
