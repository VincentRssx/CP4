const AbstractManager = require("./AbstractManager");

class FormationManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "FormationAcademique" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async create(FormationAcademique) {
    const [InsertInfos] = await this.database.query(
      `INSERT INTO ${this.table} (diplome,etablissement,lieu,date_obtention,user_id) VALUES (?,?,?,?,?);`,
      [
        FormationAcademique.diplome,
        FormationAcademique.etablissement,
        FormationAcademique.lieu,
        FormationAcademique.date_obtention,
        FormationAcademique.user_id,
      ]
    );

    return InsertInfos.insertId;
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

module.exports = FormationManager;
