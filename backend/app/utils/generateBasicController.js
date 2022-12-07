const generateBasicController = (model) => ({
    async getAll(req, res) {
      try {
        const data = await model.findAll();
        res.json(data);
      } catch(e) {
        res.send('Failed');
      }
    },
    async getOne(req, res, next) {
      try {
        const id = req.params.id;
        
        const data = await model.findByPk(id);
        
        // Soit je n'ai pas trouvé mes données
        if(!data) {
          // J'appel mon prochain middleware et stop l'execution de ma fonction. Si aucun middleware derrière, retournera une 404
          next();
          return;
        }
        // Soit je les ai trouvé, je les renvoie
        res.json(data);
      } catch(e) {
        res.status(500).send('Failed');
      }
    },
    async create(req, res) {
      try {
        const rawData = req.body;
  
        const data = await model.create(rawData);
  
        res.json(data);
      } catch(e) {
        res.status(500).send(e.errors || 'Failed');
      }
    },
    async update(req, res, next) {
      try {
        const id = req.params.id;
        const rawData = req.body;
        // Card.update va retourner un tableau de deux éléments
        // Le premier élément est le nombre d'élément mis à jours
        // Le deuxième contient un tableau avec toutes les données mises à jours
        // Vu que dans notre cas, on ne modifiera qu'une seul donné, on peut récupérer juste cette donnée grâce à la destructuration
        // const resultUpdate = await Card.update(...);
        // const nbUpdatedCard = resultUpdate[0];
        // const card = resultUpdate[1][0];
        // équivalent à
        const [nbUpdatedData, [data]] = await model.update(rawData, {
          where: {
            id: id
          },
          // returning permet de retourner les valeurs de notre élément mis à jour
          returning: true
        });
  
        // Si aucune carte n'a été mise à jour c'est que notre carte n'existe pas, on appel le middleware suivant
        if(nbUpdatedData === 0) {
          next();
          return;
        }
  
        res.json(data);
      } catch(e) {
        res.status(500).send(e.errors || 'Failed');
      }
    },
    async delete(req, res, next) {
      try {
        const id = req.params.id;
        const nbRemoved = await model.destroy({
          where: {
            id: id
          }
        });
  
        // Si aucun élément supprimer, on appel le middleware suivant
        if(!nbRemoved) {
          next();
          return;
        }
  
        res.json({
          removedId: id
        });
      } catch(e) {
        res.status(500).send('Failed');
      }
    }
  })
  
  module.exports = generateBasicController;