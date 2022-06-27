var express = require('express');
var router = express.Router();
const usersController = require ('../controllers/usersController');

/* GET users listing. */
//Lista todos los usuarios
router.get('/', usersController.getAllUsers);

//REGISTRO (Crear nuevo usuario)
router.post('/registro', usersController.registro);

//LOGIN (Enviar info de un form con user y contraseña)
router.post('/login', usersController.login);

//Actualizar info. usuario
router.put('/:id', usersController.update);

module.exports = router;
