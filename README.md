# FF-Clicker ( side project idle game)

Basé sur les techno d'Express pour le backend, Postgres pour la bdd et JS Vanilla côté front, ce projet est réalisé dans un but d'entrainement.

Il s'agit d'un clicker game ( cf. cookie clicker) basée sur le thème de Final Fantasy, qui consiste à clicker sur des monstres pour obtenir de l'expérience.

Cette expérience pourra être dépensé pour acquérir des personnages et obtenir ainsi encore plus d'expérience. La finalité de ce jeu est donc de consommer tout votre temps libre.

## Tâches actuellement terminées

- Base de l'API/Backend posé
- Base du HTML/CSS posé
- Initialisation de la partie depuis le début
- Gestion des Click et Gain d'xp
- Augmentation du Lvl d'un personnage et diminution du sotck d'XP en conséquence
- Ajout du prochain personnage a acheté quand le dernier personnage de la liste passe au Lvl 1
- Ajout du personnage mystère quand le dernier personnage non acheté est dévoilé
- Gestion de l'activation/désactivation des bouttons de Level Up

## Tâche/Feature à travailler

- Modifier le backend, passer de Sequelize à un modèle avec Datamapper
- Versionning de la BDD
- Modification de la BDD pour correspondre au rework du MCD
- Seeding plus important de la BDD pour poursuivre le développement
- Potentiel test à mettre en place ?
- Ajout de la feature qui gère les points de vie des monstres clickés
- Ajout de la feature qui modifie le monstre à clicker si les PV du monstre précédant atteigne ou dépasse 0 ( Manuel/Auto ? )
- Ajout du gain de Gil en battant un ennemie
- Ajout du système de Zone/Stage
- Ajout d'un système de temps limite pour vaincre un ennemi/Boss ?
- Gérer le CSS/HTML pour toutes les nouvelles features

### Pour le futur

- Ajout de l'autoclick
- Ajout du Login/Register
- Gestion de la récupération des personnages lors de la connexion
- Gestion des gains hors connexion ?
- Gestion sauvegarde de la partie
