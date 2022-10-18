const { registerController, loginController } = require("./../../../controller/mutation")

module.exports = {
    register: registerController,
    login: loginController
}