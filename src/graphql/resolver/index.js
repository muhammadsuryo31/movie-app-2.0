const queryResolver = require('./queryResolver');
const mutationResolver = require('./mutationResolver');

const resolvers = {
    ...queryResolver,
    ...mutationResolver
}

module.exports = resolvers;