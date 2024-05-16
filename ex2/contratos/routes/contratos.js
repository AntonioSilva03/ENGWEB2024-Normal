var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

/* GET contratos listing. */
router.get('/', function(req, res, next) {
  const ent = req.query.entidade;
  const tipo = req.query.tipo;
  if(ent){
    Contrato.contratos_entidade(ent).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  }
  if(tipo){
    Contrato.contratos_tipo(tipo).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  } else {
  Contrato.contratos_list().then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
  }
});


router.post('/', function(req, res, next) {
  Contrato.create(req.body).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});

router.get('/entidades', function(req, res, next) {
  Contrato.contratos_entidades().then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});

router.get('/tipos', function(req, res, next) {
  Contrato.contratos_tipos().then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});


router.get('/:id', function(req, res, next) {
  Contrato.contratos_info(req.params.id).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
  Contrato.delete(req.params.id).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res, next) {
  Contrato.update(req.params.id, req.body).then(dados => res.jsonp(dados)).catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
