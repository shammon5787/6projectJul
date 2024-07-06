import React from 'react'
import img from '../Food/1.avif'
import { FaStar } from "react-icons/fa6";

const FoodCard = ({id, name, image, desc, rating, price}) => {
  return (
    <div className='bg-white w-full lg:w-[18vw] flex flex-col items-center p-3 rounded-lg '>
        <img className='w-[80px] h-[70px] rounded-full hover:scale-110 transition-all duration-500 cursor-grab' src= {image} alt="" />
        <div className='flex items-center justify-between gap-24 py-3'>
            <h1 className='text-slate-700 font-bold'>{name}</h1>
            <h1 className='text-slate-700 font-bold'>$: {price}</h1>
        </div>
        <p className='text-slate-700 font-semibold'>{desc}</p>
        <div className='flex items-center justify-between gap-20'>
            <span className='flex items-center justify-center gap-1'>
                <FaStar className='text-yellow-500' />
                <h1 className='text-slate-700 font-bold'>{rating}</h1>
            </span>
            <button className='bg-blue-700 py-0 px-0 text-white rounded-md hover:bg-green-700  transition-all duration-500'>Add To Card</button>
        </div>
    </div>
  )
}

export default FoodCard