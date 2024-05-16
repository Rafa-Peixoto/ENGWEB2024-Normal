const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    idcontrato: Number,
    nAnuncio: { type: String, default: null }, 
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: { type: String, default: null }, 
    dataCelebracaoContrato: { type: String, default: null },
    precoContratual: Number,
    prazoExecucao: Number,
    nipc_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
});

module.exports = mongoose.model('Contrato', contratoSchema);
