import React from 'react'
import img from '../Food/1.avif'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {

    const dispatch = useDispatch()

  return (
    <div className='bg-white md:w-[50vw] lg:w-[20vw] flex flex-col items-center justify-between p-2 rounded-md '>
        <img className='w-[80px] h-[75px] rounded-full cursor-grab hover:scale-110 transition-all duration-500 ' src= {image} alt="" />
        <div className='flex flex-row items-center justify-between gap-20'>
            <h1 className='text-slate-700 text-xl font-semibold'>{name}</h1>
            <h1 className='text-slate-700 text-xl font-semibold'>$: {price}</h1>
        </div>
        <p className='text-slate-700 text-xl'>
            {desc}
        </p>
        <div className='flex items-center gap-20'> 
            <span className='flex items-center justify-between gap-1'>
            <MdOutlineStarPurple500 className='text-yellow-400 text-3xl' />
            <h1 className='text-slate-700 font-semibold text-xl'>{rating}</h1>
            </span>
            <button onClick={()=>dispatch(add({id, name, image, desc, price, qty : 1}))} className='bg-blue-700 px-2 py-0 rounded-md text-white font-semibold hover:bg-green-600 hover:text-black transition-all duration-500 '>Add To Card</button>
        </div>
    </div>
  )
}

export default FoodCard