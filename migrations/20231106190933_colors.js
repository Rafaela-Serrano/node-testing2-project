
exports.up = function(knex) {
    return knex.schema.createTable('colors', table =>{
        table.increments();
        table.string('color',200).notNullable()
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('colors');  
};
