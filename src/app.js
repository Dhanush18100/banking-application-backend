const express=require('express');
const authRoutes=require('./routes/authRoutes');
const accountRouter=require('./routes/accountRoutes')
const cookieParser = require('cookie-parser');
const transactionRoutes=require('./routes/transactionRoutes')


const app=express()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/accounts',accountRouter)
app.use('/api/transactions',transactionRoutes)




module.exports=app;