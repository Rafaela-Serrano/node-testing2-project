
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('colors')
    .truncate()
    .then(function() {
      return knex('colors').insert([
        { color: 'yellow' },
        { color: 'red' },
        { color: 'green' },
        { color: 'blue' },
      ]);
    });
};
