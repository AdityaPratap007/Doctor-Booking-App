 import React from 'react'
 import heroImg01 from '../assets/images/hero-img01.png';
 import heroImg02 from '../assets/images/hero-img02.png';
 import heroImg03 from '../assets/images/hero-img03.png';
 import icons01 from '../assets/images/icon01.png';
 import icons02 from '../assets/images/icon02.png';
 import featureImg from '../assets/images/feature-img.png';
 import videoIcon from '../assets/images/video-icon.png';
 import avatarIcon from '../assets/images/avatar-icon.png';


 import icons03 from '../assets/images/icon03.png';
 import {Link } from 'react-router-dom';
 import {BsArrowRight} from 'react-icons/bs';
 import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';
import DoctorList from '../components/Doctors/DoctorList';

 
 const Home = () => {
   return <>

  
   <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className="container">
      <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
        <div>
          <div className="lg:w-[570px]">
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px]  md:leading-[50px]'>
            "Mental health…is not a destination, but a process. It’s about how you drive, not where you’re going." — Noam Shpancer
            </h1>
            <p className='text__para'>
            Mental health conditions are common worldwide,
             with approximately 1 in 4 people experiencing a 
             mental health disorder at some point in their lives.
            </p>
            <button className='btn'>Request an Appointment</button>
          </div>



          <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5px lg:gap[30px]">
            <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">30+</h2>
            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
            <p className="text__para "> Years of Experience</p>
            </div>
            <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
            <p className="text__para ml-[10px]"> Clinic Location</p>
            </div>
            <div>
            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
            <p className="text__para ml-[10px]"> Patient Satisfaction</p>
            </div>



            
            </div>


        </div>
        <div className="flex gap-[30px] justify-end">
          <div>
            <img classname="w-full" src={heroImg01} alt="" />
          </div>
          <div className="mt-[30px]">
            <img className="w-full mb-[30px]"src={heroImg02} alt="" />
            <img src={heroImg03} alt="" className="w-full" />
          </div>
        </div>

      </div>
    </div>
   </section>
   <section>
    <div className="container">
      <div className="lg:w-[470px] mx-auto">
        <h2 className="heading text-center">
          Providing the best MEDICAL SERVICES
        </h2>
        <p className="text__para text-center">World Class care for everyone. Our health system with unmatched,expert health care</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30]px mt-[30px] lg:mt-[55px]">

        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center"><img src={icons01} alt="" /></div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-7 text-textColor font-[400] mt-4 text-center">Find a Doctor</h2>
            <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center ">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error possimus sunt corporis 
            totam minus ipsa facere nihil quasi? Vel facere ea officia reiciendis in.
            </p>
            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center 
            justify-center group hover:bg-primaryColor hover:border-none '>
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
          </div>
        </div>
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center"><img src={icons02} alt="" /></div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-7 text-textColor font-[400] mt-4 text-center">Find a Location</h2>
            <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center ">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error possimus sunt corporis 
            totam minus ipsa facere nihil quasi? Vel facere ea officia reiciendis in.
            </p>
            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center 
            justify-center group hover:bg-primaryColor hover:border-none '>
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
          </div>
        </div>
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center"><img src={icons03} alt="" /></div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-7 text-textColor font-[400] mt-4 text-center">Book Appointment</h2>
            <p className="text-[16px] leading-7 text-text-Color font-[400] mt-4 text-center ">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur error possimus sunt corporis 
            totam minus ipsa facere nihil quasi? Vel facere ea officia reiciendis in.
            </p>
            <Link to="/doctors" className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center 
            justify-center group hover:bg-primaryColor hover:border-none '>
              <BsArrowRight className="group-hover:text-white w-6 h-5"/>
            </Link>
          </div>
        </div>
      </div>
    </div>
   </section>
   
{/* <.....................................................................About..........................> */}
<About/>


<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto ">
      <div className="heading text-center">Our Medical Services</div>
      <p className="text__para text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum debitis quasi nihil saepe qui accusantium!</p>
    </div>
    
<ServiceList/>
  </div>
</section>
{/* <........................FFFFAFAFAFASFASDFSF.> */}
<section>
  <div className="container">
    <div className="flex items-center justify-between flex-col lg:flex-row">
      <div className="xl:w-[670px]">
        <h2 className="heading">
          Get Virtual Treatment <br/> Anytime
        </h2>
        <ul className="pl-4">
          <li className="textpara">Lorem ipsum dolor sit amet.</li>
          <li className="textpara">Lorem ipsum dolor sit amet consectetur.</li>
          <li className="textpara">Lorem ipsum dolor sit amet.</li>
          <li className="textpara">Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
        <Link to="/">
        <button className='btn '> Learn More</button>  </Link>
        </div>
          {/* <image feature ki></image> */}
          <div className="relative Z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="" />
            <div className="w-150px lg:w-[240px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 lg:pt-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className='flex items-center gap-[6px] lg:gap-3'>
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-headingColor font-[600]">
                  Tue, 24
                </p>
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-textColor font-[400]">
                  10:00 AM
                </p>
              </div>
              <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[6px]'>
                <img src={videoIcon} />
              </span>
              </div>
            

<div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text- [8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">

Consultation

</div>

<div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">

<img src={avatarIcon} alt=""></img>
<h4 className='text-[10px] leading-3 lg:text-[16px] font-[700] lg:leading-[22px]'>Wayne Collins</h4>
</div>
          </div>
      </div>



    </div>
  </div>
</section>

<section>

<div className="container">

<div className="xl:w-[470px] mx-auto">

<h2 className="heading text-center">Our Great Doctors</h2>

<p className="text_para text-center">

World-class care for everyone. Our health Systen offers unmatched, expert health care.

</p>

</div>

<DoctorList/>
</div>

</section>


   </>
  // <............................................................>





 }
 
 export default Home
 