const Movie = require("./../model/movieModels");

const postMovieController = async (parent, args, context, info) => {
  const input = {
    title: args.input.title,
    ratings: args.input.ratings,
    casts: args.input.casts,
    poster: args.input.poster,
    description: args.input.description,
    earning: args.input.earning,
  };

  try {
    const candidateMovie = new Movie(input);
    const newMovie = await candidateMovie.save();
    
    return newMovie;
  } catch (error) {
    console.log("error from post movie");
    return error;
  }
};

const updateMovieController = async (parent, args, context, info) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      args.id,
      { $set: args.input },
      { new: true }
    );

    return updatedMovie;
  } catch (error) {
    console.log("error from update movie");

    return error;
  }
};

const deleteMovieController = async (parent, args, context, info) => {
  try {
    const deleteMovie = await Movie.findByIdAndDelete(args.id);

    return deleteMovie;
  } catch (error) {
    console.log("error from delete movie");

    return error;
  }
};

module.exports = {
  postMovieController,
  updateMovieController,
  deleteMovieController,
};
