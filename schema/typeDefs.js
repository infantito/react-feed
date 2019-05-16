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
    date: String!
    available: Boolean!
  }

  type Query {
    user(id: ID!): User
    post(id: ID!): Post
    posts: [Post!]!
  }

  type Mutation {
    createUser(
      fullname: String!
      nickname: String!
      password: String!
      available: Boolean!
    ): User!
    createPost(
      description: String!,
      userId: ID!,
      date: String!
      available: Boolean!
    ): Post!
    updatePost(id: ID!, description: String!): [Int!]!
    deletePost(id: ID!): Int!
  }
`;

module.exports = typeDefs;
