const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const JeuxFFControllers = require("./controllers/JeuxFFControllers");
const JeuxTESControllers = require("./controllers/JeuxTESControllers");

// Route to get
router.get("/jeuxFF", JeuxFFControllers.browse);
router.get("/jeuxTES", JeuxTESControllers.browse);

// Route to create
router.post("/jeuxFF/create", JeuxFFControllers.createJeux);
router.post("/jeuxTES/create", JeuxFFControllers.createJeux);

/* ************************************************************************* */

module.exports = router;
