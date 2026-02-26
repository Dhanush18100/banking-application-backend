const express=require('express')
const authMiddleware=require('../middleware/authMiddleware')
const accountController = require('../controllers/accountController')

const router=express.Router()

/**
 * - POST /api/accounts/
 * - create a new account
 * - Protected route
 */

router.post('/',authMiddleware.authMiddleware,accountController.createAccount)


module.exports=router