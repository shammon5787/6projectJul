import React from 'react'
import img from '../Food/1.avif'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, rating, desc, price}) => {
  const dispatch = useDispatch()
  return (
    <div className='bg-white w-full p-1 lg:w-[18vw] flex flex-col items-center rounded-md'>
        <img className='w-[80px] h-[70px] rounded-full cursor-grab hover:scale-110 transition-all duration-500' src= {image} alt="" />
        <div className='flex items-center justify-between gap-16'>
            <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
            <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
        </div>
        <p className='text-slate-700 text-xl'>{desc}</p>
        <div className='flex items-center gap-20'>
            <span className='flex items-center justify-between gap-2'>
            <FaStar className='text-yellow-600' />
            <h1>{rating}</h1>
            </span>
            <button onClick={()=>dispatch(add({id, name, image, desc, rating, price, qty : 1}))} className='bg-blue-700 py-0 px-2 font-semibold text-xl rounded-md hover:bg-green-700 hover:text-white transition-all duration-500'>Dinner</button>
        </div>
    </div>
  )
}

export default FoodCard