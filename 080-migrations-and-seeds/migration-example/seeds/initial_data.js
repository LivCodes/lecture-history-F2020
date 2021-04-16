
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'reuben', created_at: new Date(), updated_at: new Date(), birthday: '01-10-1991'},
        {username: 'maya', created_at: new Date(), updated_at: new Date(), birthday: '04-01-1991'}
      ]);
    })
    .then(function () {
      return knex('pets').insert([
        {name: 'Juan Pablo', user_id: 1, created_at: new Date(), updated_at: new Date()},
        {name: 'Khalo', user_id: 2, created_at: new Date(), updated_at: new Date()}
      ]);
    });
};
