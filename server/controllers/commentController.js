const { commentModel, gameModel } = require("../models");

function addComment(req, res, next) {
    const { gameId } = req.params;
    const { text } = req.body;
    const { _id: userId } = req.user;

    commentModel.create({ text, userId, game: gameId })
        .then(comment => {
            return gameModel.findByIdAndUpdate(
                gameId,
                { $push: { comments: comment._id } },
                { new: true }
            )
                .populate([
                    {
                        path: 'comments'
                    },
                ])
        })
        .then(game => {
            res.json(game);
        })
        .catch(next)
}

function getComments(req, res, next) {
    const { gameId } = req.params;
    
    commentModel.find({ game: gameId })
        .populate([
            {
                path: 'userId',
                select: ['-password', '-email', '-games']
            }
        ])
        .then(comments => res.json(comments))
        .catch(next);
}

module.exports = {
    addComment,
    getComments
}