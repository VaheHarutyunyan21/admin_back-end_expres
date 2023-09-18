const carts_controller = require('../controller/carts_controller')



function create_carts_routes(app) {

    app.get('/carts',carts_controller.all )
    app.get('/dataCarts/:id', carts_controller.dataID)
    app.post('/carts', carts_controller.posts)
    app.put('/changCarts/:id',carts_controller.changId)
    app.delete('/deleteCarts/:id',carts_controller.deleteId)
    
}
module.exports = {create_carts_routes}