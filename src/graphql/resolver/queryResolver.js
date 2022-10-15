const {
  getMoviesController,
  getMovieController,
} = require("./../../controller/queryController");
module.exports = {
  Query: {
    getMovies: getMoviesController,
    getMovie: getMovieController,
  },
};
