const express = require('express');
const { add, getByUser } = require('../controllers/cartController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticate, add);
router.get('/:userId', authenticate, getByUser);

module.exports = router;
