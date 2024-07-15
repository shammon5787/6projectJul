import React from 'react'
import img from '../Food/4.avif'
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='flex gap-5 bg-slate-100 p-2 rounded-lg mt-1.5 shadow-lg'>
            <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-6 cursor-pointer' />
            <img className='w-[50px] h-[50px] rounded-full ' src={image} alt="" />
            <div className='flex'>
                <div>
                    <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
                    <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
                </div>
                <div className='flex items-center gap-2 absolute right-6 mt-8'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='text-slate-700 bg-green-400  text-xs cursor-pointer rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
                    <span>{qty}</span>
                    <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='text-slate-700 bg-green-400  text-xs cursor-pointer rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
                </div>
            </div>
        </div>
    )
}

export default CardItem