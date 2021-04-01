'use strict'

const db = require('../models')

const queryStats = []
function collectQueries (req) {
  queryStats.push(req.body)
  console.log(getQueryStats())
}

function getQueryStats () {
  const stats = queryStats.reduce((acc, curr) => {
    let { operationName } = curr
    if (!operationName) {
      operationName = 'unnamed'
    }

    if (!acc[operationName]) {
      acc[operationName] = 0
    }

    acc[operationName]++
    return acc
  }, {})
  return stats
}

function listCustomers (limit = 10) {
  return db.customer.findAll({ limit })
}

function listProperties (limit = 10) {
  return db.property.findAll({
    limit,
    where: {
      approved: true
    }
  })
}

function findProperties ({ city, bathrooms, bedrooms, limit = 10 }) {
  const where = {
    ...(city != null && { city }),
    ...(bathrooms != null && { bathrooms }),
    ...(bedrooms != null && { bedrooms }),
    approved: true
  }
  return db.property.findAll({
    where,
    limit,
    order: [
      ['id', 'DESC']
    ]
  })
}

function createCustomer (customer) {
  return db.customer.build(customer).save()
}

module.exports = {
  collectQueries,
  getQueryStats,
  listCustomers,
  listProperties,
  findProperties,
  createCustomer
}
