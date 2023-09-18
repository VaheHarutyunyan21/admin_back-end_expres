const {User} = require('../models')
const CryptoJS =require('crypto-js');
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;


function generateAccessToken(id,email,isAdmin) {
    return jwt.sign({id,email,isAdmin},SECRET, { expiresIn: '1h' });
  }

    exports.loginController = async(req,res)=>{
        const email = req.body.email;
        const password1=req.body.password;
        if (!email && !password1) {
            return res.status(403).json('Validation error')
        }
        const password = CryptoJS.SHA256(password1).toString();
        User.findOne ({ where: {email} })
        .then((prod)=>{
            if (prod.email == email && prod.password == password) {
                let token = generateAccessToken(prod.id,prod.email,prod.isAdmin)
                console.log(token);
                 res.status(201).json(token)
                // res.send(JSON.stringify({status:"Logged in",jwt:token}));
            }else {
                return (res.sendStatus(403))
            }

        }).catch((err)=>{
            res.status(500).json({error: err.message})
        })
    }