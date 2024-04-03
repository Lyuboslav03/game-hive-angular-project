const express = require('express');
const router = express.Router();
const { auth } = require('../utils');

const { commentController } = require('../controllers')

router.get('/:gameId', commentController.getComments);
router.post('/:gameId', auth(), commentController.addComment);

module.exports = router;