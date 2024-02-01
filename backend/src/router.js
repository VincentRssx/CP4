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
router.get("/jeuxFF/:id", JeuxFFControllers.read);

// Route to create
router.post("/jeuxFF/create", JeuxFFControllers.createJeux);
router.post("/jeuxTES/create", JeuxTESControllers.createJeux);

// Route to delete
router.delete("/jeuxFF/deletes/:id", JeuxFFControllers.deleteJeux);
router.delete("/jeuxTES/deletes/:id", JeuxTESControllers.deleteJeux);

// Route to update
router.put("/jeuxFF/update", JeuxFFControllers.updateJeux);
router.put("/jeuxTES/update", JeuxTESControllers.updateJeux);

/* ************************************************************************* */

module.exports = router;
