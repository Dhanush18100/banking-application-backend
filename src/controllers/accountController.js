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

module.exports={
    createAccount,
}