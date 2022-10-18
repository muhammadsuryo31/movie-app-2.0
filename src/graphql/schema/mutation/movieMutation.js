module.exports = `
input movieInput { 
  title: String!,
  ratings: Float!,
  casts: [String!],
  poster: String!,
  description: String!,
  earning: Int
}

input movieUpdateInput { 
  title: String,
  ratings: Float,
  casts: [String],
  poster: String,
  description: String,
  earning: Int
}

type Mutation {
  postMovie(input: movieInput!): Movie!
  updateMovie(id: ID!, input: movieUpdateInput!): Movie!
  deleteMovie(id: ID!): Movie!
}
`;
