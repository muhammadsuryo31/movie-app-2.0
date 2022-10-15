const {
  postMovieController,
  updateMovieController,
  deleteMovieController,
} = require("./../../controller/mutationController");

module.exports = {
  Mutation: {
    postMovie: postMovieController,
    updateMovie: updateMovieController,
    deleteMovie: deleteMovieController,
  },
};
