const {studentRegister, studentLogin} = require("../contants/urls");
const {preRegistration} = require("./registration");
const {preLogin} = require("./login");

class student {
    first_name
    last_name
    isic_number
    nick_name
    password
    constructor() {
        this.first_name = "temp"
        this.last_name = "temp"
        this.isic_number = "temp"
        this.password = "temp"
        this.nick_name = "temp"
    }
    static initAppServices(app) {
        app.post(studentLogin, preLogin());
        app.post(studentRegister, preRegistration((Object.keys(new student()))));
    }
}


module.exports =  {student}