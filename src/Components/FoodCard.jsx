import React from 'react'
import img from '../Food/3.avif'
import { FaStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add } from '../Store.jsx/CardSlice';

const FoodCard = ({id, name, image, price, rating, desc}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-white lg:w-[23vw] items-center flex flex-col p-2 rounded-md  '>
            <img className='w-[85px] h-[80px] rounded-full cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            <div className='flex items-center gap-20'>
                <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
                <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
            </div>
            <p className='text-slate-700 text-2xl'>{desc}</p>
            <div className='flex items-center gap-20'>
                <span className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400 text-xl' />
                    <h1>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(add({id, name, image, desc, price, rating, qty: 1}))} className='bg-blue-700 font-semibold text-xl text-slate-200 rounded-md hover:bg-green-700 transition-all duration-500 hover:text-black'>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard