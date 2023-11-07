
exports.seed = function(knex) {
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
