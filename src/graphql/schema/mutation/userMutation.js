module.exports = `
enum userRole {
    admin
    user
  }
  
input registerInput {
    email: String!,
    name: String!,
    password: String!
}

input loginInput {
    email: String!,
    password: String!
}

type User {
    id: ID!
    email: String!,
    name: String!,
    role: userRole!
}

type loginData {
    status: String!,
    message: String,
    access_token: String
}

type Mutation {
    register(input: registerInput!): User!
    login(input: loginInput): loginData!
}
`