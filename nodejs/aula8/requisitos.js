'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequisitoSchema = new Schema({
  name: String
});
const Requisitos = mongoose.model('Requisitos',RequisitoSchema);
Requisitos.schema.path('name').validate(function (value) {
    return /js|html|css|angular|node|mongodb/i.test(value);
},'Requisito {VALUE} inválido!');

const req = new Requisitos({ name : 'js'});
console.log(req.validateSync());
