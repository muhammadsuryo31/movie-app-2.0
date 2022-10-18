const { postMovieController, updateMovieController, deleteMovieController } = require('./movieController');
const { registerController, loginController } = require('./userController')

module.exports = {
    postMovieController,
    updateMovieController,
    deleteMovieController,
    registerController,
    loginController
}