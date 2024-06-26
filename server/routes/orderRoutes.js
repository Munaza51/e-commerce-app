const express = require('express');
const { create, getByUser } = require('../controllers/orderController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, create);
router.get('/:userId', authenticate, getByUser);

module.exports = router;
