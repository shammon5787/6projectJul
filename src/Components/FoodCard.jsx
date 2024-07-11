import React from 'react'
import img from '../Food/1.avif'
import { MdStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { add } from '../Store/CardSlice';

const FoodCard = ({ id, name, image, price, desc, rating }) => {

const dispatch = useDispatch()

  return (
    <div className='bg-white lg:w-[22vw] rounded-md flex flex-col items-center justify-between p-2 '>
      <img className='w-[85px] h-[80px] rounded-full hover:scale-110 transition-all duration-500 cursor-grab ' src={image} alt="" />
      <div className='flex items-center gap-20'>
        <h1 className='text-slate-700 font-semibold text-xl'>{name}</h1>
        <h1 className='text-slate-700 font-semibold text-xl'>$: {price}</h1>
      </div>
      <p className='text-slate-700 text-xl'>{desc}</p>
      <div className='flex items-center gap-20'>
        <span className='flex items-center gap-1'>
          <MdStar className='text-yellow-500 text-2xl' />
          <h1 className=' text-xl text-slate-700'>{rating}</h1>
        </span>
       
        <button onClick={()=>dispatch(add({id, name, image, price, desc, rating, qty : 1}))}  className='bg-blue-700 px-1 rounded-md font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500'>Add To Card</button>
      </div>
    </div>
  )
}

export default FoodCard