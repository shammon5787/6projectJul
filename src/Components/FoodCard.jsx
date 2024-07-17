import React from 'react'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, price, image, rating, desc}) => {
    const dispatch = useDispatch()
    return (
        <div className='bg-slate-400 w-full lg:w-[20vw] flex items-center flex-col rounded-lg mt-3 '>
            <div className='m-3'>
                <img className='w-[180px] h-[120px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 ' src={image} alt="" />
            </div>
            <div className='bg-slate-500 pb-3 w-full h-full mt-3 rounded-b-lg'>
                <div className='flex items-center gap-72 justify-center lg:gap-32'>
                    <h1 className='text-slate-800 font-semibold text-xl'>{name}</h1>
                    <h1 className='text-slate-800 font-semibold text-xl'>$: {price}</h1>
                </div>
                <p className='text-slate-800 text-lg items-center justify-center'>
                    {desc}.
                </p>
                <div className='flex items-center gap-72 justify-center lg:gap-24 '>
                    <span className='flex items-center'>
                        <MdOutlineStar className='text-yellow-500 text-3xl' />
                        <h1 className='text-slate-800 font-semibold'>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(add({id, name, image, desc, price, rating, qty : 1}))} className='bg-blue-700 px-1 rounded-md font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500'>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard