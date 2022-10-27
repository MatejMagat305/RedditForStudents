const Pool = require('pg').Pool; // existuje nieco ako Client - sluzi na tranzakcie
let instance = null;

const pool  = new Pool({
    host     : 'localhost',
    user     : 'postgres',
    password : 'postgres',
    database : 'RedditForStudents',
    port     : 5432
});

// asi sa to takto neroby ale je to funkcne pokial bude file  moc zahlteni zmenime to 
class DB {
    static conecction = 0;

    static getDbServiceInstance() {
        return instance ? instance : new DB();
    }
    

    async get_test() {
        try {
            return await new Promise((res, req) => {
                
                const query = `SELECT * from users`;
                pool.query(query, (err, results) => {
                    if (err) req(new Error(err.message));
                    res(results.rows);
                })
            })
        } catch (error) {
            return new Error(error);
        }
    }

    async get_test2(max) {
        try {
            return await new Promise((res, req) => {
                
                const query = `SELECT * from users where id < $1`;
                pool.query(query,[max], (err, results) => {
                    if (err) req(new Error(err.message));
                    res(results.rows);
                })
            })
        } catch (error) {
            return new Error(error);
        }
    }
}

module.exports = DB;
