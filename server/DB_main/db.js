const {rows} = require("pg/lib/defaults");
const Pool = require('pg').Pool;
let instance = null;

const pool  = new Pool({
    host     : 'localhost',
    user     : 'postgres',
    password : 'RoOt',
    database : 'RedditForStudents',
    port     : 5432
});

class DB {
    static conecction = 0;

    static getDbServiceInstance() {
        return instance ? instance : new DB();
    }

    async get_json_query(query) {
        try {
            return await pool.query(query, (err, results) => {
                let result;
                if (err!==undefined && err!==null) {
                    result = new Error(err.toString());
                    return result;
                }
                if (results!==null && results.rows!==undefined && results.rows!==null) {
                    result = results.rows;
                    return result;
                }
                result = new Error("no row");
                return result;
            });
        } catch (error) {
            return new Error(error);
        }
    }
}

module.exports = DB;
