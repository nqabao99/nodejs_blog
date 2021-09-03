const express = require('express');
const router = express.Router();

const newsContrller = require('../../app/controllers/NewsController');

// newsContrller.index;
router.get('/:slug', newsContrller.show);
router.get('/', newsContrller.index);

module.exports = router;
