const crypto = require("crypto");
const DB = require("../DB_main/db");
const {studentSQL} = require("./sqlTable");
const hour = require("../contants/date.js");

const db = DB.getDbServiceInstance();
function preLogin(){
    return  async function(req, res) {
        try {
            const query = await studentSQL
                .select(studentSQL.star())
                .from(studentSQL)
                .where(studentSQL.nick_name.equals(req.body.nick_name))
                .toQuery();
            const rows = await db.get_json_query(query);
            if (rows instanceof Error) {
                res.status(500).send(rows.toString());
                return;
            }
            if (!rows.length) {
                res.status(500).send({msg: "wrong username or password"});
                return;
            }
            const row = rows[0];
            const hash = crypto.createHash('sha256').update(req.body.password).digest('hex').toString();
            if (row.password===hash) {
                delete row["password"];
                req.session.loggedin = true;
                req.session.nick_name = row.nick_name;
                req.session.expire = new Date(Date.now() + hour);
                res.status(200).json(row);
            } else {
                res.status(500).send({msg: "wrong username or password"});
            }
        } catch (e) {
            res.status(500).send({msg: e.toString()});
        }
    }
}
module.exports =  {preLogin}
