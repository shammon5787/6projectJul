import React from 'react'
import img from '../Food/4.avif'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';


const CardItem = ({id, name, image, price, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-200 rounded-md p-1.5 flex gap-4 mt-1.5 shadow-md'>
            <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-5 cursor-pointer' />
            <img className='w-[55px] h-[55px] rounded-full ' src={image} alt="" />
            <div className='flex'>
                <div className='leading-5 mt-3'>
                    <h1 className='text-slate-700 font-semibold'>{name}</h1>
                    <h1 className='text-slate-700 font-semibold'>$: {price}</h1>
                </div>
                <div className='flex absolute right-5 mt-8 items-center gap-2'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='bg-green-300 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500' />
                    <span className='text-slate-700 font-semibold'>{qty}</span>
                    <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='bg-green-300 rounded-full cursor-pointer hover:bg-blue-700 hover:text-white transition-all duration-500' />
                </div>
            </div>
        </div>
    )
}

export default CardItem