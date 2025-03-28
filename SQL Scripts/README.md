# SQL Scripts

This directory contains SQL scripts used for setting up and managing the database for the resume application.

## Directories

- **PostgreSQL**: Contains scripts specific to PostgreSQL database setup, including schema creation and data seeding.

## Available Scripts

- `db_setup.sql`: Creates the database schema and inserts initial data
- `db_reset.sql`: Resets the database by dropping all tables and recreating them

## How to Use

These scripts can be executed against a PostgreSQL database to set up the required schema and initial data for the resume application. They are already integrated with the application but can also be run manually if needed.

```bash
# To run the setup script manually
psql -U yourusername -d yourdatabase -f PostgreSQL/db_setup.sql

# To reset the database
psql -U yourusername -d yourdatabase -f PostgreSQL/db_reset.sql
```

Note: The application automatically handles database migrations through Drizzle ORM, so manual execution is typically not necessary.