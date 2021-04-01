# GraphQL Node.js API Example

This is an example of a GraphQL API in Node.js with Apollo Server, PostgreSQL and Heroku.

## Installation

``` sh
npm install
```

## Configuration

Please set the following environment variables to run the application

* `DATABASE_URL` - PostgreSQL Connection String

## Setup Database

``` sh
export NODE_ENV=production
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
## License

See [LICENSE](LICENSE) file.

