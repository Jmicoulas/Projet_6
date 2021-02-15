const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

exports.signup = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10) //10 represente le nombre de fois que le mot de passe est crypté par l'algorythme , plus le mdp est crypté plus cela met de temps. 10x suffit.
        .then(hash =>{
            const user = new User ({
                email: req.body.email,
                password: hash
            });
            user.save()
                    .then(() => res.status(201).json({message: 'Utilisateur créé ! '}))
                    .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) =>{
    User.findOne({ email: req.body.email})
    .then(user =>{
        if (!user){      // Si le User c-a-d l'adresse mail n'existe pas, on renvoie une code erreur sinon le code continue normalement
            return res.status(401).json({ error : 'Utilisateur inconnu ! '}); 
        }
        bcrypt.compare(req.body.password, user.password) // bcrypt compare les 2 mots de passe hash crypté entre celui que le user entre et celui présent dans la BD
            .then(valid => {
                if(!valid){
                    return res.status(401).json({ error : 'Mot de passe incorrect ! '});
                }
                res.status(200).json({
                    userId: user._id,
                    token: jwt.sign(
                        {userId: user._id},
                        'supersecrettokenthatnononegonnaeverfound',
                        {expiresIn: '24h'}
                    )
                });
            })
            .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};