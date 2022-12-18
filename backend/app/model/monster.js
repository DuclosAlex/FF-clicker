const client = require('./dbClient');

const model = {

    async getOneMonster(id) {

        let monster;
        try {

            const sqlQuery = `
            SELECT *
            FROM monster AS m
            WHERE m.id = $1
            ;`;
            const values = [id];

            monster = client.query(sqlQuery, values);
        } catch(e) {
            console.log(e);
        }

        return monster;
    }
}

module.exports = model;