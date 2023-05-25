module.exports = (server) => {
    const userController = require("../controllers/userController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');

server.post("/user/register", cors(), userController.userRegister);
server.post("/user/login", cors(), userController.userLogin);
server.post("/user/add/cv", cors(), userController.addUserCV);
server.post("/user/add/qrcode", cors(), userController.addUserQrCode);

server.route("/users")
.get(jwtMiddleware.authenticateUser, cors(), userController.listAllUsers);

}