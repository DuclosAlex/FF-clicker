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
            
    },

    async insertUser(user) {

        let userDB;
        try {

            const sqlQuery = `
            INSERT INTO users ( username, email, password )
            VALUES ($1, $2, $3)
            RETURNING *
            `;
            const values = [ user.username, user.email, user.password];
            const result = await client.query(sqlQuery, values);
            userDB = result.rows[0];
        } catch(e) {
            console.log(e);
        }

        return userDB;
    }
}

module.exports = model;