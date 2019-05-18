require('dotenv').config({ path: '.env' });

const express = require('express');
const logger = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');

const db = require('./models');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const PORT = process.env.PORT || 8080;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db },
  playground: true,
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL,
  }
});

const app = express();

app.use(express.static('frontend/public'));
app.use(logger('dev'));
server.applyMiddleware({ app, path: '/',  playgroundPath: '/graphql' });

app.listen(
  { port: PORT },
  () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
