/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para
 * enviar y recibir datos en formato json
 */
 const express = require('express');
 const router = express.Router();
 const servicioCtrl = require('../controllers/servicios.controller')


router.get('/', servicioCtrl.getServicios);


router.post('/', servicioCtrl.createServicios);


router.get('/:id', servicioCtrl.getUnicoServicio);


router.put('/:id',servicioCtrl.editarServicio);


router.delete('/:id', servicioCtrl.eliminarServicio);


module.exports = router;

