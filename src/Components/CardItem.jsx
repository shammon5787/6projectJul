import React from 'react'
import img from '../Food/1.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, price,image, rating, qty, desc}) => {
    const dispatch =  useDispatch();
  return (
    <div className='bg-slate-100 p-1 rounded-md flex gap-5 mt-1.5 shadow-md'>
        <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-5 cursor-pointer' />
        <img className='w-[60px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex'>
            <div className='leading-4 mt-4'>
                <h1 className='text-slate-700 font-semibold'>{name}</h1>
                <h1 className='text-slate-700 font-semibold'>$: {price}</h1>
            </div>
            <div className='flex absolute mt-8 right-6 gap-2 items-center'>
                <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='cursor-pointer bg-green-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500' />
                <span className='text-slate-700 font-semibold'>{qty}</span>
                <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer bg-green-200 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem