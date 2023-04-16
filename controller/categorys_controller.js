const {Category} = require('../models')



exports.all=(req,res)=>{
    Category.findAll().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.dataID=(req,res)=>{
    const {id} = req.params;
    Category.findByPk(id)
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.posts=(req,res)=>{
    const {name} = req.body;
    Category.create({name})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};

exports.changId=(req,res)=>{
    const {id} = req.params;
    const { name} = req.body;
    Category.update({name}, {where: {id}} )
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    });

};

exports.deleteId= (req, res) => {
    const { id } = req.params;
    Category.destroy ({ where: {id}})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}