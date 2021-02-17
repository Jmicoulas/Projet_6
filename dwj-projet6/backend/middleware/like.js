const Sauce = require('../models/sauce');

module.exports = (req, res, next) =>{
    let message = "";
    Sauce.findOne({_id: req.params.id})
    .then(sauce =>{
        if(req.body.like == 1 && sauce.usersLiked.indexOf(req.body.userId)<0) {
            sauce.usersLiked.push(req.body.userId);
            sauce.likes += 1; // on incrémente de 1
        }else if(req.body.like == -1 && sauce.usersDisliked.indexOf(req.body.userId)<0) {
            sauce.disLikes += 1;
        }req.body.sauce = sauce;
        req.body.message = message;
        next ();
    }).catch(error =>res.status(400).json({error}));
};