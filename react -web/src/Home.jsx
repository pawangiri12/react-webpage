import React from 'react';
import pic from '../src/images/check.png'
import { FaFacebook } from "react-icons/fa6"
import { FaTwitter } from "react-icons/fa6";
import { MdQrCode2 } from "react-icons/md";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='md:w-[400px] mx-auto flex flex-col justify-center bg-[#F7F9FB] items-center my-3 '>
            <div className=''>
            <div className='w-28'>
                <img src={pic} alt="" />
            </div>
            </div>
            <h1 className='font-thin text-2xl text-[#585858] my-7'>Your Product link is ready </h1>
            <p className='p-3 text-center text-[#292929]'>You can spread the word by sharing this link on-email,social media,chat,whatsapp and  more </p>
            <div className='flex gap-10 text-[#0071B5] font-bold text-3xl my-7'>
                <FaFacebook/>
                <FaTwitter/>
                <MdQrCode2/>
              
            
            </div>
        
            <button className='w-[80%] bg-[#0075B5] p-2 rounded-2xl mx-auto text-white font-semibold hover:text-[#0075b5] hover:bg-white hover:border-[#0075b5] hover:border-[2px] box-border' >Get link</button>
            
            <br />
            <Link to={"test"} className='w-full  flex justify-center'>
            <button className='w-[80%] text-[#0075B5] p-2 rounded-2xl bg-white  border-[#0075B5] border-[2px] mb-10 hover:text-white hover:bg-[#0075B5]'>Return to dashbord</button>
            </Link>
        </div>
    );
}

export default Home;
