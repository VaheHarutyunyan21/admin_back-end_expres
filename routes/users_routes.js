const users_controller = require('../controller/users_controller')





function create_users_routes(app) {

    app.get('/users',users_controller.all )
    app.get('/dataUsers/:id', users_controller.dataID)
    app.delete('/deleteUsers/:id', users_controller.deleteId)
    
}
module.exports = {create_users_routes}