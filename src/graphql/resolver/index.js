const queryResolver = require('./queryResolver');
const mutationResolver = require('./mutation');

const resolvers = {
    ...queryResolver,
    ...mutationResolver
}

module.exports = resolvers;