-- Resume Database Reset Script
-- This script drops all tables related to the resume project
-- WARNING: This will delete all data in these tables

-- Drop tables (in reverse order of creation to avoid foreign key constraints)
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS certifications;
DROP TABLE IF EXISTS education;
DROP TABLE IF EXISTS experience;
DROP TABLE IF EXISTS social_links;
DROP TABLE IF EXISTS personal_info;
DROP TABLE IF EXISTS users;

-- Confirmation message (will appear in psql output)
DO $$
BEGIN
    RAISE NOTICE 'All resume database tables have been dropped successfully.';
END $$;