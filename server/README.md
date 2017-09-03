# Ment.io Server

## Getting started

Requirements/assumptions:
- Postgres
- Node (recent version)
- `npx` or `postgraphile`/`postgraphql@next` installed globally (if CLI mode is desired)
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

### Local development
After migrations are up to date, spin up a local GraphQL server by running:

```
npx postgraphile -c postgres://postgres@localhost/mentio_development -j -w -o
```