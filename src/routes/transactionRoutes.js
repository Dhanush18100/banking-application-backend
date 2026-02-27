const express=require('express')
const authMiddleware = require('../middleware/authMiddleware');

const transactionRoutes=s=express.Router();


transactionRoutes.post("/", authMiddleware.authMiddleware)


module.exports=transactionRoutes


