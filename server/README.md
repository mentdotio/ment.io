# Ment.io Server

## Getting started

Requirements/assumptions:
- Postgres
- Node (recent version)
- `npx` or `postgraphile`/`postgraphql@next` installed globally (if CLI mode is desired)
- `nodemon` is installed globally
- You've named your database "mentio_development"

### Database Migrations

To **create** a migration:

```bash
migrate create -ext sql <name>
```

To **run** a migration:

```bash
migrate -database postgres://localhost:5432/mentio_development?sslmode=disable -path ./ up 1
```

The argument following "up" tell `migrate` how many migrations to run.

### Local development
After migrations are up to date, spin up a local GraphQL server by running:

```
yarn dev
```

Or, if you just want to the PostGraphile service globally, use:

```
npx postgraphile -c postgres://postgres@localhost/mentio_development -j -w -o
```
