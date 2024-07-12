import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, rating, desc}) => {

    const dispatch = useDispatch()

    return (
        <div className='mt-8 bg-white lg:w-[23vw] rounded-md flex flex-col items-center p-2 '>
            <img className='w-[90px] h-[80px] rounded-full cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            <div className='flex gap-x-24'>
                <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
                <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
            </div>
            <p className='text-slate-700 text-xl'>{desc}</p>
            <div className='flex gap-20 items-center'>
                <span className='flex items-center gap-2'>
                    <h1 className='text-yellow-500 text-3xl'><MdOutlineStar/></h1>
                    <h1 className='text-slate-700 text-xl font-semibold'>{rating}</h1>
                </span>
                <button onClick={()=>dispatch(add({id, name, image, desc, price, qty :1}))} className='bg-blue-700 py-0 px-1 rounded-md text-white font-semibold hover:bg-green-700 hover:text-black transition-all duration-500'>Add To Card</button>
            </div>
        </div>
    )
}

export default FoodCard