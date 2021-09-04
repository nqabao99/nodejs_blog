const express = require('express');
const router = express.Router();

const conrseContrller = require('../../app/controllers/CourseController');

// conrseContrller.index;
router.get('/create', conrseContrller.create);
router.post('/store', conrseContrller.store);
router.get('/:id/edit', conrseContrller.edit);
router.put('/:id', conrseContrller.update);
router.patch('/:id/restore', conrseContrller.restore);
router.delete('/:id', conrseContrller.delete);
router.delete('/:id/force', conrseContrller.forceDelete);
router.get('/:slug', conrseContrller.show);

module.exports = router;
