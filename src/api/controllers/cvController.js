const db = require("../knex");

// Show list of CVs
exports.listAllCVs = (req, res) => {
    db("cv")
    .select("*")
    .then(data => res.status(200).json({data}))
    .catch(error => {
        res.status(401);
        console.log(error);
        res.json({message: "Erreur serveur"});
    });   
}

// Create a cv
exports.createACV = (req, res) => {
    db("cv")
    .insert({cv: req.body.cv})
    .then(data => res.status(200).json({message: `CV crée : ${data}`}))
    .catch(error => {
        res.status(401);
        console.log(error);
        res.json({message: "Rêquete invalide"});
    });
}