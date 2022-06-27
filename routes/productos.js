var express = require('express');
var router = express.Router();
var productosController = require('../controllers/productosController')

/* GET home page. */
router.get('/', productosController.getAll);

//Devolver un Producto dado el ID.
router.get('/:id', productosController.getById);

//Crear un Producto : POST
router.post('/', (req, res, next) => {req.app.validateToken(req, res, next)}, productosController.create);

//Actualizar info. del Producto: PUT
router.put('/:id', (req, res, next) => {req.app.validateToken(req, res, next)}, productosController.update);

//Eliminar producto
router.delete('/:id', (req, res, next) => {req.app.validateToken(req, res, next)}, productosController.delete);

//Buscador de Productos
router.get('/', function(req, res, next) {
  console.log(req.query)
  const productos = []
  res.json(productos);
});


module.exports = router;
