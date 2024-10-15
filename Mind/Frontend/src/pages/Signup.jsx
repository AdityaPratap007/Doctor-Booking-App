
import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-toastify';
import { BASE_URL } from "../config";
import HashLoader from 'react-spinners/HashLoader'
const Signup = () => {
const [loading,setLoading]=useState(false);
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    // photo: selectedFile,
    role:'patient',
    gender:'',
    });
 const navigate = useNavigate()
  const handleInputChange=e=>{
    setFormData({ ... formData, [e.target.name]: e.target.value });
    

  } ;
  // const handleFileInputChange =async (event)=>{
  //   const file =event.target.files[0];
  //   const data = await uploadImageToCloudinary(file);
    
  //   setPreviewURL(data.url);

  //   setSelectedFile(data.url);
  //   setFormData({...formData,photo:data.url})
    

  // };
  const submitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        // Handle non-2xx response status codes
        const { message } = await res.json();
        throw new Error(message);
      }
  
      // Handle successful registration
      const { message } = await res.json();
      setLoading(false);
      toast.success(message);
      navigate('/login');
    } catch (error) {
      // Handle fetch or server-side errors
      console.error('Registration error:', error);
      toast.error('Registration failed. Please try again.');
      setLoading(false);
    }
  };
  
return(
<section className="px-5 xl:px-0 flex justify-center ">
<div className="max-w-[1170px] mx-auto">
{/* <div className="grid grid-cols-1 "> */}
  
<div className="rounded-1-lg lg:pl-16 py-10">
<h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 justify-center flex items-center">
Create an <span className="text-primaryColor ml-2 underline hover:text-irisBlueColor">Account </span>
</h3>
<form onSubmit={submitHandler}>
<div className="mb-5">
<input type="text" placeholder="Full Name" name="name" value={formData.name}
onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer " required/>
</div>
<div className="mb-5">
<input type="email" placeholder="Enter Your Email" name="email" value={formData.email}
onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer " required/>
</div>
<div className="mb-5">
<input type="password" placeholder="Enter Password" name="password" value={formData.password}
onChange={handleInputChange}  className="w-full pr-4 px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer " required/>
</div>
<div className="mb-5 flex item-enter justify-between">
  <label htmlFor=""className="text-headingColor font-bold text-[16px] leading-7" >
    Are You a:
    <select name="role" className="text-textColor font-sdemibold text-[15px] leading-7 px-4 py-3 focus:outline-none" value={formData.role}
onChange={handleInputChange}>
    <option value="patient">Patient </option>
    <option value="doctor">Doctor</option>
</select>
</label>
<label className="text-headingColor font-bold text-[16px] leading-7"value={formData.gender}
onChange={handleInputChange}>
Gender:
<select
name="gender"
className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3
focus:outline-none">
<option value="">Select</option>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
</label>

</div>

{/* <div className="mb-5 flex items-center gap-3 ">
{ selectedFile && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
<img src={previewURL}alt=" " className="w-full rounded-full"/>
</figure>}
<div className="relative w-[130px] h-[50px]">
  <input 
  type="file"
  name="photo"
  id="customFile"
  onChange={handleFileInputChange}
  accept=".jpg,.jpeg,.png"
  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"/>
 <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] bold text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor hover:text-irisBlueColor hover::bg- font-semibold rounded-lg truncate cursor-pointer">Upload Photo</label>

</div>

</div> */}


<div className="mt-7">
<button disabled={loading && true} type="submit" className="w-full ☐ bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3">
{loading? (<HashLoader size={35} color="#ffffff"/> ): ('Sign Up') }
</button>
</div>
<p className="mt-5 ☐ text-textColor text-center">
Already have an account?
<Link to="/login"
className="text-primaryColor font-medium ml-1"
>
Login
</Link>
</p>
</form>
</div>
</div>
{/* </div> */}
</section>
);
};
export default Signup;