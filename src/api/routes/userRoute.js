module.exports = (server) => {
    const userController = require("../controllers/userController");
    const cors = require('cors');

server.post("/user/register", cors(), userController.userRegister);
server.post("/user/login", cors(), userController.userLogin);
server.post("/user/add/cv", cors(), userController.addUserCV);
server.post("/user/add/qrcode", cors(), userController.addUserQrCode);

}

/*
.get(jwtMiddleware.authenticateUser, cors(), postController.listAllPosts)
.post(jwtMiddleware.authenticateAdmin,cors(),  postController.createAPost);*/