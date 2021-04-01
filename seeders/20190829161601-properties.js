'use strict'

const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const properties = []
    for (let i = 0; i < 1e3; i++) {
      properties.push({
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipCode: faker.address.zipCode(),
        country: 'United States',
        bedrooms: faker.datatype.number(5),
        bathrooms: faker.datatype.number(5),
        area: faker.datatype.number(3000),
        description: faker.random.words(5),
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('properties', properties, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('properties', null, {})
  }
}
