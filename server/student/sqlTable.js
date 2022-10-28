
const sql = require("sql");
let studentSQL = sql.define({
    name: 'students',
    columns: [
        'id',
        'first_name',
        'last_name',
        'isic_number',
        'nick_name',
        'password'
    ]
});

module.exports =  {studentSQL}