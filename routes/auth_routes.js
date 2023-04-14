const authRegister=require("../controller/registerController")



exports.register_routes=(app)=> {

    app.post('/register',authRegister.register)

}

