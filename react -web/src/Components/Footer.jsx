import React from 'react';
import paypalpic from '../images/paypal2.png';
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <div className='w-full shadow '>
                <div className='max-w-screen-xl   mx-auto  h-20 flex flex-col items-center md:gap-10 md:flex-row pt-4 md:pt-0'>
                    <div className='md:ml-[110px]'>
                        <img src={paypalpic} alt="" className='w-[100px]' />
                    </div>
                    <ul className='flex font-semibold gap-4'>
                        <li>Help</li>
                        <li>Contact us</li>
                        <li>Security</li>
                        <li>Fees</li>
                    </ul>
                </div>
            </div>
          <div className='w-full shadow'>
          <div className='max-w-screen-xl md:mt-2  flex-col md:flex-row  flex h-20 items-center mx-auto pt-4 md:pt-0'>
                <div className='flex justify-center items-center text-[#959595] md:ml-[110px]'>
                    <div>
                        <MdOutlineCopyright />
                    </div>
                    <div>
                        1999-2022 paypal,Inc. All rights reserved.

                    </div>
                </div>
                <ul className='flex font-semibold gap-5 ml-5'>
                    <li>Privacy</li>
                    <li>legal</li>
                    <li>Policy Updates</li>
                </ul>
            </div>
          </div>
        </div>
    );
}

export default Footer;
