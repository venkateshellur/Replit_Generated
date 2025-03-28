-- Resume Database Setup Script
-- This script creates all necessary tables and populates them with sample data

-- Create tables
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS personal_info (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  bio TEXT NOT NULL,
  location TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  expertise TEXT[] NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS social_links (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  icon TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS experience (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  achievements TEXT[] NOT NULL,
  technologies TEXT[] NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS education (
  id SERIAL PRIMARY KEY,
  institution TEXT NOT NULL,
  degree TEXT NOT NULL,
  period TEXT NOT NULL,
  description TEXT NOT NULL,
  subjects TEXT[] NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS certifications (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  issuer TEXT NOT NULL,
  year TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  level TEXT NOT NULL,
  percentage INTEGER NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  technologies TEXT[] NOT NULL,
  url TEXT NOT NULL,
  "order" INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed data

-- Personal Info
INSERT INTO personal_info (name, title, bio, location, email, phone, linkedin, expertise)
VALUES (
  'Alex Chen',
  'Senior Software Architect',
  'A passionate software architect with 12+ years of experience building complex, scalable systems. Specialized in cloud architecture, microservices, and leading engineering teams to deliver high-performance solutions.',
  'San Francisco, CA',
  'alex.chen@devarchitect.com',
  '(415) 555-7890',
  'https://linkedin.com/in/alexchen',
  ARRAY['Cloud Architecture', 'Distributed Systems', 'API Design', 'System Optimization', 'Tech Leadership']
);

-- Social Links
INSERT INTO social_links (name, url, icon)
VALUES 
  ('GitHub', 'https://github.com/alexchen', 'github'),
  ('LinkedIn', 'https://linkedin.com/in/alexchen', 'linkedin'),
  ('Twitter', 'https://twitter.com/alexchen', 'twitter'),
  ('Stack Overflow', 'https://stackoverflow.com/users/alexchen', 'stack-overflow');

-- Experience
INSERT INTO experience (company, title, period, description, achievements, technologies, "order")
VALUES 
  (
    'TechScale Solutions',
    'Principal Software Architect',
    '2019 - Present',
    'Leading architecture initiatives for cloud-native applications serving millions of users. Driving technical vision across multiple product teams.',
    ARRAY[
      'Redesigned the core platform using microservices, increasing scalability by 500%',
      'Implemented a CI/CD pipeline that reduced deployment time from days to minutes',
      'Led migration to Kubernetes with zero downtime, saving $1.2M in operational costs'
    ],
    ARRAY['Kubernetes', 'Go', 'gRPC', 'AWS', 'Terraform'],
    1
  ),
  (
    'DataSphere Inc.',
    'Lead Backend Engineer',
    '2016 - 2019',
    'Architected high-throughput data processing systems handling petabytes of data for financial services clients.',
    ARRAY[
      'Built real-time data processing pipeline handling 50,000 events/second',
      'Implemented distributed tracing reducing MTTR from hours to minutes',
      'Developed automated failover system achieving 99.999% uptime'
    ],
    ARRAY['Rust', 'Kafka', 'ClickHouse', 'Redis', 'Docker'],
    2
  ),
  (
    'CodeVerse',
    'Senior Software Engineer',
    '2013 - 2016',
    'Developed distributed systems for mission-critical healthcare applications with strict compliance requirements.',
    ARRAY[
      'Created HIPAA-compliant data storage system for patient records',
      'Built fault-tolerant message broker for inter-service communication',
      'Implemented performance optimizations reducing API response time by 70%'
    ],
    ARRAY['Scala', 'Akka', 'PostgreSQL', 'RabbitMQ', 'ElasticSearch'],
    3
  );

-- Education
INSERT INTO education (institution, degree, period, description, subjects, "order")
VALUES
  (
    'Stanford University',
    'M.S. Computer Science',
    '2010 - 2012',
    'Specialized in Distributed Systems and Machine Learning with research focus on consensus algorithms.',
    ARRAY['Distributed Systems', 'Machine Learning', 'Advanced Algorithms'],
    1
  ),
  (
    'UC Berkeley',
    'B.S. Computer Science',
    '2006 - 2010',
    'Graduated summa cum laude with focus on systems programming and parallel computing.',
    ARRAY['Systems Programming', 'Operating Systems', 'Parallel Computing'],
    2
  );

-- Certifications
INSERT INTO certifications (name, issuer, year, "order")
VALUES
  ('AWS Solutions Architect Professional', 'Amazon Web Services', '2022', 1),
  ('Certified Kubernetes Administrator (CKA)', 'Cloud Native Computing Foundation', '2021', 2),
  ('Google Professional Cloud Architect', 'Google Cloud', '2020', 3),
  ('Hashicorp Terraform Certified', 'HashiCorp', '2019', 4);

-- Skills
-- Programming Languages
INSERT INTO skills (category, name, level, percentage, "order")
VALUES
  ('programmingLanguages', 'Rust', 'Expert', 95, 1),
  ('programmingLanguages', 'Go', 'Expert', 90, 2),
  ('programmingLanguages', 'Scala', 'Advanced', 85, 3),
  ('programmingLanguages', 'TypeScript', 'Advanced', 80, 4),
  ('programmingLanguages', 'Python', 'Advanced', 80, 5);

-- Databases
INSERT INTO skills (category, name, level, percentage, "order")
VALUES
  ('databases', 'PostgreSQL', 'Expert', 90, 1),
  ('databases', 'ClickHouse', 'Expert', 90, 2),
  ('databases', 'MongoDB', 'Advanced', 85, 3),
  ('databases', 'Redis', 'Expert', 90, 4);

-- Cloud & DevOps
INSERT INTO skills (category, name, level, percentage, "order")
VALUES
  ('cloudDevOps', 'Kubernetes', 'Expert', 95, 1),
  ('cloudDevOps', 'AWS', 'Expert', 90, 2),
  ('cloudDevOps', 'Terraform', 'Expert', 90, 3),
  ('cloudDevOps', 'CI/CD', 'Advanced', 85, 4),
  ('cloudDevOps', 'Prometheus/Grafana', 'Advanced', 85, 5);

-- Architecture
INSERT INTO skills (category, name, level, percentage, "order")
VALUES
  ('architecture', 'Microservices', 'Expert', 95, 1),
  ('architecture', 'Event-Driven Architecture', 'Expert', 90, 2),
  ('architecture', 'Distributed Systems', 'Expert', 95, 3),
  ('architecture', 'API Design', 'Advanced', 85, 4);

-- Projects
INSERT INTO projects (name, description, technologies, url, "order")
VALUES
  (
    'Distributed Streaming Platform',
    'Architected a high-throughput streaming data processing platform handling 100K+ events/second with sub-100ms latency. Implemented fault tolerance and automatic recovery mechanisms.',
    ARRAY['Rust', 'Kafka', 'ClickHouse', 'Kubernetes'],
    '#',
    1
  ),
  (
    'Multi-Region Kubernetes Platform',
    'Designed multi-region Kubernetes infrastructure with automated failover capabilities. Implemented service mesh for advanced traffic routing and circuit breaking.',
    ARRAY['Kubernetes', 'Istio', 'Terraform', 'Go'],
    '#',
    2
  ),
  (
    'Financial Data Analytics Engine',
    'Built real-time analytics engine for financial data processing with complex aggregations and compliance requirements. Optimized query performance achieving 50x improvement.',
    ARRAY['Scala', 'Spark', 'Cassandra', 'Grafana'],
    '#',
    3
  ),
  (
    'Secure Healthcare API Gateway',
    'Developed HIPAA-compliant API gateway with advanced authentication, authorization, and audit logging capabilities. Implemented zero-trust architecture with mutual TLS.',
    ARRAY['Go', 'Envoy', 'OAuth2', 'PostgreSQL'],
    '#',
    4
  );