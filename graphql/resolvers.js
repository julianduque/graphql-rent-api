'use strict'

const resolvers = {
  Query: {
    helloWorld () {
      return 'Hello DevOps.js!'
    },
    listCustomers (_, { limit }, ctx) {
      return ctx.services.listCustomers(limit)
    },
    listProperties (_, { limit }, ctx) {
      return ctx.services.listProperties(limit)
    },
    findProperties (_, { city, bathrooms, bedrooms, limit }, ctx) {
      return ctx.services.findProperties({ city, bathrooms, bedrooms, limit })
    }
  },
  Mutation: {
    createCustomer (_, { customer }, ctx) {
      return ctx.services.createCustomer(customer)
    }
  }
}

module.exports = resolvers
