// Vytvorenie Express aplikacie
const express = require("express");
const {student} = require("./student/student");
const app = express();
app.use(express.json());     // req.body
student.initAppServices(app);








/*
// jednoducha api
app.get("/api", (req,res) => {
    res.json({"skuska":"ano fungujem"})
} )

app.get("/apidb", async (req,res) => {
    try {
        const query = `SELECT * from users`;
        const resoult = await db.get_json_query(query);
        console.log(resoult)
        res.json(resoult);
    } catch (err) {
        console.log(err.massage);
    }
} )

app.post("/apidb2", async (req,res) => {
    try {
        const {maximum} = req.body;
        const query = `SELECT * from users where id < $1`;
        const resoult = await db.get_json_query_arguments(query, [maximum]);
        console.log(resoult)
        res.json(resoult);
    } catch (err) {
        console.log(err.massage);
    }
} )

 */
const PORT = 5000; 
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));