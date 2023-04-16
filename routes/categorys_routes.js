const categorys_controller = require('../controller/categorys_controller')

function create_categorys_routes(app) {


    
    app.get('/categorys',categorys_controller.all )
    app.get('/dataCategorys/:id', categorys_controller.dataID)
    app.post('/categorys', categorys_controller.posts)
    app.put('/changCategorys/:id',categorys_controller.changId)
    app.delete('/deleteCategorys/:id',categorys_controller.deleteId)
    
     }
    
     module.exports = {create_categorys_routes}