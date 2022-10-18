const { GraphQLError } = require("graphql");

const authorize = (user) => {
  if (!user) {
    throw new GraphQLError("User is not authenticated", {
      extensions: {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      },
    });
  }
  if (user.role !== "admin") {
    throw new GraphQLError("User is not authorized", {
      extensions: {
        code: "UNAUTHORIZED",
        http: { status: 401 },
      },
    });
  }
  return user;
};

module.exports = authorize;