const db = require("../knex");

// Show list of Qr codes
exports.listAllQrCodes = (req, res) => {
    db("qrcode")
    .select("*")
    .then(data => res.status(200).json({data}))
    .catch(error => {
        res.status(401);
        console.log(error);
        res.json({message: "Erreur serveur"});
    });   
}

// Create a qr code
exports.createAQrCode = (req, res) => {
    db("qrcode")
    .insert({qrcode: req.body.qrcode})
    .then(data => res.status(200).json({message: `QR code crée : ${data}`}))
    .catch(error => {
        res.status(401);
        console.log(error);
        res.json({message: "Rêquete invalide"});
    });
}