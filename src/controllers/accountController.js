const accountModel = require("../models/accountModel");



const createAccount=async (req,res) => {

    const user=req.user;

    const account=await accountModel.create({
       user:user._id   
    })
    res.json({
        success:true,
        account
    })
    
}

const getUserAccountController=async (req,res) => {
    const accounts=await accountModel.find({user:req.user._id})

    res.status(200).json({
        accounts
    })

}

const getAccountBalance=async(req,res)=>{
    const {accountId}=req.params;

    const account=await accountModel.findOne({
        _id:accountId,
        user:req.user._id
    })

    if(!account){
        return res.status(404).json({
            message:"Account not found"
        })
    }

    const balance=await account.getBalance()

    res.status(200).json({
        accountId:account._id,
        balance:balance
    })
}

module.exports={
    createAccount,getUserAccountController,getAccountBalance
}