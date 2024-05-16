var express = require('express');
var router = express.Router();
const contratoController = require('../controllers/contrato');

// Listar entidades comunicantes
router.get('/entidades', (req, res) => {
  contratoController.getEntidades()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).send(erro));
});

// Listar tipos de procedimentos
router.get('/tipos', (req, res) => {
  contratoController.getTipos()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(500).send(erro));
});

// Listar todos os contratos
router.get('/', (req, res) => {
  if (req.query.entidade) {
    contratoController.findByEntidade(req.query.entidade)
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).send(erro));
  } else if (req.query.tipo) {
    contratoController.findByTipo(req.query.tipo)
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).send(erro));
  } else {
    contratoController.list()
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(500).send(erro));
  }
});

// Obter contrato por ID
router.get('/:id', (req, res) => {
  contratoController.findById(req.params.id)
    .then(dados => {
      if (dados) {
        res.status(200).json(dados);
      } else {
        res.status(404).send('Contrato não encontrado');
      }
    })
    .catch(erro => res.status(500).send(erro));
});

// Adicionar novo contrato
router.post('/', (req, res) => {
  contratoController.insert(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(500).send(erro));
});

// Remover contrato por ID
router.delete('/:id', (req, res) => {
  contratoController.removeById(req.params.id)
    .then(dados => {
      if (dados.deletedCount > 0) {
        res.status(200).send('Contrato removido');
      } else {
        res.status(404).send('Contrato não encontrado');
      }
    })
    .catch(erro => res.status(500).send(erro));
});

// Atualizar contrato por ID
router.put('/:id', (req, res) => {
  contratoController.update(req.params.id, req.body)
    .then(dados => {
      if (dados.nModified > 0) {
        res.status(200).send('Contrato atualizado');
      } else {
        res.status(404).send('Contrato não encontrado ou sem alterações');
      }
    })
    .catch(erro => res.status(500).send(erro));
});

module.exports = router;
