const express = require('express');
const router = express.Router();

const conrseContrller = require('../../app/controllers/CourseController');

// conrseContrller.index;
router.get('/:slug', conrseContrller.show);

module.exports = router;
