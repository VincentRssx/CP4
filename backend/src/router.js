const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const InfosControllers = require("./controllers/InfosControllers");
const ExperiencesProControllers = require("./controllers/ExperiencesProControllers");
const CompTechControllers = require("./controllers/CompTechControllers");
const FormAcademiqueControllers = require("./controllers/FormAcademiqueControllers");

// Route to get
router.get("/infosgenerales", InfosControllers.browse);
router.get("/experiencespro", ExperiencesProControllers.browse);
router.get("/competencestechnique", CompTechControllers.browse);
router.get("/FormationAcademique", FormAcademiqueControllers.browse);
// Route to create
router.post("/FormationAcademique/create", FormAcademiqueControllers.create);
/* ************************************************************************* */

module.exports = router;
