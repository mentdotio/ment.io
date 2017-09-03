# Ment.io Server

## Database Migrations

To **create** a migration:

```bash
migrate create -ext sql <name>
```

To **run** a migration:

```bash
migrate -database postgres://localhost:5432/mentio_development?sslmode=disable -path ./ up 1
```