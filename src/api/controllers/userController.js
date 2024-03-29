const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../knex");
const { uuid } = require('uuidv4');

// Register new user
exports.userRegister = (req, res) => {
    let newUser = req.body;

    if(newUser.password){

        bcrypt.hash(newUser.password, 10, (error, hash) => {
            if(error){
                res.status(401);
                console.log(error);
                res.json({message: "Impossible de crypter le mot de passe"});
            }
            else{
                db.select("*")
                    .from("user")
                    .where("email", "=", newUser.email)
                    .then((user) => {
                        if(user.length > 0) {
                            res.status(401);
                            res.json({message: "Utilisateur est déjà existant"});
                        }
                        else {
                             db("user")
                                .insert({id: uuid(), email: newUser.email, password: hash})
                                .then(data => res.status(200).json({message: `Utilisateur crée : ${newUser.email}`}))
                                .catch(error => {
                                    res.status(401);
                                    console.log(error);
                                    res.json({message: "Rêquete invalide"});
                                });
                        }
                    })
            }
        })
    }
    else{
        res.status(401);
        console.log(error);
        res.json({message: "Mot de passe est vide"});
    }
}

// Connexion d'utilisateur
exports.userLogin = (req, res) => {
    db.select('*')
        .from("user")
        .where('email', req.body.email)
        .then((user) => {
            bcrypt.compare(req.body.password, user[0].password, (error, result) => {
                if(error){
                    res.status(401);
                    console.log(error);
                    res.json({message: "Mot de passe incorrect"})
                }
                else{
                    let userData = {
                        id: user[0].id,
                        email: user[0].email,
                        password: user[0].password
                    }

                    jwt.sign(userData, process.env.JWT_KEY, {expiresIn: "30 days"}, (error, token) => {
                        if(error){
                            res.status(500);
                            console.log(error);
                            res.json({message: "Impossible de générer le token"})
                        }
                        else{
                            res.status(200);
                            res.json({message: `Utilisateur connecté : ${user[0].email}`, token, user: userData});
                        }
                    });
                }
            })
        })
        .catch((error) => {
            res.status(500);
            console.log(error);
            res.json({message: "Utilisateur non trouvé"});
        });
}

// Update user data and add user's CV
exports.addUserCV = (req, res, error) => {
    db.select('*')
        .from("user")
        .where('email', req.body.email)
        .update({
            cv: req.body.cv
        })
        .then((user) => {
            res.status(200);
            res.json({message: "CV a été bien ajouté", user: user[0]});
        })
        .catch((error) => {
            res.status(500);
            console.log(error);
            res.json({message: "Utilisateur non trouvé"});
        });
}

// Update user data and add user's qr code
exports.addUserQrCode = (req, res, error) => {
    db.select('*')
        .from("user")
        .where('email', req.body.email)
        .update({
            qrcode: req.body.qrcode
        })
        .then((user) => {
            res.status(200);
            res.json({message: "Qr code a été bien ajouté", user: user[0]});
        })
        .catch((error) => {
            res.status(500);
            console.log(error);
            res.json({message: "Utilisateur non trouvé"});
        });
}

// Show list of users
exports.listAllUsers = (req, res) => {
    db("user")
    .select("*")
    .then(data => res.status(200).json({data}))
    .catch(error => {
        res.status(401);
        console.log(error);
        res.json({message: "Erreur serveur"});
    });   
}