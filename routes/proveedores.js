var express = require('express');
const proveedoresController = require('../controllers/proveedoresController');
var router = express.Router();

router.get ('/', proveedoresController.getAllProveedores);
router.post('/', proveedoresController.create);
router.delete('/:id', proveedoresController.delete);

module.exports = router;