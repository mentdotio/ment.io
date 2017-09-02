const http = require('http')
const { postgraphile } = require('postgraphile')

http.createServer(
  postgraphile(
      process.env.DATABASE_URL || 'postgres://localhost/',
      {
          graphiql: true,
          watchPg: true,
          showErrorStack: true,
          extendedErrors: ['hint', 'detail', 'errcode']
      }
  )
).listen(process.env.PORT || 3001)