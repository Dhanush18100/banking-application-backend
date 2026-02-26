const userModel = require("../models/userModel")
const jwt=require("jsonwebtoken")


const authMiddleware=async (req,res,next) => {
    const token=req.cookies.token || req.headers.authorization?.split(" ")[1]

    if(!token){
        return res.json({
            success:false,
            message:"Unauthorized access"
        })
    }

    try {

        const decoded=jwt.verify(token,process.env.JWT_SECRET)

        const user=await userModel.findById(decoded.userId)

        req.user=user

        return next()

        
    } catch (error) {
        console.log(error.message)
         return res.json({
            success:false,
            message:"Unauthorized access"
        })
    }

}

module.exports={
    authMiddleware
}