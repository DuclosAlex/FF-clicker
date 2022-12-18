const client = require('./dbClient');

const model = {

    async getAllPerso() {

        const sqlQuery = ` 
        SELECT *
        FROM personnage_base
        ORDER BY id ASC
            ;`;
        const result = await client.query(sqlQuery);
        return result.rows;
        
    }
}

module.exports = model;