const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { gameController } = require('../controllers');

// middleware that is specific to this router

router.get('/', gameController.getGames);
router.get('/latest-games', gameController.getLatest);
router.get('/:gameId', gameController.getOneGame);
router.post('/', auth(), gameController.createGame);
router.put('/:gameId', auth(), gameController.editGame)
router.delete('/:gameId', auth(), gameController.deleteGame);


// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router