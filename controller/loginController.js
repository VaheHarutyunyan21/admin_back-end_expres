const {User} = require('../models')
const CryptoJS =require('crypto-js')
const jwt = require('jsonwebtoken');
require('dotenv').config();
 
const SECRET = process.env.SECRET;