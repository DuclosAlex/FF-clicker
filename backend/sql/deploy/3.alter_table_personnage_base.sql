BEGIN;

ALTER TABLE IF EXISTS public.personnage_base
    ADD COLUMN powerclick_base integer NOT NULL;


COMMIT;