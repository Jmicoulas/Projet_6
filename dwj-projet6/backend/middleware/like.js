const Sauce = require('../models/Sauce');

module.exports = (req, res, next) =>{
    let message = "";
    Sauce.findOne({_id: req.params.id})
    .then(sauce =>{


        console.log("la valeur du bouton : "+req.body.like);


        console.log("Nombre de like : "+req.body.likes);
        console.log("nombre de Dislike : "+req.body.dislikes);

      
        if(req.body.like == 1 && sauce.usersLiked.indexOf(req.body.userId)<0) {
            sauce.usersLiked.push(req.body.userId);
            sauce.likes += 1; // on incrémente de 1
            if(sauce.usersDisliked.indexOf(req.body.userId)<0){
                sauce.usersDisliked.splice(req.body.userId);
                if(sauce.dislikes>0)
                sauce.dislikes -= 1;
            }
        }else if(req.body.like == -1 && sauce.usersDisliked.indexOf(req.body.userId)<0) {
            sauce.dislikes += 1;
            sauce.usersDisliked.push(req.body.userId);
            if(sauce.usersLiked.indexOf(req.body.userId)<0){
                sauce.usersLiked.splice(req.body.userId);
                if(sauce.likes>0)
                sauce.likes -= 1;
            }
        }else if(req.body.like == 0){
            
           

        
           

            if(sauce.usersDisliked.indexOf(req.body.userId)<0){
                sauce.usersDisliked.splice(req.body.userId);
                if(sauce.dislikes>0)
                sauce.dislikes -= 1;
            }else{
                sauce.usersLiked.splice(req.body.userId);
                if(sauce.likes>0)
                sauce.likes -= 1;
            }
            
        }
        req.body.sauce = sauce;
        req.body.message = message;
        next ();
    }).catch(error =>res.status(400).json({error}));
};