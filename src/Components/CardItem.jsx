import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, desc, qty}) => {

  const dispatch = useDispatch()

  return (
    <div className='bg-slate-100 p-2 shadow-md rounded-md flex gap-5 items-center mt-2'>
        <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-4 mb-10 cursor-pointer' />
        <img className='w-[55px] h-[55px] rounded-full ' src= {image} alt="" />
        <div className='leading-5 mt-3'>
            <h1>{name}</h1>
            <h1>$: {price}</h1>
        </div>
        <div className='flex mt-6 absolute right-3 items-center gap-3'>
            <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 0} className='cursor-pointer bg-green-500 rounded-full hover:bg-black hover:text-white transition-all duration-500' />
            <span>{qty}</span>
            <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer bg-green-500 rounded-full hover:bg-black hover:text-white transition-all duration-500' />
        </div>
    </div>
  )
}

export default CardItem