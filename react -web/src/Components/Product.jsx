import React from 'react'

export default function Product({heading,dec,opt,pic}) {
    return (
        <div>
        <div className='border flex justify-start items-center md:w-[700px] p-3 m-3 rounded-lg md:relative'>
            <div className='h-16 w-16 rounded-full  flex justify-center items-center bg-[#F6F5EF] shrink-0'>
                <img src={pic} alt="" className='w-[70%] ' />
            </div>
            <div className='mx-3 w-[500px]'>
                <h3 className='font-semibold text-xl text-[#0A0A0A]'>{heading} </h3>
                <p className='text-[#626262] hidden md:block'>{dec}</p>
            </div>
            <h3 className='text-[#1473DE] font-semibold text-md pr-1 md:w-20 md:absolute  right-0 cursor-pointer'>{opt}</h3>
        </div>
        </div>
    )
}

const Producthead=({tt,para})=>{
    return(
        <div className='mt-14'>
            <h2 className='font-semibold text-xl  text-[#0A0A0A]'>{tt}</h2>
            <p className='text-[#626262] p-1'>{para}</p>
        </div>
    )
}

export {Producthead} ;