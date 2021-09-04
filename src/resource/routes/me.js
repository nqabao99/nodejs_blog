const express = require('express');
const router = express.Router();

const meContrller = require('../../app/controllers/MeController');

// meContrller.index;
router.get('/stored/courses', meContrller.storedCourse);
router.get('/trash/courses', meContrller.trashCourse);

module.exports = router;
