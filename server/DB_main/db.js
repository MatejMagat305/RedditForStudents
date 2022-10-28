const Pool = require('pg').Pool; // existuje nieco ako Client - sluzi na tranzakcie
let instance = null;

const pool  = new Pool({
    host     : 'localhost',
    user     : 'postgres',
    password : 'RoOt',
    database : 'RedditForStudents',
    port     : 5432
});

// asi sa to takto neroby ale je to funkcne pokial bude file  moc zahlteni zmenime to 
class DB {
    static conecction = 0;

    static getDbServiceInstance() {
        return instance ? instance : new DB();
    }
    

    async get_json_query(query) {
        try {
            return await new Promise(() => {
                pool.query(query, (err, results) => {
                    if (err) return(new Error(err.message));
                    return results.rows;
                })
            })
        } catch (error) {
            return new Error(error);
        }
    }

    async get_json_query_arguments(query, query_arguments) {
        try {
            return await new Promise(() => {
                pool.query(query,query_arguments, (err, results) => {
                    if (err) return(new Error(err.message));
                    return results.rows;
                })
            })
        } catch (error) {
            return new Error(error);
        }
    }
}

module.exports = DB;
