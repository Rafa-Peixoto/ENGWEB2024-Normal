var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
  axios.get('http://localhost:16000/contratos')
    .then(dados => {
      res.render('index', { contratos: dados.data, title: 'Lista de Contratos' });
    })
    .catch(erro => {
      console.log('Erro ao carregar contratos: ' + erro);
      res.render('error', { error: erro });
    });
});

router.get('/contrato/:id', (req, res) => {
  axios.get(`http://localhost:16000/contratos/${req.params.id}`)
    .then(dados => {
      res.render('contrato', { contrato: dados.data });
    })
    .catch(erro => {
      console.log('Erro ao carregar contrato: ' + erro);
      res.render('error', { error: erro });
    });
});

router.get('/entidade/:nipc', (req, res) => {
  axios.get(`http://localhost:16000/contratos?entidade=${req.params.nipc}`)
    .then(dados => {
      const contratos = dados.data;
      const totalValor = contratos.reduce((total, contrato) => total + contrato.precoContratual, 0);
      const entidade = contratos.length > 0 ? contratos[0].entidade_comunicante : 'Desconhecida';
      res.render('entidade', { contratos: contratos, nipc: req.params.nipc, entidade: entidade, totalValor: totalValor });
    })
    .catch(erro => {
      console.log('Erro ao carregar contratos da entidade: ' + erro);
      res.render('error', { error: erro });
    });
});

module.exports = router;
