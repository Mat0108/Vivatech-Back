module.exports = (server) => {
    const qrcodeController = require("../controllers/qrcodeController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');

server.route("/qrcode")
.get(jwtMiddleware.authenticateUser, cors(), qrcodeController.listAllQrCodes)
.post(jwtMiddleware.authenticateUser,cors(),  qrcodeController.createAQrCode);
}