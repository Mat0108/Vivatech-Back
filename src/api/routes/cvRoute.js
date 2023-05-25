module.exports = (server) => {
    const cvController = require("../controllers/cvController");
    const jwtMiddleware = require("../middlewares/jwtMiddleware");
    const cors = require('cors');

server.route("/cv")
.get(jwtMiddleware.authenticateUser, cors(), cvController.listAllCVs)
.post(jwtMiddleware.authenticateUser,cors(),  cvController.createACV);
}