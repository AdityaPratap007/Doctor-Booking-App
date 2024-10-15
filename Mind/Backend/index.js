import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js"

import doctorRoute from "./Routes/doctor.js"





dotenv.config()
 const app =express()
 const port =process.env.PORT || 8000

 const corsOptions ={ 
    origin:true
 }
 app.get('/',(req,res)=>{
    res.send('api is working')
 })
 //dtb connection
 mongoose.set('strictQuery',false)
const connectDB =async()=>{
    try{ 
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('Mongodb connected')
    }
    catch(err){
            console.log('mongo ka break fail')
    }
}
 //middleware
 app.use(express.json())
 app.use(cookieParser())
 app.use(cors(corsOptions))
 app.use('/api/v1/auth',authRoute)
 app.use('/api/v1/users',userRoute)
 
 app.use('/api/v1/doctors',doctorRoute)

 app.listen(port,()=>{
    connectDB();
    console.log("throught out the heaven and earth i alone am the honoured one-Satrou Gojo " +port);
 })