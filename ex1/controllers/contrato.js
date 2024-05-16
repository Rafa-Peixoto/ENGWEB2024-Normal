const Contrato = require('../models/contrato');

module.exports.list = async () => {
  return await Contrato.find().exec();
}

module.exports.findById = id => {
  return Contrato.findOne({ idcontrato: id }).exec();
}

module.exports.findByEntidade = entidade => {
  return Contrato.find({ entidade_comunicante: entidade }).exec();
}

module.exports.findByTipo = tipo => {
  return Contrato.find({ tipoprocedimento: tipo }).exec();
}

module.exports.getEntidades = async () => {
  const entidades = await Contrato.distinct('entidade_comunicante').exec();
  return entidades.sort((a, b) => a.localeCompare(b));
}

module.exports.getTipos = async () => {
  const tipos = await Contrato.distinct('tipoprocedimento').exec();
  return tipos.sort();
}

module.exports.insert = contrato => {
  return Contrato.create(contrato);
}

module.exports.removeById = id => {
  return Contrato.deleteOne({ idcontrato: id });
}

module.exports.update = (id, contrato) => {
  return Contrato.updateOne({ idcontrato: id }, contrato);
}