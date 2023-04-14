const {User} = require('../models')
const CryptoJS =require('crypto-js');
const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;


// function generateAccessToken(users_id,username,isAdmin) {
//     return jwt.sign({users_id,username,isAdmin},SECRET, { expiresIn: '1h' });
//   }
  
  
//   exports.loginController = async(req, res) => {
//       const username = req.body.username
//       const password = req.body.password
//        const hashed_password = CryptoJS.SHA256(password).toString();
//       let sql = "SELECT * from users WHERE username = ?"
//       await db.get (sql,[username], function(err, row){
//         if(username == row.username && hashed_password == row.password) {
//            let token = generateAccessToken(row.users_id,row.username,row.isAdmin)
//              res.send(JSON.stringify({status:"Logged in",jwt:token}));
//         }else {
//             return (res.sendStatus(403))
//         }
  
//       }) 
//     }


    exports.loginController = async(req,res)=>{
        const email = req.body.email;
        const password1=req.body.password;
        const password = CryptoJS.SHA256(password1).toString();
        User.findOne ({ where: { email} })
        .then((prod)=>{
            if (prod.email == email && prod.password == password) {
                res.status(201).json(prod)
            }else {
                             return (res.sendStatus(403))
                        }

            // console.log(prod);
            // res.status(201).json(prod)
            
        }).catch((err)=>{
            res.status(500).json({error: err.message})
        })
    }