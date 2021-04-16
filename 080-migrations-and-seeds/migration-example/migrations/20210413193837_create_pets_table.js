
exports.up = function(knex) {
  return knex.schema.createTable('pets', function (table) {
    table.increments(); //id PK
    table.string('name');
    table.integer('user_id');
    table.foreign('user_id').references('users.id');
    table.timestamps();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('pets')
};
