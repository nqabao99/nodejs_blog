const express = require('express');
const router = express.Router();

const siteContrller = require('../../app/controllers/SiteController');

router.get('/search', siteContrller.search);
router.get('/', siteContrller.index);

module.exports = router;
