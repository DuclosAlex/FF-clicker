-- Revert ff-clicker:1.create_tables from pg

BEGIN;

DROP TABLE IF EXISTS "monster",
"stages",
"zone",
"personnages_from_user", 
"personnage_base",
"inventory",
"users" CASCADE;

COMMIT;
