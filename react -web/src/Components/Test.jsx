import React from 'react';
import Product from './Product';
import { Producthead } from './Product';
import pic from '../images/logopay.png'
import ring from '../images/ringbell.png';
import lappy from '../images/laptop.png';
import inv from '../images/invoice.png';
import ship from '../images/ship.png'


const Test = () => {
    const sellingmenu_head ={
        tt:"Selling online"
        ,para:"Grow your business by making it easier for your customers to pay you "
    }
    const sellingmenu =[
        {
            heading:"PayPal buttons",
            dec:"Create and manage secure buttons for your customers to add items to their cart,buy donate or subscribe."
            ,opt:"manage",
            pic:pic
        },
        {
            heading:"Website preferences",
            dec:"Control how you sell online by truning on express cheakouts and bringing customers back to your website after they pay with PayPal."
            ,opt:"Update",
            pic:lappy
        },
        {
            heading:"Instant pament notifincations",
            dec:"Stay informed by turning on notifications for payments made on your website."
            ,opt:"Update",
            pic:ring
        }

    ]
    const geting_paid ={
        tt:"Getting paid",
        para:"Choose from various payment tools attract your customers.",
        heading:"Invoices",
        dec:"Create professional invoices and customize it as per your requirements."
        ,opt:"Manage",
        pic:inv
    }

    const more_selling ={
        tt:"More selling tools",
        para:"Cheak out the other tools that we have for you to help you sell online.",
        heading:"Shipping preferences",
        dec:"Create your shipping labels for hassle-free returns."
        ,opt:"Create",
        pic:ship
    }
    return (
        
     <div className=''>
           <div className='w-full shadow-lg'>
            <div className='h-[110px]  max-w-screen-lg mx-auto hidden md:block'>
               <ul className='flex justify-around font-semibold items-center h-full'>
                <li>Account</li>
                <li>Security</li>
                <li>Data & Privacy</li>
                <li>Payments</li>
                <li>Notifications</li>
                <li>Seller Tools</li>
                <li>Statements and taxes</li>
               </ul>
            </div>
            <select className='mx-auto block  w-[65%] py-3  bg-[#F8F8F8] p-3 focus:outline-none md:hidden'>
            <option>Account</option>
            <option>Security</option>
            <option>Data & privacy</option>
            <option>Payments</option>
            <option>Notifications</option>
            <option>Seller Tools</option>
            <option>taxes</option>

            </select>
        </div>
      <div className='max-w-screen-xl mx-auto'>
      <div className=' md:ml-[100px] ml-[20px] mt-2 md:mt-10'>
            <h1 className='text-[#363636] font-bold text-xl md:text-3xl'>Seller Tools</h1>
            <p className='text-[#666666]'>Sell onlline easily and grow your  bussiness with Seller Tools . Create Paypal <br /> buttons,get instant payment notifications,and do much more</p>
        </div>
        <div className='md:ml-[150px] ml-[25px]'>
            <Producthead {...sellingmenu_head}/>
            {
                sellingmenu.map(
                    (prod)=>{
                        return <Product {...prod}/>
                    }
                )
            }
            <Producthead {...geting_paid} />
            <Product {...geting_paid}/>
            <Producthead {...more_selling} />
            <Product {...more_selling}/>

        </div>
      </div>
        
     </div>
    );
}

export default Test;
