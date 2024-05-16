var Contrato = require('../models/contratos');
var mongoose = require('mongoose');

module.exports.contratos_list = () => {
    return Contrato
        .find()
        .sort({idcontrato: 1})
        .exec();
}

module.exports.contratos_info = id => {
    return Contrato
        .findOne({idcontrato: id})
        .exec();
}

module.exports.contratos_nipc = nipc => {
    return Contrato
        .find({NIPC_entidade_comunicante: nipc})
        .exec();
}

module.exports.contratos_entidade = ent => {
    return Contrato
        .find({entidade_comunicante: ent})
        .exec();
}

module.exports.contratos_entidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .sort({entidade_comunicante: 1})
        .exec();
}

module.exports.contratos_tipo = tipo => {
    return Contrato
        .find({tipoprocedimento: tipo})
        .exec();
}

module.exports.contratos_tipos = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .sort({tipoprocedimento: 1})
        .exec();
}

module.exports.create = c => {
    var novo = new Contrato(c);
    return novo.save();
}

module.exports.delete = id => {
    return Contrato.deleteOne({idcontrato: id}).exec();
}

module.exports.update = (id, c) => {
    return Contrato.updateOne({idcontrato: id}, c).exec();
}