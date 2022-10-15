const querySchema = require('./query')
const MutaionSchema = require('./mutation')

const typeDefs = `${querySchema} ${MutaionSchema}`

module.exports = typeDefs;