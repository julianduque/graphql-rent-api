'use strict'

require('dotenv').config()

const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./graphql')
const services = require('./services')
const port = +process.env.PORT || 8080
const app = express()

const server = http.createServer(app)
const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  context ({ req }) {
    services.collectQueries(req)
    return {
      services
    }
  },
  playground: true,
  introspection: true
})

app.get('/', (req, res) => {
  res.redirect('/graphql')
})

app.get('/stats', (req, res) => {
  const stats = services.getQueryStats()
  res.json(stats)
})

graphqlServer.applyMiddleware({
  app
})

server.listen(port, () => {
  console.log(`[${process.pid}] GraphQL Server running on http://localhost:${port}`)
})
