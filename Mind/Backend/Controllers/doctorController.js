import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js"
export const updateDoctor = async (req, res)=> {

const id=req.params.id;

try {

const updatedDoctor= await Doctor.findByIdAndUpdate( 
    id, 
    {$set: req.body},
    {new: true }
);
res.status(200).json({

    success: true,
    message: "Successfully updated",
    data: updatedDoctor,

});

} catch (err) {

res.status(500).json({ success: false, message: "Failed to update" });
}};
//delllllete
export const deleteDoctor = async (req, res)=> {

const id=req.params.id;

try {
await Doctor.findByIdAndDelete( 
    id, 
);
res.status(200).json({

    success: true,

    message: "Successfully deleted ",


});

} catch (err) {

res.status(500).json({ success: false, message: "Failed to delete" });
}};






export const getSingleDoctor = async (req, res)=> {

const id=req.params.id;

try {

const doctor= await Doctor.findById( 
    id, 
).populate('reviews').select("-password");
res.status(200).json({

    success: true,

    message: "Doctor Found",

    data: doctor,

});

} catch (err) {

res.status(404).json({ success: false, message: "No Doctor Found" });
}};
export const getAllDoctor = async (req, res)=> {

    try {

    const {query}=req.query
    let doctors;
    if(query){
        doctors=await Doctor.find({isApproved:'approved',
    $or: [

        {name:{$regex : query,$options :"i"}},
        {specialization:{regex:query,$options:"i"}},
    ]}).select("-password");
    }
    else{
        const doctors= await Doctor.find({}).select("-password").select("-password");

    }
    

    res.status(200).json({
    
        success: true,
    
        message: "Doctor Found",
    
        data: doctors,
    
    });
    
    } catch (err) {
    
    res.status(404).json({ success: false, message: "Not Found" });
    }};
    export const getDoctorProfile=async(req,res)=>{
        const userId =req.userId
        try{
            const user =await User.findById(userId);
            if(!doctor) {
                return res.status(404).json({
                    success:false,message:"Doctor Not Found"
                })
            }
            const {password, ...rest} = doctor._doc;
            const appointments =await Booking.find({doctor: doctorId});
            res.status(200)
            .json({
                success:true,
                message:"Profile info is getting",
                data:{...rest,appointments}
            });}

            catch (err){
                res.status(500).json({success:false , message:"Something went wrong cannot get"});
            }
        }
    


        export const getMyAppointments=async(req,res)=>{
            try{
                const bookings= await Booking.find({user: req.userId})
                const doctorIds = bookings.map(el=>el.doctor.id)
                const doctors =await Doctor.find({_id:{$in:doctorIds}}).select('-password')

                res.status(200).json({success:true,message:"Appointments are getting",data:doctors})
            }catch(err){
                res.status(500).json({success:false,message:"Something went wrong,cannot get"})

            }
        }
    