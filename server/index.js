const http = require('http')
const postgraphile = require('postgraphile').postgraphile

console.log('postgraphile: ', postgraphile);

http.createServer(
  postgraphile(
      {
          user: 'postgres',
          host: 'postgres://localhost',
          database: 'mentio_development',
          password: '',
          port: 4569,
      },
      'public',
      {
          graphiql: true,
          watchPg: true,
          showErrorStack: true,
          extendedErrors: ['hint', 'detail', 'errcode']
      }
  )
).listen(8080)