import jwt, { decode } from 'jsonwebtoken'
import Doctor from '../models/DoctorSchema.js'
import User from '../models/UserSchema.js'

export const authenticate =async(req,res,next)=> {
    const authToken =req.headers.authorization;
    if (!authToken||!authToken.startsWith("bearer")){
        return res.status(401).json({success:false,message:"no token,authorization denied"});
    }
    try {
        const token =authToken.split(" ")[1];

        const decoded =jwt.verify(token,process.env.JWT_SECRET_key)

        req.userId =decoded.id
        req.role=decoded.role 


        next();
    }catch(err) {
        if (err.name==='tokenExpiredError'){
            return res.status(401).json({message:'token is expired'})
        }
        return res.status(401).json({message:'token is inavalid'})
    }

};

export const restrict =roles=> async(req,res,next)=>{
    const userId=req.userId
    let user;
    const patient=await User.findById(userId)
    const doctor =await Doctor.findById(userId)
    if(patient){
        user=patient
    }
    if(doctor){
        user=doctor
    }
    if(!roles.includes(user.role)){
        return res.status(401).json({sucess:false,message:"You'r not authorized"})
    }
    next();

}