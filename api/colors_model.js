const db = require("../data/db-config");

function getAll(){
    return db('colors')
}

function getById(id){
    return db('colors').where('id',id).first()
}

module.exports = {
    getAll,
    getById
}