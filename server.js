const express = require('express');
const logger = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');

const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const { ENV } = require('./config');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
});

const app = express();

// Logger
app.use(logger('dev'));

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, }));

// standard
app.get('*', (request, response) => response.status(200).send({
  message: 'We\'re sorry. Something went wrong!',
}));
server.applyMiddleware({ app });

app.listen(
  { port: ENV.PORT },
  () => console.log(`🚀 Server ready at http://localhost:${ENV.PORT}${server.graphqlPath}`)
);
