const { gameModel, userModel } = require('../models');

function getGames(req, res, next) {
    gameModel.find()
        .populate('userId')
        .then(games => res.json(games))
        .catch(next);
}

function getLatest(req, res, next) {
    gameModel.find().sort({ createdAt: -1 }).limit(3)
        .then(game => res.json(game))
        .catch(next);
}

function getOneGame(req, res, next) {
    const { gameId } = req.params;

    gameModel.findById(gameId)
        .populate([
            {
                path: 'userId',
                select: '-password'
            },
            {
                path: 'comments'
            }
        ])
        .then(game => res.json(game))
        .catch(next);
}

function createGame(req, res, next) {
    const { title, genre, price, gamemode, imageUrl, year, description, programmer } = req.body;
    const { _id: userId } = req.user;

    gameModel.create({ title, genre, price, gamemode, imageUrl, year, description, programmer, userId })
        .then(game => {
            return userModel.findByIdAndUpdate(
                userId,
                { $push: { games: game._id } },
                { new: true }
            )
                .then(() => game);
        })
        .then(newlyCreatedGame => {
            res.json(newlyCreatedGame)
        })
        .catch(next);
}

function deleteGame(req, res, next) {
    const { gameId } = req.params;
    const { _id: userId } = req.user;

    gameModel.findByIdAndDelete(gameId)
        .then(game => {
            return userModel.findByIdAndUpdate(
                userId,
                { $pull: { games: { $gte: gameId } } }
            )
                .then(() => game);
        })
        .then(deletedGame => {
            res.json(deletedGame)
        })
        .catch(next);
}

function editGame(req, res, next) {
    const { gameId } = req.params;
    const gameData = req.body;

    gameModel.findByIdAndUpdate(gameId, gameData)
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

module.exports = {
    getGames,
    getLatest,
    createGame,
    getOneGame,
    editGame,
    deleteGame
}
