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

router.get('/',authMiddleware.authMiddleware,accountController.getUserAccountController)

router.get('/balance/:accountId',authMiddleware.authMiddleware,accountController.getAccountBalance)


module.exports=router