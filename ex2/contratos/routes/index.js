var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

/* GET home page. */
router.get('/', function(req, res, next) {
  Contrato.contratos_list().then(dados =>{
    res.render('index', {titulo: "Página Inicial", contratos: dados})
  })
});

router.get('/:id', function(req, res, next) {
  Contrato.contratos_info(req.params.id).then(dados => {
    res.render('paginaContrato', {titulo: "Página do Contrato", contrato: dados})
  })
});

module.exports = router;
