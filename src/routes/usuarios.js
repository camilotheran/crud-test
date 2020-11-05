const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.post('/add', usuarioController.guardar);
router.get('/delete/:id', usuarioController.delete);
router.get('/update/:id', usuarioController.edit);
router.post('/update/:id', usuarioController.update);

module.exports = router;