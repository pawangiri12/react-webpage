import React, { useState } from 'react';
import { BsPaypal } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Header = () => {
    const [togglemenu, settoglemenu] = useState(false);
    const menu = [
        {
            names: "Dashboard"
        },
        {
            names: "Finances"
        }
        , {
            names: "Send and Resquest"

        }, {
            names: "Deals"

        }, {
            names: "Wallet"

        }, {
            names: "Activity"

        }, {
            names: "Help"

        }

    ]


    return (
        <div className='bg-[#152B8E] max-w-full '>
            <nav className=' grid md:grid-cols-3 md:h-20 text-white'>
                <ul className=' justify-center h-full items-center gap-7 ml-5  col-span-2 md:flex hidden'>
                    <li className=' text-xl'><BsPaypal /></li>
                  
                    {
                        menu.map(
                            (n, i) => {
                                return <li key={i}>{n.names}</li>
                            }
                        )
                    }
                </ul>
                <ul className=' hidden md:flex justify-center items-center h-full gap-4'>
                    <li><FaBell /></li>
                    <li><IoIosSettings /></li>
                    <Link to={""}>
                    <li className='uppercase'>log out</li>
                    </Link>
                </ul>

                {/* {mobile  responsive} */}
                <ul className='flex justify-between items-center mx-2 py-3 text-lg   md:hidden'>
                    <li><BsPaypal /></li>
                    <li className='flex items-center gap-4'>
                    <Link to={""}>
                    <li className='uppercase'>log out</li>
                    </Link>
                        <li className='mr-1' onClick={() => settoglemenu(true)}><GiHamburgerMenu /></li>

                    </li>
                    {/* {responsive nav items} */}

                </ul>
                <div className={`${togglemenu ? 'right-0' : 'right-[-100%]'}  top-0 fixed  md:hidden h-svh duration-300  w-full border bg-[#273c9a] z-[9999]`}>
                    <ul className='flex justify-between p-3 text-xl'>
                        <li><BsPaypal /></li>
                        <li className='cursor-pointer' onClick={() => settoglemenu(false)}><IoCloseSharp className='border rounded' /></li>
                    </ul>
                    <ul className='flex flex-col justify-center items-center gap-5 mt-10'>
                       {
                        menu.map(
                            (m,i) =>{
                                return <li key={i} className=''>{m.names}</li>
                            }
                        )
                       }
                    </ul>
                </div>

            </nav>
        </div>
    );
}

export default Header;
