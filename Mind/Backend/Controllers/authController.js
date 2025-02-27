import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const generateToken =user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_key),{
        expiresIn:"15d",
    }
}


export const register =async(req,res)=>{
    const {email,password,name,role,photo,gender}=req.body
    try{
        let user =null
        if(role==='patient'){
            user= await User.findOne({email})
        }
        else if (role==='doctoe'){
            user =User.findOne({email})
        }
        if(user){
            return res.status.json({message:'User already exist'})
        }
        //hash password
        const salt =await bcrypt.genSalt(10)
        const hashPassword =await bcrypt.hash(password,salt)
        if (role==='patient'){
            user=new User({
                name,email,password:hashPassword,photo,gender,role
            })
        if (role==='doctor'){
             user= await new Doctor({
                name,email,password:hashPassword,photo,gender,role
            })
        }
        await user.save()
        res.status(200).json({success:true,message:'User succesfully created'})
    }
}
    catch (err){
        res.status(500).json({success:false,message:'Internal Server Error,Try again'})


    }
}
export const login =async(req,res)=>{
    const {email,password}=req.body
    try{
        let user=null
        const patient= await User.findOne({email})
        const doctor=await Doctor.findOne({email})
        if(patient){
            user=patient
        }
        if (doctor){
            user=doctor
        }

        //check if user doesnot exist
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        //password check kare hum yha
        const isPasswordmatch= await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordmatch){
            return res.status(400).json({statu : false, message:"Invalid Password"});

        }
        //get token
        const token = generateToken(user);

        const {password,role,appointments,...rest}=user._doc

        res
        .status(200)
        .json({status:true,message:"Sucessfully Login",token,data:{...rest},role})
    }
    catch(err){
        res
        .status(200)
        .json({status:true,message:"Failed to Login"})

    }
}