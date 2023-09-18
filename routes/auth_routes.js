const authRegister=require("../controller/registerController")
const authLogin=require('../controller/loginController')


exports.register_routes=(app)=> {
    app.post('/register',authRegister.register)
}

exports.login_routes=(app)=> {
    app.post('/login',authLogin.loginController)
}
