
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();

      tbl.string("vin", 17).unique().notNullable();

      tbl.string("make", 255).notNullable();

      tbl.string("model", 255).notNullable();

      tbl.integer("mileage").notNullable();

      tbl.string("transmission", 255);

      tbl.string("title status", 255);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
