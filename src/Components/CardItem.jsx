import React from 'react'
import img from '../Food/2.avif'
import { FaMinus, FaPlus } from "react-icons/fa6"; 
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ( {id, name, price, image, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='bg-slate-100 rounded-md flex gap-5 mt-2 shadow-md'>
        <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-6 mt-1 cursor-pointer' />
        <img className='w-[55px] h-[55px] rounded-full ' src={image} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3.5'>
                <h1 className='text-slate-700 font-semibold'>{name}</h1>
                <h1 className='text-slate-700 font-semibold'>$: {price}</h1>
            </div>
            <div className='flex absolute right-6 mt-8 items-center gap-2'>
                <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-slate-700 bg-green-300 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500'/>
                <span>{qty}</span>
                <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='text-slate-700 bg-green-300 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem