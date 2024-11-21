import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';
import connectDB from './db/db.js';
import routes from './routes/routes.js'
const app=express()

dotenv.config({
    path: '.env'
})

app.use(cors())
app.use(express.json())

app.use("/api",routes)



connectDB()
.then(()=>{
    app.listen(4000,()=>{
        console.log("Server is running on port 4000");
        
    })
}).catch((error)=>{
    console.log("DB CONNECTION ERROR", error)
})

