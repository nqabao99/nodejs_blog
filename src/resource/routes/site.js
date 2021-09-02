const express = require('express');
const router = express.Router();

const siteContrller = require('../../app/controllers/SiteController');

router.use('/search', siteContrller.search);
router.use('/', siteContrller.index);

module.exports = router;
