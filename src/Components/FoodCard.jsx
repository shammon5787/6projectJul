import React from 'react'
import img from '../Food/4.avif'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {

    const dispatch = useDispatch()

    return (
        <div className='bg-white lg:w-[23vw] rounded-lg flex items-center flex-col p-2 '>
            <img className='w-[90px] h-[80px] rounded-full cursor-pointer hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            <div className='flex gap-72 lg:gap-28 '>
                <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
                <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
            </div>
            <p className='text-slate-700 text-xl'>{desc}.</p>
            <div className='flex items-center gap-64 lg:gap-20 '>
                <span className='flex items-center gap-1'>
                    <MdOutlineStarPurple500 className='text-yellow-500 text-3xl' />
                    <h1 className='text-slate-700 text-2xl'>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(add({id, name, image, price, rating, desc, qty : 1}))} className='bg-blue-700 px-1.5 font-semibold text-white rounded-md hover:bg-green-700 transition-all duration-500 '>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard