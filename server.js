const app = require("./src/app")
const dotenv=require("dotenv")
const connectDB = require("./src/db/db")
dotenv.config()


const PORT=process.env.PORT || 3000

connectDB()

app.use(PORT,()=>{
    console.log(`Server is running on http://localhost:{PORT}`)
})
