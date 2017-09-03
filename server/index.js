const http = require('http')
const { postgraphql } = require('postgraphql')

http.createServer(
  postgraphql(
      {
          user: 'postgres',
          host: 'postgres://postgres@localhost',
          database: 'mentio_development',
          password: '',
          port: 4569
      },
      'public',
      {
          graphiql: true,
          watchPg: true,
          showErrorStack: true,
          extendedErrors: ['hint', 'detail', 'errcode']
      }
  )
).listen(5000)