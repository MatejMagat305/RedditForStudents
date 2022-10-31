const {studentRegister, studentLogin} = require("../contants/urls");
const {preRegistration} = require("./registration");
const {preLogin} = require("./login");

class student {
    nick_name
    isic
    password
    constructor() {
        this.nick_name = "temp"
        this.password = "temp"
        this.isic = "temp"
        
    }
    static initAppServices(app) {
        app.post(studentLogin, preLogin());
        app.post(studentRegister, preRegistration((Object.keys(new student()))));
    }
}


module.exports =  {student}