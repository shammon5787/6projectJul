import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-white p-2 w-full lg:w-[23vw] flex flex-col items-center rounded-md '>
            <img className='w-[90px] h-[85px] rounded-full hover:cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            <div className='flex items-center gap-72 lg:gap-24'>
                <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
                <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
            </div>
            <p className='text-slate-700 text-xl'>{desc}.</p>
            <div className='flex gap-64 lg:gap-24
             items-center'>
                <span className='flex items-center gap-1'>
                    <MdOutlineStar className='text-xl text-yellow-500' />
                    <h1 className='text-xl font-semibold text-slate-700'>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(add({id, name, price, image, desc, rating, qty :1}))} className='bg-blue-700 rounded-md px-1 font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500'> Add To Card </button>
            </div>
        </div>
    )
}

export default FoodCard