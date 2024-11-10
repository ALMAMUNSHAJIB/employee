exports.up = function (knex) {
  return knex.schema.createTable('employees', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('positionId').notNullable();
    table.string('positionName').notNullable();
    table.integer('parentId').nullable().references('id').inTable('employees');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('employees');
};