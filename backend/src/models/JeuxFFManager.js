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

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = JeuxFFManager;
