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

module.exports = {
  browse,
  createJeux,
};
