//the function that runs when we execute our migration
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments("id");
    table.string('username');
    table.timestamps();
  })
};

//the function that runs when we want to revert/rollback our migration
exports.down = function(knex) {
  // return knex.schema.dropTableIfExists('users')
  return knex.schema.raw("DROP TABLE IF EXISTS users;")
};
