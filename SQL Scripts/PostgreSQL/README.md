# PostgreSQL Scripts

This folder contains SQL scripts specific to PostgreSQL for the Resume Portfolio Website.

## Available Scripts

### db_setup.sql

This script creates all the necessary tables in PostgreSQL and populates them with sample resume data. It includes:

1. Table creation statements using PostgreSQL syntax
2. Sample data insertion with proper PostgreSQL array format (`ARRAY[]`)
3. Default timestamp handling using `DEFAULT CURRENT_TIMESTAMP`

### db_reset.sql

This script drops all tables from the PostgreSQL database, effectively resetting it to a clean state. Use with caution as it will delete all data.

## PostgreSQL-Specific Features Used

- `SERIAL` for auto-incrementing primary keys
- `TEXT[]` for array columns
- `IF NOT EXISTS` for conditional table creation
- PostgreSQL's `DO $$` anonymous code blocks for notices

## Replit PostgreSQL Connection

In the Replit environment, PostgreSQL connection details are automatically provided as environment variables:

- `PGHOST` - PostgreSQL server host
- `PGPORT` - PostgreSQL server port
- `PGUSER` - PostgreSQL username
- `PGPASSWORD` - PostgreSQL password
- `PGDATABASE` - PostgreSQL database name
- `DATABASE_URL` - Complete connection string

The application uses these environment variables to connect to the database.