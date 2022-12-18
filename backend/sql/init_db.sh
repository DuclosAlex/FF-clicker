# Je prend l'identité de postgres 

export PGUSER=SpeData

#1. Initialisation de la BDD 

#1.1 Je supprime le user s'il existe et la BDD 

#1 Création de la BDD 

psql -f init_db.sql -d postgres

# 2 Initialisation de sqitch 

# 2.1 J'efface le sqitch.plan

rm sqitch.plan

# 2.2 Je lance l'initialisation 

sqitch init ff_clicker --engine pg