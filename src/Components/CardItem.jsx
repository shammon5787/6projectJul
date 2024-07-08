import React from 'react'

import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';


const CardItem = ({id, name, image, price, desc, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-200 p-1 rounded-md shadow-md flex gap-5 mt-2'>
            <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-7 cursor-pointer' />
            <img className='w-[60px] h-[55px] rounded-full' src={image} alt="" />
            <div className='flex mt-3'>
                <div className='leading-5'>
                    <h1 className='text-slate-700 font-semibold'>{name}</h1>
                    <h1 className='text-slate-700 font-semibold'>$: {price}</h1>
                </div>
                <div className='flex absolute mt-5 right-6 items-center gap-2'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='cursor-pointer bg-green-300 rounded-full font-semibold hover:bg-blue-700 hover:text-white' />
                    <span>{qty}</span>

                    <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer bg-green-300 rounded-full font-semibold hover:bg-blue-700 hover:text-white' />
                </div>
            </div>
        </div>
    )
}

export default CardItem