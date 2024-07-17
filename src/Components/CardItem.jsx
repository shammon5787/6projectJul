import React from 'react'
import img from '../Food/2.avif'
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
  return (
    <div className='bg-slate-200 rounded-lg p-1.5 flex gap-5 mt-1.5 shadow-md'>
        <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-4 cursor-pointer' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3'>
                <h1 className='text-slate-800 font-semibold'>{name}</h1>
                <h1 className='text-slate-800 font-semibold'>$: {price}</h1>
            </div>
            <div className='flex items-center mt-8 absolute right-5 gap-2'>
                <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty =1} className='cursor-pointer bg-slate-400 hover:bg-slate-50 rounded-full transition-all duration-500' />
                <span className='text-slate-800 font-semibold'>{qty}</span>
                <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer bg-slate-400 hover:bg-slate-50 rounded-full transition-all duration-500' />
            </div>
        </div>
    </div>
  )
}

export default CardItem