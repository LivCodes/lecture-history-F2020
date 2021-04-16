exports.up = function(knex) {
  return knex.raw("ALTER TABLE pets ADD species TEXT DEFAULT 'dog';")
};

exports.down = function(knex) {
  return knex.raw("ALTER TABLE pets DROP COLUMN species;")
};
