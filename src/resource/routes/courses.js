const express = require('express');
const router = express.Router();

const conrseContrller = require('../../app/controllers/CourseController');

// conrseContrller.index;
router.get('/create', conrseContrller.create);
router.post('/store', conrseContrller.store);
router.get('/:slug', conrseContrller.show);

module.exports = router;
