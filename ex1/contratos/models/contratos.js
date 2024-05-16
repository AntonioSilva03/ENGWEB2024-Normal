var mongoose = require('mongoose');

var ContratoSchema = new mongoose.Schema({
    idcontrato: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: Date,
    dataCelebracaoContrato: Date,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
}, {versionKey: false});

module.exports = mongoose.model('Contrato', ContratoSchema);