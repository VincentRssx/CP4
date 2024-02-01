/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("SET FOREIGN_KEY_CHECKS = 0");
    await database.query("truncate InformationsGenerales");
    await database.query("truncate ExperiencesProfessionnelles");
    await database.query("truncate CompetencesTechniques");
    await database.query("truncate FormationAcademique");
    await database.query("SET FOREIGN_KEY_CHECKS = 1");

    queries.push(
      database.query(`INSERT INTO InformationsGenerales (nom, prenom, adresse, telephone, email)
VALUES ('Doe', 'John', '123 Main Street', '123-456-7890', 'john.doe@email.com');`)
    );
    queries.push(
      database.query(`INSERT INTO ExperiencesProfessionnelles (titre, entreprise, lieu, date_debut, date_fin, description,user_id)
VALUES ('Développeur Web', 'ABC Company', 'Ville A', '2020-01-01', '2022-01-01', 'Conception et développement de sites Web.',1);`)
    );

    queries.push(
      database.query(`INSERT INTO CompetencesTechniques (domaine, competence, niveau,user_id)
VALUES ('Langages de programmation', 'JavaScript', 'Avancé',1),
       ('Frameworks', 'React', 'Intermédiaire',1),
       ('Base de données', 'MySQL', 'Débutant',1);
`)
    );

    queries.push(
      database.query(`INSERT INTO FormationAcademique (diplome, etablissement, lieu, date_obtention,user_id)
VALUES ('Baccalauréat en Informatique', 'Université XYZ', 'Ville B', '2019-01-01',1);`)
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
