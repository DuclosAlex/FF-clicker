const client = require('./dbClient')

const model = {

    async getOneUser(id) {

        let user;
        try {

            
            const sqlQuery =  `
            SELECT * 
            FROM users AS u
            INNER JOIN inventory AS i ON u.id = i.users_id    
            WHERE u.id=$1
            ;`;
            const values = [id];
            
            user = client.query(sqlQuery, values);

        } catch(e) {
            console.log(e)
        }

        return user;
            
    }
}

module.exports = model;