const express=require('express');
const authRoutes=require('./routes/authRoutes');
const accountRouter=require('./routes/accountRoutes')
const cookieParser = require('cookie-parser');


const app=express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/accounts',accountRouter)




module.exports=app;