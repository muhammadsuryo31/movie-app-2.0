module.exports = `
type Movie {
	id: ID!,
	title: String!,
	ratings: Float!,
	casts: [String!],
	poster: String!,
	description: String!,
	earning: Int!
}

type Query {
	getMovies: [Movie!]
	getMovie(id: ID!): Movie!
}
`;
