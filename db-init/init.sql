DO
$do$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'visiondb') THEN
      CREATE DATABASE visiondb;
   END IF;
END
$do$;