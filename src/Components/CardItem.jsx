import React from 'react'
import img from '../Food/1.avif'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add, decrementItem, incrementItem, remove } from '../Store.jsx/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {

    const dispatch = useDispatch()

  return (
    <div className='bg-slate-100 shadow-md p-2 rounded-md flex gap-5 mt-1'>
        <img className='w-[60px] h-[55px] rounded-full' src= {image} alt="" />
        <div className='flex'>
        <div className='leading-5 mt-3'>
            <h1 className='text-slate-700 font-semibold'>{name}</h1>
            <h1 className='text-slate-700 font-semibold'>$: {price}</h1>
        </div>
        <div className='flex mt-8 absolute right-7 gap-2 items-center'>
            <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})): qty = 1} className='text-slate-700 text-xl cursor-pointer bg-green-300 rounded-full hover:bg-blue-700 transition-all duration-500 hover:text-white' />
            <span className='text-slate-700 text-xl'>{qty}</span>
            <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='text-slate-700 text-xl cursor-pointer bg-green-300 rounded-full hover:bg-blue-700 transition-all duration-500 hover:text-white' />
        </div>
        </div>
    </div>
  )
}

export default CardItem