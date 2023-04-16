const {Product} = require('../models')



exports.all=(req,res)=>{
    Product.findAll().then((prod)=>{
        res.json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.dataID=(req,res)=>{
    const {id} = req.params;
    Product.findByPk(id)
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};


exports.posts=(req,res)=>{
    const {name,description,price,categoryId} = req.body;
    Product.create({name,description,price,categoryId})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
};

exports.changId=(req,res)=>{
    const {id} = req.params;
    const { name,description,price,categoryId} = req.body;
    Product.update({name,description,price,categoryId}, {where: {id}} )
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    });

};

exports.deleteId= (req, res) => {
    const { id } = req.params;
    Product.destroy ({ where: {id}})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}