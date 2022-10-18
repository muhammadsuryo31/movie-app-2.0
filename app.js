require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const { typeDefs, resolvers } = require("./src/graphql");
const connectDB = require("./config");
const port = process.env.PORT || 3001;
const { verifyToken } = require('./src/utils/jwt')
const User = require('./src/model/userModel')

const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  await connectDB();

  app.use(
    "/",
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        let user = '';
        try {
          const access_token = req.headers.authorization || '';
          const decoded = await verifyToken(access_token);
          if(decoded.id) {
            user = await User.findById(decoded.id);
          }
          return { req, res, user };
        } catch (error) {
          console.log('authentication error');
          return error
        }
      },
    })
  );

  await new Promise(resolve => httpServer.listen({ port }, resolve));

  console.log(`🚀 Server ready at http://localhost:${port}/`);
};

startApolloServer();