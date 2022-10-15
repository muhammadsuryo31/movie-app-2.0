const Movie = require("./../model/movieModels");

const getMoviesController = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    console.log("error from getMovies");
    return error;
  }
};

const getMovieController = async (parent, args, context, info) => {
  try {
    return await Movie.findById(args.id);
  } catch (error) {
    console.log("error from getMovie");
    return error;
  }
};

module.exports = { getMoviesController, getMovieController };
