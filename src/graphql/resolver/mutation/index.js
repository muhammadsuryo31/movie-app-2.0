const { postMovie, updateMovie, deleteMovie } = require('./movieResolver')
const { register, login } = require('./userResolver')

module.exports = {
    Mutation: {
        postMovie,
        updateMovie,
        deleteMovie,
        register,
        login
    }
}