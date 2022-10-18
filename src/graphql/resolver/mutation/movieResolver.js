const {
  postMovieController,
  updateMovieController,
  deleteMovieController,
} = require("./../../../controller/mutation");

module.exports = {
    postMovie: postMovieController,
    updateMovie: updateMovieController,
    deleteMovie: deleteMovieController,
};
