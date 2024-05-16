var express = require('express');
var router = express.Router();

const Contrato = require('../controllers/contratos');

router.get('/:nipc', function(req, res, next) {
    Contrato.contratos_nipc(req.params.nipc).then(dados => {
        const entidade = dados[0].entidade_comunicante;
        res.render('paginaEntidade', {titulo: "Página da Entidade", nipc: req.params.nipc, entidade: entidade, contratos: dados, somatorio: dados.reduce((acc, c) => acc + parseFloat(c.precoContratual), 0).toFixed(2)})
    })
});

module.exports = router;