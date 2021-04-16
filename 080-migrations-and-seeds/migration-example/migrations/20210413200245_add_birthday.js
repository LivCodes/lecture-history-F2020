
exports.up = function(knex) {
  return knex.schema.alterTable('users', function(table) {
    table.date('birthday');
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', function(table) {
    table.dropColumn('birthday')
  })
};
