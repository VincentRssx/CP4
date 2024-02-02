// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const items = await tables.jeuxelderscrolls.readAll();

    // Respond with the items in JSON format
    res.json(items);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const createJeux = async (req, res, next) => {
  const decision = req.body;
  try {
    // Insert the decision into the database
    const insertId = await tables.jeuxelderscrolls.create(decision);
    res.status(201).json(insertId);
  } catch (err) {
    next(err);
  }
};

const deleteJeux = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Appel de votre méthode de suppression avec l'ID
    const jeuxDelete = await tables.jeuxelderscrolls.delete({ id });

    res.json(jeuxDelete);
  } catch (err) {
    // Gérer les erreurs
    next(err);
  }
};

const updateJeux = async (req, res, next) => {
  // Extract the decision data from the request body
  const Jeux = req.body;

  try {
    // Insert the Jeux into the database
    const insertId = await tables.jeuxelderscrolls.update(Jeux);

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
};
