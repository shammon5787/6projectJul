import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, remove } from '../Store/CardSlice';

const CardItem = ({id, name, price, image, qty}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-700 rounded-md p-2 flex gap-5 shadow-2xl mt-1.5'>
            <MdDelete onClick={()=>dispatch(remove({id}))} className='absolute right-6 cursor-pointer hover:text-black transition-all duration-500' />
            <img className='w-[55px] h-[55px] rounded-full ' src={image} alt="" />
            <div className='flex'>
                <div className='leading-5 mt-3'>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>$: {price}</h1>
                </div>
                <div className='flex items-center gap-2 absolute right-6 mt-8'>
                    <FaMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='cursor-pointer hover:text-black transition-all duration-500' />
                    <h1>{qty}</h1>
                    <FaPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer hover:text-black transition-all duration-500' />
                </div>

            </div>
        </div>
    )
}

export default CardItem