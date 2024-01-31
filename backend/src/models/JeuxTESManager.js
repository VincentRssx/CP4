const AbstractManager = require("./AbstractManager");

class JeuxTESManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "jeuxelderscrolls" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async create(jeuxelderscrolls) {
    const [rows] = await this.database.query(
      `INSERT INTO jeuxelderscrolls (titre, description, jacquette_image_url, achat_lien, annee_sortie, plateforme)
      VALUES (?,?,?,?,?,?)
`,
      [
        jeuxelderscrolls.titre,
        jeuxelderscrolls.description,
        jeuxelderscrolls.jacquette_image_url,
        jeuxelderscrolls.achat_lien,
        jeuxelderscrolls.annee_sortie,
        jeuxelderscrolls.plateforme,
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

module.exports = JeuxTESManager;