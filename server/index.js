const http = require('http')
const { postgraphql } = require('postgraphql')

http.createServer(
  postgraphql(
      {
          user: 'postgres',
          host: 'localhost',
          database: 'mentio_development',
          // password: '',
          port: 5432
      },
      'public',
      {
          // jwtSecret: null,
          graphiql: true,
          watchPg: true,
          showErrorStack: true,
          extendedErrors: ['hint', 'detail', 'errcode'],
          enableCors: true
      }
  )
).listen(5000)