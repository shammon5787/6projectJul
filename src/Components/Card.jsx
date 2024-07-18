import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { TbShoppingCartFilled } from "react-icons/tb";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {

    const [activeCard, setactiveCard] = useState(true)
    const selectItem = useSelector((state)=>state.cart.cart)

    const totalItem = selectItem.reduce((totalItem , item)=>totalItem + item.qty, 0)
    const totalPrice = selectItem.reduce((totalPrice, item)=>totalPrice + item.qty * item.price, 0)

    return (
        <>
            <div className={`bg-slate-800 fixed z-50 top-0 right-0 w-full h-full lg:w-[28vw] p-4  ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 `}>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-3xl'>Your Orders</h1>
                    <IoCloseSharp onClick={() => setactiveCard(!activeCard)} className='font-semibold text-3xl cursor-pointer' />
                </div>
                {
                    selectItem.map((food)=>(
                        <CardItem key={food.id} id = {food.id} name = {food.name} image = {food.image} price = {food.price} desc = {food.desc} rating = {food.rating} qty = {food.qty} />
                    ))
                }

                <div className='absolute bottom-4'>
                    <h1 className='font-semibold'>Total Item: {totalItem} </h1>
                    <h1 className='font-semibold'>Total Price: {totalPrice} </h1>
                    <hr />
                    <button className='hover:bg-slate-800 px-1.5 text-white font-semibold text-xl rounded-md  bg-green-700 hover:text-black transition-all duration-500 mt-2 w-[90vw] lg:w-[24vw] '>Add To Card</button>
                </div>
            </div>
            <TbShoppingCartFilled onClick={()=>setactiveCard(!activeCard)} className={`text-6xl cursor-pointer bottom-8 right-7 fixed ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `} />
        </>
    )
}

export default Card