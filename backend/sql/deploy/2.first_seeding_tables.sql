BEGIN;

INSERT INTO "users" ("id", "username", "email", "password") VALUES 
    (1, 'alex', 'alex@something.truc', 'testPassword');

INSERT INTO "personnage_base" ("name", "lvl", "power_click", "cost", "auto_click_cost", "growth_rate", "images", "game_logo_img", "quotes", "episode" ) VALUES
    ('Cloud Strife', 0, 100, 25, 5000, 1.25, '/assets/images/personnages/ff7/cloud.jpeg', '/assets/images/logogame/logoff7.jpeg', 'Désolé, je ne suis pas intéressé', '7' ),
    (E'Y\'shtola', 0, 5, 2500, 40000, 1.53, '/assets/images/personnages/ff14/yshtola.jpeg', '/assets/images/logogame/logoff14.jpeg', E'Je vais vous montrez pourquoi j\'ai choisi le nom de Matoya', '14'),
    ('Balthier', 0, 12, 9000, 100000, 1.39, '/assets/images/personnages/ff12/balthier.jpeg', '/assets/images/logogame/logoff12.jpeg', 'Les pirates retrouvent leurs ailes', '12'),
    ('Edge', 0, 24, 17800, 400500, 1.48, '/assets/images/personnages/ff4/edge.jpeg', '/assets/images/logogame/logoff4.jpeg', 'Vous pensez que notre colère est une faiblesse ? Alors laissez-moi vous montrer... comment vous avez tort !', '4'),
    ('Ramza', 0, 41, 30000, 985000, 1.21, '/assets/images/personnages/fftactics/ramza.jpeg', '/assets/images/logogame/logofftactics.jpeg','What stokes the fires of this conflict? ', 'tactics'),
    ('Squall', 0, 55, 51000, 10, 1.58, '/assets/images/personnages/ff8/squall.jpeg', '/assets/images/logogame/logoff8', 'Squall Sentence', '8'),
    ('Minwu', 0, 69, 65000, 10, 1.37, '/assets/images/personnages/ff2/minwu.jpeg', '/assets/images/logogame/logoff2', 'Minwu Sentence', '2'),
    ('Galuf', 0, 76, 82300, 10, 1.49, '/assets/images/personnages/ff5/galuf.jpeg', '/assets/images/logogame/logoff5', 'Galuf Sentence', '5'),
    ('Vivi', 0, 99, 100520, 10, 1.21, '/assets/images/personnages/ff9/vivi.jpeg', '/assets/images/logogame/logoff9', 'Vivi Sentence', '9'),
    ('Prishe', 0, 113, 146000, 10, 1.19, '/assets/images/personnages/ff11/prishe.jpeg', '/assets/images/logogame/logoff11', 'Prishe Sentence', '11'),
    ('Gladiolus', 0, 142, 210000, 10, 1.51, '/assets/images/personnages/ff15/gladiolus.jpeg', '/assets/images/logogame/logoff15', 'Gladiolus Sentence', '15'),
    ('Yuffie', 0, 170, 400000, 10, 1.14, '/assets/images/personnages/ff7/yuffie.jpeg', '/assets/images/logogame/logoff7', 'Yuffie Sentence', '7'),
    ('Celes', 0, 213, 653050,10, 1.34, '/assets/images/personnages/ff6/celes.jpeg', '/assets/images/logogame/logoff6', 'Celes Sentence', '6');


INSERT INTO "inventory" ("users_id", "xp_amount", "powerclick_amount", "gils") VALUES
    (1, 0, 1, 0);

-- INSERT INTO "personnages_from_user" ("name", "lvl", "power_click", "cost", "auto_click_cost", "growth_rate", "images", "teams_id" ) VALUES
--     ('Cloud Strife', 5, 5, 5000, 5000, 1.17, '/assets/images/cloud_strife.png',1),
--     ('Yshtola', 3, 15, 12500, 40000, 1.52, '/assets/images/Yshtola.png',1),
--     ('Balthier', 3, 36, 599000, 100000, 1.29, '/assets/images/balthier.jpeg',1);


INSERT INTO "zone" ("id", "zone_number", "background_img") VALUES 
    (1, 1, '/assets/images/zone/midgarff7.jpg');

INSERT INTO "stages" ("id", "stage_number", "number_of_monster", "gold_obtainable", "zone_id") VALUES 
    (1, 1, 10, 0, 1),
    (2, 2, 10, 0, 1);

INSERT INTO "monster" ("name", "image", "pv", "stage_id") VALUES 
    ('Shinra Gun Soldier', '/assets/images/monster/ff7/Grenade_Combattant_FF7.webp', 30, 1),
    ('Shinra Sword Soldier', '/assets/images/monster/ff7/SOLDIER_1ST_FF7.webp', 45, 1),
    ('Blood Taste', '/assets/images/monster/ff7/Blood_Tasteff7.webp', 65, 1),
    ('Blood Taste', '/assets/images/monster/ff7/Blood_Tasteff7.webp', 65, 1),
    ('Grunt', '/assets/images/monster/ff7/Grunt_FF7.webp', 90, 1),
    ('Blood Taste', '/assets/images/monster/ff7Blood_Tasteff7.webp', 100, 1),
    ('Shinra Sword Soldier', '/assets/images/monster/ff7/SOLDIER_1ST_FF7.webp', 110, 1),
    ('Shinra Gun Soldier', '/assets/images/monster/ff7/Grenade_Combattant_FF7.webp', 115, 1),
    ('Proto Machine-Gun', '/assets/images/monster/ff7/Proto_Machinegun_FF7.webp', 125, 1),
    ('Proto Machine-Gun', '/assets/images/monster/ff7/Proto_Machinegun_FF7.webp', 150, 1),
    ('Crazy Saw', '/assets/images/monster/ff7/Grenade_Combattant_FF7.webp', 250, 1);

COMMIT;