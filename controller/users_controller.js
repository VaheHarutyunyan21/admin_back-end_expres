const {User} = require('../models')



exports.all=(req,res)=>{
    User.findAll().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}




exports.dataID=(req,res)=>{
    const {id} = req.params;
    User.findByPk(id)
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}



exports.deleteId= (req, res) => {
    const { id } = req.params;
    User.destroy ({ where: {id}})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    });

}