const bcrypt = require("bcrypt");
const DB = require("../DB_main/db");
const {studentSQL} = require("./sqlTable");
const db = DB.getDbServiceInstance();
function preLogin(){
    return  async function(req, res) {
        try {
            const body = req.body;
            const query = await studentSQL
                .select(studentSQL.star())
                .from(studentSQL)
                .where(studentSQL.name.equals(body.name))
                .toQuery();
            const row = await db.get_json_query(query)
            if (row instanceof Error) {
                res.status(500).send(row.toString());
                return;
            }
            if (!row.length) {
                res.status(500).send("name not matches");
                return;
            }
            const validPassword = await bcrypt.compare(req.body.password, row.password);
            if (validPassword) {
                res(row);
            } else {
                res.status(500).send("password not matches");
            }
        } catch (e) {
            res.status(500).send(e.toString());
        }
    }
}
module.exports =  {preLogin}