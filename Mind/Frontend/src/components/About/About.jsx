import React from 'react'
import aboutImg from '../../assets/images/about.png';
import aboutCarding from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
  <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col
        lg:flex-row ">
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                <img src={aboutCarding} alt="" />
            </div>
            </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 ">
            <h2 className="heading">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, harum!
            </h2>
            <p className="text__para mt-[30px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusamus 
                reiciendis eos quis voluptatem laudantium 
                doloremque dolorem corrupti maiores molestias fugit mollitia ratione est et facere, quae cum. Ducimus ipsum minus nulla vel laudantium perferendis.
            </p>
            <p className="text__para mt-[30px]"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam porro autem vitae numquam laboriosam obcaecati minus quo sequi, cupiditate modi! Distinctio harum a quibusdam aliquam at. Hic nobis eligendi molestias assumenda voluptate doloribus accusantium.</p>
            <Link to="/">
                <button className='btn'>
                    Learn More
                </button>
            </Link>
        </div>

        </div>
    </div>
  </section>

  )
}

export default About
