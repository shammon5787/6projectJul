import React from 'react'
import img from '../Food/3.avif'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({id, name, image, price, desc, rating}) => {

    const dispatch = useDispatch()

    return (
        <div className='bg-slate-800 w-full lg:w-[22vw] flex flex-col items-center rounded-lg mt-5 '>
            <div className='p-5'>
                <img className='w-[190px] h-[130px] rounded-lg cursor-grab hover:scale-110 transition-all duration-500 shadow-2xl ' src={image} alt="" />
            </div>
            <div className='bg-slate-700 w-full h-auto rounded-b-lg p-2'>
                <div className='flex items-center justify-between '>
                    <h1 className='font-semibold'>{name}</h1>
                    <h1 className='font-semibold'>$: {price}</h1>
                </div>
                <p>{desc}.</p>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-2'>
                        <MdOutlineStar className='text-yellow-500 text-3xl' />
                        <h1>{rating}</h1>
                    </span>
                    <button onClick={()=>dispatch(add({id, name, image, price, qty : 1}))} className='bg-slate-800 px-1.5 text-white font-semibold text-xl rounded-md  hover:bg-green-700 hover:text-black transition-all duration-500 mt-4 '>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard