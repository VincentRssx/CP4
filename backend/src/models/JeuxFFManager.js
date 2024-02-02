const AbstractManager = require("./AbstractManager");

class JeuxFFManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "jeuxfinalfantasy" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async readOne(id) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `select * from ${this.table} WHERE id =?`,
      [id]
    );
    return rows;
  }

  async create(jeuxfinalfantasy) {
    const [rows] = await this.database.query(
      `INSERT INTO JeuxFinalFantasy (titre, description, jacquette_image_url, achat_lien, annee_sortie, plateforme)
      VALUES (?,?,?,?,?,?)
`,
      [
        jeuxfinalfantasy.titre,
        jeuxfinalfantasy.description,
        jeuxfinalfantasy.jacquette_image_url,
        jeuxfinalfantasy.achat_lien,
        jeuxfinalfantasy.annee_sortie,
        jeuxfinalfantasy.plateforme,
      ]
    );
    return rows.insertId;
  }

  async delete(jeuxfinalfantasy) {
    const [deleteFF] = await this.database.query(
      `DELETE FROM JeuxFinalFantasy WHERE id = ?;
`,
      [jeuxfinalfantasy.id]
    );
    return deleteFF;
  }

  async update(jeuxfinalfantasy) {
    const [updateJeux] = await this.database.query(
      `
      UPDATE 
      jeuxfinalfantasy
      SET
      titre = ?,
      description = ?,
      jacquette_image_url = ?,
      achat_lien = ?,
      annee_sortie = ?,
      plateforme = ?
      WHERE
      id = ?; 
      `,
      [
        jeuxfinalfantasy.titre,
        jeuxfinalfantasy.description,
        jeuxfinalfantasy.jacquette_image_url,
        jeuxfinalfantasy.achat_lien,
        jeuxfinalfantasy.annee_sortie,
        jeuxfinalfantasy.plateforme,
        jeuxfinalfantasy.id,
      ]
    );

    return { updateJeux };
  }
}

module.exports = JeuxFFManager;
