import React, { useState } from 'react'
import { MdClose } from "react-icons/md";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { BsCartFill } from "react-icons/bs";

const Card = () => {

    const [activeCard, setactiveCard] = useState(true)

    const selectItem = useSelector((state)=>state.cart.cart)

    return (
        <>
        <div className={`bg-white fixed top-0 right-0 w-full lg:w-[22vw] h-full p-3 ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
            <div className='flex items-center justify-between'>
                <h1 className='text-slate-700 text-xl font-semibold'>Your Orders</h1>
                <MdClose onClick={()=>setactiveCard(!activeCard)} className='text-slate-700 text-xl font-semibold cursor-pointer bg-green-200 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-500' />
            </div>

            {
                selectItem.map((food)=>(
                    <CardItem key={food.id} id = {food.id} name = {food.name} price = {food.price} image = {food.image} rating = {food.rating} qty = {food.qty} desc = {food.desc} />
                ))
            }

            <div className='absolute bottom-2'>
                <h1 className='text-slate-700 font-semibold text-xl'>Total Items: </h1>
                <h1 className='text-slate-700 font-semibold text-xl'>Total Price: </h1>
                <hr />
                <button className='bg-blue-700 px-1 rounded-md font-semibold text-white hover:bg-green-700 hover:text-black transition-all duration-500 mt-2 w-[90vw] lg:w-[20vw] '>BreakFast</button>
            </div>
        </div>
        <BsCartFill onClick={()=>setactiveCard(!activeCard)} className={`text-3xl fixed right-10 bottom-10 cursor-pointer ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card