const express = require('express');
const router = express.Router();

const newsContrller = require('../../app/controllers/NewsController');

// newsContrller.index;
router.use('/:slug', newsContrller.show);
router.use('/', newsContrller.index);

module.exports = router;
