const accountModel = require("../models/accountModel")


const createTransaction=async (req,res) => {

    /**
     * 1. Validate request
     */
    
    const{fromAccount, toAccount,amount,idempotencyKey}=req.body

    if(!fromAccount || !toAccount || !amount || !idempotencyKey){
        return res.json({
            success:false,
            message:"FromAccount, toAccount, amount and idempotencyKey are required"
        })
    }

    const fromUserAccount=await accountModel.findOne({
        _id: fromAccount,
    })

    const toUserAccount=await accountModel.findOne({
        _id: toAccount,
    })

    if(!fromUserAccount || !toUserAccount){
        return res.json({
            success:false,
            message:"Invalid fromAccount or toAccount"
        })
    }
}