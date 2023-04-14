const CryptoJS =require('crypto-js')
const {User} = require('../models')


exports.register = async(req,res)=>{
    const email = req.body.email;
    const password1=req.body.password;
    const password = CryptoJS.SHA256(password1).toString();
    User.create({email,password})
    .then((prod)=>{
        res.status(201).json(prod)
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
}

