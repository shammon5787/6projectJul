import React from 'react'
import img from '../Food/1.avif'
import { FaPlus , FaMinus} from "react-icons/fa";

const CardItems = () => {
    return (
        <div className='flex items-center gap-4'>
            <img className='w-[50px] h-[50px] rounded-full' src={img} alt="" />
            <div className='flex items-center mt-3'>
                <div className='leading-5'>
                    <h1 className='text-slate-700 font-semibold'>My Food</h1>
                    <h1 className='text-slate-700 font-semibold'>$: 30</h1>
                </div>
                <div className='flex items-center absolute right-3'>
                    <FaMinus className='cursor-pointer border rounded-lg text-slate-700' />
                    <span className='mx-2 text-slate-700 font-bold'>1</span>
                    <FaPlus className='cursor-pointer border rounded-lg text-slate-700' />
                </div>
            </div>
        </div>
    )
}

export default CardItems