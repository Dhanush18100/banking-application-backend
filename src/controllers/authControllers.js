const userModel = require("../models/userModel")
const jwt=require("jsonwebtoken")
const emailService=require('../services/emailService')
const tokenBlackListModel=require('../models/blackListModel')
/**
 * - user register controller
 * - POST /api/auth/register
 */
const registerUser=async (req,res) => {
    try {
        const{email,password,name}=req.body
        if(!email || !password || !name){
            return res.json({
                success:false,
                message:"All fields are required"
            })
        }
        const isExists=await userModel.findOne({
            email:email
        })

        if(isExists){
            return res.json({
                success:false,
                message:"User already exists with this email",
                status:"failed"
            })
        }
        const user=await userModel.create({
            email,password,name
        })

        const token=await jwt.sign({
            userId:user._id
        },process.env.JWT_SECRET,{
            expiresIn:"7d"
        })

        res.cookie("token",token)
        res.json({
            success:true,
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            },
            token
        })
        await emailService.sendRegistrationEmail(user.email,user.name)

    } catch (error) {
        console.log(error.message)
    }
    
}

/**
 * - user login controller
 * - POST /api/auth/login
 */

const loginUser=async (req,res) => {
    
    try {
        const {email,password}=req.body
       if(!email || !password){
        return res.json({
            success:false,
            message:"Both fields required"
        })
       } 
       const user=await userModel.findOne({email}).select("+password")
       if(!user){
        return res.json({
            success:false,
            message:"Email or password is invalid"
        })
       }
     const isValidPassword= await user.comparePassword(password)

     if(!isValidPassword){
        return res.json({
            success:false,
            message:"Email or password is invalid"
        })
     }

     const token=jwt.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:"7d"
     })

     res.cookie("token",token)
        res.json({
            success:true,
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            },
            token
        })
    } catch (error) {
        console.log(error.message)
    }
    
}

const userLogout=async(req,res)=>{
     const token = req.cookies.token || req.headers.authorization?.split(" ")[ 1 ]

    if (!token) {
        return res.status(200).json({
            message: "User logged out successfully"
        })
    }



    await tokenBlackListModel.create({
        token: token
    })

    res.clearCookie("token")

    res.status(200).json({
        message: "User logged out successfully"
    })
}

module.exports={
    registerUser, loginUser ,userLogout
}