const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    id: ID!
    fullname: String!
    nickname: String!
    password: String!
    available: Boolean!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    description: String!
    user: User!
    createdAt: String!
    available: Boolean!
  }

  type Query {
    user(id: ID!): User
    post(id: ID!): Post
    posts(userId: ID): [Post!]!
  }

  type Mutation {
    createUser(
      fullname: String!
      nickname: String!
      password: String!
    ): User!
    createPost(
      description: String!,
      userId: ID!,
    ): Post!
    updatePost(id: ID!, available: Boolean!): [Int!]!
    deletePost(id: ID!, userId: ID!): [Int!]!
  }
`;

module.exports = typeDefs;
