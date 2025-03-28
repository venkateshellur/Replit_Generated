# SQL Scripts for Resume Portfolio Website

This folder contains SQL scripts for setting up and managing the database for the Resume Portfolio Website.

## Scripts

### db_setup.sql

This script creates all the necessary tables and populates them with sample resume data. It includes:

1. Table creation for:
   - users
   - personal_info
   - social_links
   - experience
   - education
   - certifications
   - skills
   - projects

2. Sample data insertion for all tables

### db_reset.sql

This script drops all tables in the database, effectively resetting it to a clean state. Use with caution as it will delete all data.

1. Drops all tables in the correct order to avoid foreign key constraint issues
2. Displays a confirmation message when complete

## How to Use

### Using with psql CLI

To execute the script using the PostgreSQL command-line interface:

```bash
psql -U your_username -d your_database -f "SQL Scripts/db_setup.sql"
```

Replace `your_username` and `your_database` with your PostgreSQL username and database name.

### Using with pgAdmin

1. Open pgAdmin
2. Connect to your server
3. Select the target database
4. Open the Query Tool
5. Open the `db_setup.sql` file
6. Execute the script

## Important Notes

- The script uses `IF NOT EXISTS` for table creation to avoid errors if tables already exist
- When running the script multiple times, you might get unique constraint violations for data that's already inserted
- The script quotes the `order` field as it's a reserved keyword in SQL
- Arrays are created using the PostgreSQL `ARRAY[]` syntax