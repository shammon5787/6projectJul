import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import CardItems from './CardItems';

const Card = () => {

    const [activeCard, setactiveCard] = useState(true)

    return (
        <div className={`bg-white fixed top-0 right-0 w-full lg:w-[25vw] h-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold text-2xl'>Your Orders</h1>
                <IoCloseSharp onClick={()=>setactiveCard(!activeCard)} className='font-semibold text-2xl cursor-pointer animate-spin hover:animate-none' />
            </div>

            <CardItems />

            <div className='flex flex-col gap-1 absolute bottom-0'>
                <h1 className='text-slate-700 font-semibold' >Total Items: </h1>
                <h1 className='text-slate-700 font-semibold' >Total Price: </h1>
                <hr />
                <button className='bg-blue-700 text-2xl py-0 lg:w-[24vw] w-[90vw] mb-4 px-0 text-white rounded-md hover:bg-green-700  transition-all duration-500'>Check Out</button>
            </div>
        </div>
    )
}

export default Card